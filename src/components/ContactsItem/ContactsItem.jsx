import { useDispatch } from 'react-redux';
import { deleteContact } from 'components/redux/contacts/operations';
import PropTypes from 'prop-types';
import { useButton } from 'hooks/useButton';

export const ContactItem = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();
  const removeContact = () => dispatch(deleteContact(id));
  const buttonArgs = {
    handleClick: removeContact,
    label: 'Delete',
    margin: '0 0 0 10px',
    size: 'xs',
  };
  const button = useButton(buttonArgs);

  return (
    <li style={{ margin: '0 0 10px 20px ' }}>
      {name}: {number}
      {button}
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.objectOf(PropTypes.string).isRequired,
};
