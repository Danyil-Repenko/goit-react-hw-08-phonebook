import {
  selectIsRefreshing,
  selectToken,
} from 'components/redux/auth/selecors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const loggedIn = useSelector(selectToken);
  const isRefreshing = useSelector(selectIsRefreshing);
  const shouldRedirect = !loggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
