import { registration } from 'components/redux/auth/operations';
import { useDispatch } from 'react-redux';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Button } from 'components/commonComponents.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const userName = event.target.elements.username.value;
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    dispatch(registration({ name: userName, email, password }));

    event.target.reset();
  };

  return (
    <Box w="100%" p={4}>
      <Formik
        initialValues={{ userName: '', email: '', password: '' }}
        validationSchema={Yup.object({
          userName: Yup.string().required('Required'),
          password: Yup.string()
            .min(6, 'Must be 6 characters or more')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
        })}
        onSubmit={({ userName, email, password }, { setSubmitting }) => {
          setTimeout(() => {
            dispatch(registration({ name: userName, email, password }));
            setSubmitting(false);
          }, 400);
        }}
      ></Formik>
      <Form>
        <Field name="userName">
          {({ field, form }) => (
            <FormControl isInvalid={form.errors.name && form.touched.name}>
              <FormLabel>User Name</FormLabel>
              <Input
                {...field}
                placeholder="Person"
                width="300px"
                type="text"
                focusBorderColor="black"
                borderRadius="0"
              />
              <FormErrorMessage>{form.errors.name}</FormErrorMessage>
            </FormControl>
          )}
        </Field>
        <Field name="email">
          {({ field, form }) => (
            <FormControl isInvalid={form.errors.email && form.touched.email}>
              <FormLabel>Email</FormLabel>
              <Input
                {...field}
                placeholder="example@email.com"
                width="300px"
                type="email"
                focusBorderColor="black"
                borderRadius="0"
              />
              <FormErrorMessage>{form.errors.email}</FormErrorMessage>
            </FormControl>
          )}
        </Field>
        <Field name="password">
          {({ field, form }) => (
            <FormControl
              isInvalid={form.errors.password && form.touched.password}
            >
              <FormLabel>Password</FormLabel>
              <Input
                {...field}
                width="300px"
                type="text"
                focusBorderColor="black"
                borderRadius="0"
              />
              <FormErrorMessage>{form.errors.password}</FormErrorMessage>
            </FormControl>
          )}
        </Field>
        <Button type="submit">Register</Button>
      </Form>
    </Box>
  );
};
