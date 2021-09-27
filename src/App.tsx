import React, { useState } from 'react';
import TopPokemons from './components/TopPokemons';
import Pokemon from './Pokemon';

function App() {
  const INITIAL_POKEMON_FINDED = { name: "" };
  const pokemon = new Pokemon();
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState('pidgeotto');
  const [pokemonFinded, setPokemonFinded] = useState({ name: "" });

  const handleGetPokemon = async () => {
    setPokemons(await pokemon.getPokemon());
  }

  const handleFindPokemon = async () => {
    const pokemonFinded: any = pokemons.filter((v: any) => v.name === search); 
    if(pokemonFinded[0] && pokemonFinded[0].name){
      const { name, url } = pokemonFinded[0];   
      alert(pokemonFinded ? `Pokemon Finded: \n Name: ${name}, url: ${url}` : "Pokemon not found")
      setPokemonFinded(pokemonFinded[0]);
    } else {
      setPokemonFinded(INITIAL_POKEMON_FINDED);
    }
  }
  
  return (
    <div>
      {pokemonFinded.name !== "" ? <div style={{ position: 'absolute'}} ><img src="https://t2.tudocdn.net/568114?w=646&h=284" /><span style={{ fontSize: 24, fontWeight: 'bold',  transform: 'rotate(-90deg)', position: 'absolute', right: 20, top: '45%' }}>{pokemonFinded.name}</span></div> : null }
      <TopPokemons capture={pokemon.savePokemon} />
      {pokemons.length > 0 ? <><input value={search} onChange={(e) => setSearch(e.target.value)} /> <button onClick={() => handleFindPokemon()}>Find one pokemon</button></> : null }
      {pokemons.length > 0 ? pokemons.map((v: any) => <ul><li>{v.name}</li></ul>) : <button onClick={() => handleGetPokemon()}>GET ALL POKEMONS</button>}      
    </div>
  );
}

export default App;
