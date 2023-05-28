import React, { useContext } from 'react';
import { PokemonList } from '../components';
import { PokemonContext } from '../context/PokemonContext';

export const HomePage = () => {
  const { onClickLoadMore } = useContext(PokemonContext);

  return (
    <>
      {/*Calling Pokemon list*/}
      <PokemonList />
      {/*Button for more Pokemons*/}
      <div className='container-btn-load-more container'>
        <button className='btn-load-more' onClick={onClickLoadMore}>
          Mais Pokemons
        </button>
      </div>
    </>
  );
};
