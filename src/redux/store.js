import { configureStore } from '@reduxjs/toolkit';
import { myContactsApi } from './contactsSlice';


export const store = configureStore({
  reducer: {
    [myContactsApi.reducerPath]: myContactsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    myContactsApi.middleware,
   ]
})