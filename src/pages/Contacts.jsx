import { Helmet } from 'react-helmet';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { CreateContactForm } from 'components/CreateContactForm/CreateContactForm';

export default function Contacts() {
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
