import { useDispatch } from 'react-redux';
import { logingIn } from 'components/redux/auth/operations';
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

export const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <Center w="100%" p={4}>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          password: Yup.string()
            .min(6, 'Must be 6 characters or more')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            dispatch(logingIn(values));
            setSubmitting(false);
          }, 400);
        }}
      >
        {props => (
          <Form>
            <Field name="email">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.email && form.touched.email}
                >
                  <FormLabel mb={2}>Email</FormLabel>
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
                    placeholder="surly you know your password"
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
              disabled={!props.isValid}
              isLoading={props.isSubmitting}
              type="submit"
            >
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </Center>
  );
};
