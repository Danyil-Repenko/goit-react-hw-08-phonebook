import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'components/redux/auth/selecors';
import { logingOut } from 'components/redux/auth/operations';
import { Button } from 'components/commonComponents.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { email } = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logingOut());
  };

  return (
    <div>
      <b>{email}</b>
      <Button type="button" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};
