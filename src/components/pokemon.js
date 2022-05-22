import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
  }),
})

const {useGetPokemonByNameQuery} = pokemonApi;


export const Pokemon = () => {
    const { data, isFetching } = useGetPokemonByNameQuery('bulbasaur');
    // console.log(data);
    return (
    <div>
            {data && <h2>Pokemon {data.name}</h2>}
            {isFetching && <h2>Loading...</h2>}
    </div>)
   
    
}