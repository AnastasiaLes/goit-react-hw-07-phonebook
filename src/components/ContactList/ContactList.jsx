import { ContactItem } from './ContactItem';

export const ContactList = ({ listOfContacts }) => {
  return (
    <div>
      <h2>Contacts</h2>
       <ul>
        {listOfContacts.map(contact => (<ContactItem key={contact.id} {...contact} />))}
            
        {/* <ListElement key={contact.id}>
              {contact.name}: {contact.number}
              <DeleteBtn
                type="button"
                onClick={() => deleteContact(contact.id)}
              > {isDeliting ? 'Deliting...' : 'Delete'}
                
              </DeleteBtn>
            </ListElement> */}
          
        </ul>
    </div>
  );
};
