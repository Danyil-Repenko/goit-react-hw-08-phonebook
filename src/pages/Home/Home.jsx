import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { selectToken, selectUser } from 'components/redux/auth/selecors';
import { WelcomingText, Container } from './Home.styled';

export default function Home() {
  const loggedIn = useSelector(selectToken);
  const { name } = useSelector(selectUser);

  return (
    <Container>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      {loggedIn ? (
        <WelcomingText>
          /Greetings from the Phonebook, {name}! Go and work with contacts of
          yours!/
        </WelcomingText>
      ) : (
        <WelcomingText>
          /Welcome to Phonebook. We provide, surprise-surprise, a phonebook for
          you to neatly keep all your contacts. If you're new to the service,
          then register. Already, familiar with us? Then login and proceed!/
        </WelcomingText>
      )}
    </Container>
  );
}
