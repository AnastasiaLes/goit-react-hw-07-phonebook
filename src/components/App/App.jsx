import { NameField } from '../Form/Form';
import { ContactList } from '../ContactList/ContactList';
import { FilterField } from '../Filter/filter';
import { useGetContactsQuery } from 'redux/contactsSlice';
import { useState } from 'react';
// import {toast} from 'react-hot-toast';

export function PhoneBook() {
  const [search, setSearch] = useState('');
  const { data, isFetching } = useGetContactsQuery();
  // const [addContact] = useAddContactMutation();
  
  const normalizedFilter = search.toLocaleLowerCase();
  const visibleContacts = data?.filter(contact =>
    contact.name.toLocaleLowerCase().includes(normalizedFilter)
  );
  
  const addFilter = (event) => {
    setSearch(event.currentTarget.value)
  }

  // const formSubmitHandler = newContact => {
  //   data.find(contact => contact.name === newContact.name)
  //     ? alert(`${newContact.name} is already in contacts`)
  //     : addContact(newContact);
    
  // };

   return (
      <div>
       <h1>Phonebook</h1>
        {/* <Pokemon /> */}
       <NameField
         listOfContacts={data}
       />
       <FilterField
         addFilter={addFilter}
       />
       {isFetching && <h2>Loading...</h2>}
       {data && <ContactList
          listOfContacts={visibleContacts}
        />}
      </div>
    );
}
