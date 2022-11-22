import { registration } from 'components/redux/auth/operations';
import { useDispatch } from 'react-redux';
import {
  Center,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  return (
    <Center w="100%" p={4}>
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
      >
        <Form>
          <Field name="userName">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel mb={2}>User Name</FormLabel>
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
                <FormLabel mt={3} mb={2}>
                  Email
                </FormLabel>
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
                <FormLabel mt={3} mb={2}>
                  Password
                </FormLabel>
                <Input
                  {...field}
                  width="300px"
                  type="password"
                  focusBorderColor="black"
                  borderRadius="0"
                />
                <FormErrorMessage>{form.errors.password}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button
            mt="30px"
            borderRadius="0"
            bg="transparent"
            size="sm"
            border="1px solid #000000"
            _hover={{ bg: '#606060', color: 'white' }}
            _active={{
              bg: '#000000',
              transform: 'scale(0.98)',
            }}
            type="submit"
          >
            Register
          </Button>
        </Form>
      </Formik>
    </Center>
  );
};
