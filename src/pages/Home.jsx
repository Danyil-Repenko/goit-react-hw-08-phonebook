import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      Welcome, homepage user!
    </div>
  );
}
