import { useSelector } from 'react-redux';
import { selectUser } from 'components/redux/auth/selecors';

export const UserMenu = () => {
  const { email } = useSelector(selectUser);

  return (
    <div>
      <p>{email}</p>
      <button>Logout</button>
    </div>
  );
};
