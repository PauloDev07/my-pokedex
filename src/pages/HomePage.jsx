import React, { useContext } from 'react';
import { PokemonList } from '../components';
import { PokemonContext } from '../context/PokemonContext';
import { Loader } from '../components';

export const HomePage = () => {
  const { loading, onClickLoadMore } = useContext(PokemonContext);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <PokemonList />
          {/*Button for more Pokemons*/}
          <div className='container-btn-load-more container'>
            <button className='btn-load-more' onClick={onClickLoadMore}>
              Mais Pokemons
            </button>
          </div>
        </>
      )}
    </>
  );
};
