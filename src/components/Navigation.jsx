import React, { useContext } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { PokemonContext } from '../context/PokemonContext';
import { FilterBar } from './FilterBar';

export const Navigation = () => {
  const {
    onInputChange,
    valueSearch,
    onResetForm,
    active,
    loading,
    setActive,
  } = useContext(PokemonContext);

  const navigate = useNavigate();

  const onSearchSubmit = (e) => {
    e.preventDefault();
    navigate('/search', {
      state: valueSearch,
    });
    onResetForm();
  };

  return (
    <>
      {loading ? (
        <></>
      ) : (
        <header className='container'>
          <Link to='/' className='logo'>
            <img
              src='https://www.pngall.com/wp-content/uploads/2016/06/Pokemon-PNG-Pic.png'
              alt='Logo Pokedex'
            />
          </Link>
          <form onSubmit={onSearchSubmit}>
            <div className='form-group'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='icon-search'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                />
              </svg>
              <input
                type='search'
                name='valueSearch'
                id=''
                value={valueSearch}
                onChange={onInputChange}
                placeholder='Buscar Pokémon ...'
              />
            </div>
            <button className='btn-search'>Buscar</button>
          </form>
          <div className='header-filter container'>
            <div className='icon-filter' onClick={() => setActive(!active)}>
              <span>Filtrar</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='icon'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75'
                />
              </svg>
              <FilterBar />
            </div>
          </div>
        </header>
      )}
      ;
      <Outlet />
    </>
  );
};
