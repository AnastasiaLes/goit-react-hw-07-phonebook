import { NameField } from '../Form/Form';
import { ContactList } from '../ContactList/ContactList';
import { FilterField } from '../Filter/filter';
import { useGetContactsQuery } from 'redux/contactsSlice';
import { useState } from 'react';

export function PhoneBook() {
  const [search, setSearch] = useState('');
  const { data, isFetching } = useGetContactsQuery();
  
  const normalizedFilter = search.toLocaleLowerCase();
  const visibleContacts = data?.filter(contact =>
    contact.name.toLocaleLowerCase().includes(normalizedFilter)
  );
  
  const addFilter = (event) => {
    setSearch(event.currentTarget.value)
  }
  console.log(data);

   return (
      <div>
       <h1>Phonebook</h1>
       <NameField
         listOfContacts={data}
       />
       <FilterField
         addFilter={addFilter}
       />
       {isFetching && <h2>Loading...</h2>}
       {data && <ContactList
          listOfContacts={visibleContacts.reverse()}
        />}
      </div>
    );
}
