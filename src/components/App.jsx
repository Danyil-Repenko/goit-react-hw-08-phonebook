import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
// import { useDispatch } from 'react-redux';
import { Layout } from './Layout/Layout';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';

const Home = lazy(() => import('pages/Home'));
const Contacts = lazy(() => import('pages/Contacts'));
const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));

export function App() {
  // const dispatch = useDispatch();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="contacts"
          element={
            <PrivateRoute component={<Contacts />} redirectTo="/login" />
          }
        />
        <Route
          path="register"
          element={
            <RestrictedRoute component={<Register />} redirectTo="/contacts" />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute component={<Login />} redirectTo="/contacts" />
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
