import { useDispatch } from 'react-redux';
import { deleteContact } from 'components/redux/contacts/operations';
import PropTypes from 'prop-types';
import { Button } from '@chakra-ui/react';

export const ContactItem = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();
  const removeContact = () => dispatch(deleteContact(id));

  return (
    <li style={{ margin: '0 0 10px 20px ' }}>
      {name}: {number}
      <Button
        ml={2}
        borderRadius="0"
        bg="transparent"
        size="xs"
        border="1px solid #000000"
        _hover={{ bg: '#606060', color: 'white' }}
        _active={{
          bg: '#000000',
          transform: 'scale(0.98)',
        }}
        type="button"
        onClick={removeContact}
      >
        Delete
      </Button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.objectOf(PropTypes.string).isRequired,
};
