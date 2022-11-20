import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'components/redux/auth/selecors';
import { logingOut } from 'components/redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { email } = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logingOut());
  };

  return (
    <div>
      <p>{email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
