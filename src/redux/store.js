import { configureStore } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist'

// import { persistedMyContactsReducer } from './contactsSlice';
import { pokemonApi } from 'components/pokemon';
import { myContactsApi } from './contactsSlice';


export const store = configureStore({
  reducer: {
    // myContacts: persistedMyContactsReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [myContactsApi.reducerPath]: myContactsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    pokemonApi.middleware,
    myContactsApi.middleware,
   ]
        // getDefaultMiddleware().concat(pokemonApi.middleware),
  // middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware(getDefaultMiddleware().concat(pokemonApi.middleware),
  //     {serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
})

// export const persistor = persistStore(store);