import { ListElement, DeleteBtn } from './ContactList.styled';
import { useDispatch } from 'react-redux';
import { removeContacts } from 'redux/contactsSlice';

export const ContactList = ({listOfContacts}) => {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Contacts</h2>
      {listOfContacts.length > 0 && (
        <ul>
          {listOfContacts.map(contact => (
            <ListElement key={contact.id}>
              {contact.name}: {contact.number}
              <DeleteBtn
                type="button"
                onClick={() => dispatch(removeContacts(contact.id))}
              >
                Delete
              </DeleteBtn>
            </ListElement>
          ))}
        </ul>
      )}
    </div>
  );
};
