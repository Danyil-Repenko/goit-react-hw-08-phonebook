import { useDispatch } from 'react-redux';
import { logingIn } from 'components/redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleLogin = event => {
    event.preventDefault();

    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    dispatch(logingIn({ email, password }));

    event.target.reset();
  };
  return (
    <form onSubmit={handleLogin} autoComplete="off">
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};
