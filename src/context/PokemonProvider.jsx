import { useEffect, useState } from 'react';
import { PokemonContext } from './PokemonContext';
import { useForm } from '../hook/useForm';

export const PokemonProvider = ({ children }) => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [globalPokemons, setGlobalPokemons] = useState([]);
  const [offset, setOffset] = useState(0);

  // --------------- Aplicação do Hook Customizado ---------------------------
  const { valueSearch, onInputChange, onResetForm } = useForm({
    valueSearch: '',
  });

  // --------------- Estados para aplicação simples ---------------------------
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(false);

  // --------------- Chamar 55 dos pokémons da API ---------------------------

  const getAllPokemons = async (limit = 55) => {
    const baseURL = 'https://pokeapi.co/api/v2/';

    const res = await fetch(
      `${baseURL}pokemon?limit=${limit}&offset=${offset}`
    );
    const data = await res.json();
    const promises = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return data;
    });
    const results = await Promise.all(promises);
    setAllPokemons([...allPokemons, ...results]);
    setLoading(false);
  };

  // -------------------- Chamar TODOS os pokémons da API ---------------------

  const getGlobalPokemons = async () => {
    const baseURL = ' https://pokeapi.co/api/v2/';

    const res = await fetch(`${baseURL}pokemon?limit=100000&offset=0`);
    const data = await res.json();
    const promises = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return data;
    });
    const results = await Promise.all(promises);
    setGlobalPokemons(results);
    setLoading(false);
  };

  //-------------------- Chamar Pokemon por ID -------------------------------

  const getPokemonByID = async (id) => {
    const baseURL = 'https://pokeapi.co/api/v2/';
    const res = await fetch(`${baseURL}pokemon/${id}`);
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  useEffect(() => {
    getGlobalPokemons();
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        valueSearch,
        onInputChange,
        onResetForm,
        allPokemons,
        globalPokemons,
        getPokemonByID,
      }}>
      {children}
    </PokemonContext.Provider>
  );
};
