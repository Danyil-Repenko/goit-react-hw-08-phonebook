import { Helmet } from 'react-helmet-async';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { CreateContactForm } from 'components/CreateContactForm/CreateContactForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@chakra-ui/react';
import { fetchAll } from 'components/redux/contacts/operations';
import { selectLoadingState } from 'components/redux/contacts/selectors';
import { Loader } from 'components/loader';

export default function Contacts() {
  const showloader = useSelector(selectLoadingState);
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
      {showloader ? <Loader /> : <ContactList />}
    </Box>
  );
}
