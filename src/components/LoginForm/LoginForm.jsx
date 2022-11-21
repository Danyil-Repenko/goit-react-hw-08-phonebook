import { useDispatch } from 'react-redux';
import { logingIn } from 'components/redux/auth/operations';
import { Box, FormLabel, Input } from '@chakra-ui/react';
import { Button } from 'components/commonComponents.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleLogin = event => {
    event.preventDefault();

    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    dispatch(logingIn({ email, password }));

    event.target.reset();
  };
  return (
    <Box w="100%" p={4}>
      <form onSubmit={handleLogin} autoComplete="off">
        <FormLabel>Email</FormLabel>
        <Input
          width="300px"
          type="email"
          id="email"
          placeholder="example@email.com"
          focusBorderColor="black"
          borderRadius="0"
        />
        <FormLabel>Password</FormLabel>
        <Input
          width="300px"
          id="password"
          type="password"
          placeholder="surly you know your password"
          focusBorderColor="black"
          borderRadius="0"
        />
        <Button type="submit">Log In</Button>
      </form>
    </Box>
  );
};
