// import { createSlice } from "@reduxjs/toolkit";
// import storage from 'redux-persist/lib/storage';
// import { persistReducer } from 'redux-persist';

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const myContactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://628771bae9494df61b39087f.mockapi.io' }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contact'],
    }),
    
    deleteContact: builder.mutation({
      query: (contactId) => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
    addContact: builder.mutation({
      query: (newContact) => ({
        url: `/contacts`,
        method: 'POST',
        body: newContact
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {useGetContactsQuery, useDeleteContactMutation, useAddContactMutation } = myContactsApi;

// const myContactsSlice = createSlice({
//   name: "myContacts",
//   initialState: {contacts: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: ''},
//   reducers: {
//     addContact(state, action) {
//       state.contacts.push(action.payload)
//     },
//     removeContacts(state, action) {
//       state.contacts = state.contacts.filter(contact => contact.id !== action.payload)
//       },
//     updateFilter(state, action) {state.filter = action.payload}
//   }
// })

// const persistConfig = {
//   key: 'myContacts',
//   storage,
//   whitelist: ['contacts'],
// }

// export const persistedMyContactsReducer = persistReducer(persistConfig, myContactsSlice.reducer);


// export const { addContact, removeContacts, updateFilter } = myContactsSlice.actions;