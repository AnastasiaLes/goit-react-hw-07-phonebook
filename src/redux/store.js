import { configureStore } from '@reduxjs/toolkit';
import { pokemonApi } from 'components/pokemon';
import { myContactsApi } from './contactsSlice';


export const store = configureStore({
  reducer: {
    [myContactsApi.reducerPath]: myContactsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    pokemonApi.middleware,
    myContactsApi.middleware,
   ]
})