import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import { ContactField, FieldName, AddContactButton } from './Form.styled';
import { nanoid } from 'nanoid';
import * as yup from 'yup';
import { useAddContactMutation } from 'redux/contactsSlice';
import { toast } from 'react-toastify';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().required().positive(),
});

const initialValues = {
  name: '',
  number: '',
};

export function NameField({listOfContacts})  {
  const [, { isLoading }] = useAddContactMutation();
  const [addContact] = useAddContactMutation();
  
  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;
    const newContact = {
      name,
      number,
      id: nanoid(),
    };
     toast.success('🦄 Wow so easy!', {
position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
     });
    addContact(newContact);

    listOfContacts.find(contact => contact.name === newContact.name)
      ? alert(`${newContact.name} is already in contacts`)
      : addContact(newContact);
    
    resetForm();
    
   
  };

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  return (
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <FieldName htmlFor={nameInputId}>Name</FieldName>
          <ContactField type="text" name="name" id={nameInputId} />
          <ErrorMessage name="name" component="div" />

          <FieldName htmlFor={numberInputId}>Number</FieldName>
          <ContactField type="tel" name="number" id={numberInputId} />
          <ErrorMessage name="number" component="div" />

        <AddContactButton type="submit" disabled={isLoading}> {
          isLoading
            ? '...'
            : 'Add contact'}
        </AddContactButton>
        </Form>
      </Formik>
    );
}
  
