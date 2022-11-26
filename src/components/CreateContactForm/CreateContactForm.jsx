import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'components/redux/contacts/selectors';
import { addContact } from 'components/redux/contacts/operations';
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

export const CreateContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const duplicateNameCheck = (array, nameToCheck) => {
    const nameSameness = array.find(contact => contact.name === nameToCheck);

    return !nameSameness;
  };

  const namePatern =
    "[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
  const phonePatern =
    '^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$';

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={Yup.object({
        name: Yup.string()
          .required('Required')
          .matches(namePatern, 'Wrong name patern')
          .test('Unique', 'Name needs te be unique', value => {
            return duplicateNameCheck(contacts, value);
          }),
        number: Yup.string()
          .matches(phonePatern, 'Wrong phone patern')
          .required('Required'),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          dispatch(addContact(values));
          setSubmitting(false);
          resetForm();
        }, 400);
      }}
    >
      {props => (
        <Box
          mb={8}
          border="3px solid"
          w="50%"
          p={5}
          boxShadow="8px 8px 3px 2px #767676"
        >
          <Form>
            <Flex
              justify={[null, null, null, 'space-between']}
              wrap={['wrap', 'wrap', 'wrap', 'no-wrap']}
            >
              <Field name="name">
                {({ field, form }) => (
                  <FormControl
                    width="auto"
                    isInvalid={form.errors.name && form.touched.name}
                  >
                    <FormLabel mb={2}>Name</FormLabel>
                    <Input
                      {...field}
                      width="300px"
                      type="text"
                      focusBorderColor="black"
                      borderRadius="0"
                      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="number">
                {({ field, form }) => (
                  <FormControl
                    width="auto"
                    isInvalid={form.errors.number && form.touched.number}
                  >
                    <FormLabel mb={2}>Number</FormLabel>
                    <Input
                      {...field}
                      width="300px"
                      type="tel"
                      focusBorderColor="black"
                      borderRadius="0"
                      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    />
                    <FormErrorMessage>{form.errors.number}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </Flex>
            <Button
              mt="30px"
              borderRadius="0"
              bg="transparent"
              size="sm"
              border="1px solid #000000"
              _hover={{ bg: '#606060', color: 'white' }}
              _active={{
                bg: '#000000',
                transform: 'scale(0.98)',
              }}
              disabled={!props.isValid}
              isLoading={props.isSubmitting}
              type="submit"
            >
              Add Contact
            </Button>
          </Form>
        </Box>
      )}
    </Formik>
  );
};
