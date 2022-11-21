import { StyledLink } from 'components/commonComponents.styled';

export const AuthMenu = () => {
  return (
    <div>
      <StyledLink to="register">Register</StyledLink>
      <StyledLink to="login">Login</StyledLink>
    </div>
  );
};
