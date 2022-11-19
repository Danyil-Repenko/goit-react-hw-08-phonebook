import { Routes, Route } from 'react-router-dom';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { useEffect } from 'react';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { useDispatch, useSelector } from 'react-redux';
import { Filter } from './Filter/Filter';
import { Wrapper, CenteredDiv, LoadingMessage } from './App.styled';
import { selectLoadingState, selectError } from 'components/redux/selectors';
import { fetchAll } from 'components/redux/operations';

export function App() {
  const loadingState = useSelector(selectLoadingState);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  return (
    <div>
      <Wrapper>
        <CenteredDiv>
          <h1>PHONEBOOK</h1>
          <ContactForm />
        </CenteredDiv>
        <CenteredDiv>
          <h2>Contacts</h2>
          <Filter />
        </CenteredDiv>
        {loadingState && !error && <LoadingMessage>Loading...</LoadingMessage>}
        <ContactList />
      </Wrapper>

      <Routes>
        <Route path="*">
          <Route index element={<SharedLayout />} />
        </Route>
        <Route path="/contacts" />
        <Route path="/register" />
        <Route path="/login" />
      </Routes>
    </div>
  );
}
