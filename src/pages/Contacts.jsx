import { Helmet } from 'react-helmet-async';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { CreateContactForm } from 'components/CreateContactForm/CreateContactForm';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Box } from '@chakra-ui/react';
import { fetchAll } from 'components/redux/contacts/operations';

export default function Contacts() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  return (
    <Box w="100%" p={4}>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <CreateContactForm />
      <Filter />
      <ContactList />
    </Box>
  );
}
