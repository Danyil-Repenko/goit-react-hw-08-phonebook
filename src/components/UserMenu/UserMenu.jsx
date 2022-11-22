import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'components/redux/auth/selecors';
import { logingOut } from 'components/redux/auth/operations';
import { Button } from '@chakra-ui/react';
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
      <Button
        borderRadius="0"
        bg="transparent"
        size="sm"
        border="1px solid #000000"
        _hover={{ bg: '#606060', color: 'white' }}
        _active={{
          bg: '#000000',
          transform: 'scale(0.98)',
        }}
        type="button"
        onClick={handleLogout}
      >
        Logout
      </Button>
    </div>
  );
};
