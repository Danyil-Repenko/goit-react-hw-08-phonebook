import {
  selectIsRefreshing,
  selectToken,
} from 'components/redux/auth/selecors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const loggedIn = useSelector(selectToken);
  const isRefreshing = useSelector(selectIsRefreshing);
  const shouldRedirect = !loggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

PrivateRoute.propTypes = {
  component: PropTypes.element.isRequired,
  redirectTo: PropTypes.string,
};
