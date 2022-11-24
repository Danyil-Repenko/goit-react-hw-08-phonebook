import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'components/redux/auth/selecors';
import { logingOut } from 'components/redux/auth/operations';
import { useButton } from 'hooks/useButton';
import { Text } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { email } = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logingOut());
  };

  const buttonArgs = {
    handleClick: handleLogout,
    label: 'Logout',
  };
  const button = useButton(buttonArgs);

  return (
    <div>
      <Text>{email}</Text>
      {button}
    </div>
  );
};
