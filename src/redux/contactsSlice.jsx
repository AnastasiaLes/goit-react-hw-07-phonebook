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