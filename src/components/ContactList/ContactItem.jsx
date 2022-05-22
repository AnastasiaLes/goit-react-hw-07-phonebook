import { ListElement, DeleteBtn } from './ContactList.styled';
import { useDeleteContactMutation } from 'redux/contactsSlice';

export const ContactItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading: isDeliting}] = useDeleteContactMutation()
  return (
            <ListElement>
              {name}: {number}
              <DeleteBtn
                type="button" disabled={isDeliting}
                onClick={() => deleteContact(id)}
              > {isDeliting ? 'Deliting...' : 'Delete'}
                
              </DeleteBtn>
            </ListElement>  
  );
};
