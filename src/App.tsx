import React, { useState } from 'react';
import TopPokemons from './components/TopPokemons';
import Pokemon from './Pokemon';

function App() {
  const pokemon = new Pokemon();
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState('pidgeotto');

  const handleGetPokemon = async () => {
    setPokemons(await pokemon.getPokemon());
  }
  const handleFindPokemon = async () => {
    const pokemonFinded: any = pokemons.filter((v: any) => v.name === search); 
    const { name, url } = pokemonFinded[0];   
    alert(pokemonFinded ? `Pokemon Finded: \n Name: ${name}, url: ${url}` : "Pokemon not found")
  }
  
  return (
    <div>
      <TopPokemons capture={pokemon.savePokemon} />
      {pokemons.length > 0 ? <><input value={search} onChange={(e) => setSearch(e.target.value)} /> <button onClick={() => handleFindPokemon()}>Find one pokemon</button></> : null }
      {pokemons.length > 0 ? pokemons.map((v: any) => <ul><li>{v.name}</li></ul>) : <button onClick={() => handleGetPokemon()}>GET ALL POKEMONS</button>}      
    </div>
  );
}

export default App;
