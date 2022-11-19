import { registration } from 'components/redux/auth/operations';
import { useDispatch } from 'react-redux';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const userName = event.target.elements.username.value;
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    dispatch(registration({ name: userName, email, password }));

    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Username
        <input type="text" name="username" />
      </label>
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
