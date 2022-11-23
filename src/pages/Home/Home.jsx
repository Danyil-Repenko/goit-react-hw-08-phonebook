import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { selectToken, selectUser } from 'components/redux/auth/selecors';
import { WelcomingText } from './Home.styled';
import { Center } from '@chakra-ui/react';

export default function Home() {
  const loggedIn = useSelector(selectToken);
  const { name } = useSelector(selectUser);

  return (
    <Center w="100%" h="calc(100vh - 200px)" m="auto 0">
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
          /Welcome to Phonebook. We provide, <i>surprise-surprise</i>, a
          phonebook for you to neatly keep all your contacts. If you're new to
          the service, then register. Already, familiar with us? Then login and
          proceed!/
        </WelcomingText>
      )}
    </Center>
  );
}
