import { NavLink } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <header>
      <nav>
        <div>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/contacts">Contacts</NavLink>
        </div>
        <div>
          <NavLink to="register">Register</NavLink>
          <NavLink to="login">Login</NavLink>
        </div>
      </nav>
    </header>
  );
};
