import React from 'react';
import { Link } from 'react-router-dom';
import { upperInit } from '../helper/helper';

export const CardPokemon = ({ pokemon }) => {
  return (
    <Link to={`/pokemon/${pokemon.id}`} className='card-pokemon'>
      <div className='card-img'>
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt={`Pokemon ${pokemon.name}`}
        />
      </div>
      <div className='card-info'>
        <span className='pokemon-id'>N° {pokemon.id}</span>
        <h3>{upperInit(pokemon.name)}</h3>
        <div className='card-types'>
          {pokemon.types.map((type) => (
            <span key={type.type.name} className={type.type.name}>
              {upperInit(type.type.name)}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};
