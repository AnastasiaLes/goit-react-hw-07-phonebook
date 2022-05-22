import { ContactItem } from './ContactItem';

export const ContactList = ({ listOfContacts }) => {
  return (
    <div>
      <h2>Contacts</h2>
       <ul>
        {listOfContacts.map(contact => (<ContactItem key={contact.id} {...contact} />))}
        </ul>
    </div>
  );
};
