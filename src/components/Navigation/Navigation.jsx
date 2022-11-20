import { NavLink } from 'react-router-dom';
// import { Tabs, TabList, Tab } from '@chakra-ui/react';
import { AuthMenu } from 'components/AuthMenu/AuthMenu';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectToken } from 'components/redux/auth/selecors';

export const Navigation = () => {
  const loggedIn = useSelector(selectToken);

  return (
    <nav>
      <div>
        <NavLink to="/" end>
          Home
        </NavLink>
        {loggedIn && <NavLink to="/contacts">Contacts</NavLink>}
      </div>
      <div>{loggedIn ? <UserMenu /> : <AuthMenu />}</div>
    </nav>
  );
};
