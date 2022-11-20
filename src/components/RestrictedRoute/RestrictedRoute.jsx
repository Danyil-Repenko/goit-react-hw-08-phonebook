import { selectToken } from 'components/redux/auth/selecors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const loggedIn = useSelector(selectToken);
  return loggedIn ? <Navigate to={redirectTo} /> : Component;
};
