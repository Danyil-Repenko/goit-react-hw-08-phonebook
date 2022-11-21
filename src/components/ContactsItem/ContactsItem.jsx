import { useDispatch } from 'react-redux';
import { DeleteBtn } from './ContactsItem.styled';
import { deleteContact } from 'components/redux/contacts/operations';
import PropTypes from 'prop-types';

export const ContactItem = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();
  const removeContact = () => dispatch(deleteContact(id));

  return (
    <li style={{ margin: '0 0 10px 20px ' }}>
      {name}: {number}
      <DeleteBtn type="button" onClick={removeContact}>
        Delete
      </DeleteBtn>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.objectOf(PropTypes.string).isRequired,
};