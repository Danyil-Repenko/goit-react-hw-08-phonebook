import { AuthMenu } from 'components/AuthMenu/AuthMenu';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectToken } from 'components/redux/auth/selecors';
import { Nav, StyledLink } from './Navigation.styled';

export const Navigation = () => {
  const loggedIn = useSelector(selectToken);

  return (
    <Nav>
      <div>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        {loggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
      </div>
      <div>{loggedIn ? <UserMenu /> : <AuthMenu />}</div>
    </Nav>
  );
};
