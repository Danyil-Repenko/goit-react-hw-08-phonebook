import { registration } from 'components/redux/auth/operations';
import { useDispatch } from 'react-redux';
import { Box, FormLabel, Input } from '@chakra-ui/react';
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
      <form onSubmit={handleSubmit} autoComplete="off">
        <FormLabel>User Name</FormLabel>
        <Input
          width="300px"
          type="text"
          id="username"
          placeholder="Person"
          name="username"
          focusBorderColor="black"
          borderRadius="0"
        />
        <FormLabel>Email</FormLabel>
        <Input
          width="300px"
          type="email"
          id="email"
          placeholder="example@email.com"
          name="email"
          focusBorderColor="black"
          borderRadius="0"
        />
        <FormLabel>Password</FormLabel>
        <Input
          width="300px"
          id="password"
          type="password"
          name="password"
          focusBorderColor="black"
          borderRadius="0"
        />
        <Button type="submit">Register</Button>
      </form>
    </Box>
  );
};
