import { NavLink } from 'react-router-dom';
import { Tabs, TabList, Tab } from '@chakra-ui/react';
import { AuthMenu } from 'components/AuthMenu/AuthMenu';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Navigation = () => {
  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
      <NavLink to="register">Register</NavLink>
      <NavLink to="login">Login</NavLink>
    </nav>
  );
};
