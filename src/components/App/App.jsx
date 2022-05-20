import { NameField } from '../Form/Form';
import { ContactList } from '../ContactList/ContactList';
import { FilterField } from '../Filter/filter';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';



export function PhoneBook() {

  const listOfContacts = useSelector(state => state.myContacts.contacts);
  const searchFilter = useSelector(state => state.myContacts.filter);
  const normalizedFilter = searchFilter.toLocaleLowerCase();
  const visibleContacts = listOfContacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(normalizedFilter)
  );
  const dispatch = useDispatch();
  
  const formSubmitHandler = data => {
    listOfContacts.find(contact => contact.name === data.name)
      ? alert(`${data.name} is already in contacts`)
      : dispatch(addContact(data));
  };

   return (
      <div>
       <h1>Phonebook</h1>
      
        <NameField onSubmit={formSubmitHandler} />
        <FilterField />
        <ContactList
          listOfContacts={visibleContacts}
        />
      </div>
    );
}
