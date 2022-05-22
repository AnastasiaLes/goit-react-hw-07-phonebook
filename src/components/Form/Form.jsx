import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import { ContactField, FieldName, AddContactButton } from './Form.styled';
import { nanoid } from 'nanoid';
import * as yup from 'yup';
import { useAddContactMutation } from 'redux/contactsSlice';


const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().required().positive(),
});

const initialValues = {
  name: '',
  number: '',
};

export function NameField({onSubmit})  {
  const [ , {isLoading}] = useAddContactMutation();

  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;
    const newContact = {
      name,
      number,
      id: nanoid(),
    };
    resetForm();
    onSubmit(newContact);
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

          <AddContactButton type="submit" disabled={isLoading}> {isLoading ? '...' : 'Add contact'}  </AddContactButton>
        </Form>
      </Formik>
    );
}
  
