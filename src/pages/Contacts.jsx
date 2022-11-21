import { Helmet } from 'react-helmet-async';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { CreateContactForm } from 'components/CreateContactForm/CreateContactForm';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAll } from 'components/redux/contacts/operations';

export default function Contacts() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  return (
    <div>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <CreateContactForm />
      <Filter />
      <ContactList />
    </div>
  );
}
