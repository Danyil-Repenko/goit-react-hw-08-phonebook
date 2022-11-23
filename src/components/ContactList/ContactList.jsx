import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'components/redux/contacts/selectors';
import { ContactItem } from 'components/ContactsItem/ContactsItem';
import { SimpleGrid } from '@chakra-ui/react';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <SimpleGrid minChildWidth="400px" spacingX="20px" spacingY="10px">
      {visibleContacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </SimpleGrid>
  );
};
