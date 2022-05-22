import { ListElement, DeleteBtn } from './ContactList.styled';
import { useDeleteContactMutation } from 'redux/contactsSlice';

export const ContactList = ({ listOfContacts }) => {
  const [deleteContact, { isLoading: isDeliting}] = useDeleteContactMutation()
  return (
    <div>
      <h2>Contacts</h2>
       <ul>
          {listOfContacts.map(contact => (
            <ListElement key={contact.id}>
              {contact.name}: {contact.number}
              <DeleteBtn
                type="button"
                onClick={() => deleteContact(contact.id)}
              > {isDeliting ? 'Deliting...' : 'Delete'}
                
              </DeleteBtn>
            </ListElement>
          ))}
        </ul>
    </div>
  );
};
