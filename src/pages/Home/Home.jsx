import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { selectToken, selectUser } from 'components/redux/auth/selecors';
import { WelcomingText } from './Home.styled';
import { Center } from '@chakra-ui/react';

export default function Home() {
  const loggedIn = useSelector(selectToken);
  const { name } = useSelector(selectUser);

  return (
    <Center
      w="100%"
      pos="absolute"
      top="64px"
      bottom="0"
      m="auto 0"
      bgGradient="linear(to-r, rgba(190,81,26,1) 2%, rgba(28,93,186,1) 52%, rgba(172,180,37,1) 98%)"
    >
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
          the service, then <b>register</b>. Already, familiar with us? Then
          <b> login</b> and proceed!/
        </WelcomingText>
      )}
    </Center>
  );
}
