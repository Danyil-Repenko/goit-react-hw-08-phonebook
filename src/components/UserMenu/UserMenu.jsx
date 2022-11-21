import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'components/redux/auth/selecors';
import { logingOut } from 'components/redux/auth/operations';
import { Button } from 'components/commonComponents.styled';
import { Text } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { email } = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logingOut());
  };

  return (
    <div>
      <Text>{email}</Text>
      <Button type="button" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};
