import logo from './pokeball.png';
import logo2 from './open_ball.png';
import './App.css';
import { useEffect, useState } from "react";



function App() {
  const [pokemon, setPokemon] = useState({});
  const [currentPokemonId, setCurrentPokemonId] = useState(1);

  const add = () => {
    return pokemon.id + 1;
  }
    
  const decrease = () => {   
    return pokemon.id - 1;
  }

  const abilities = () => {
        return currentPokemonId;
  }


  const fetchPokemon = (id) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  };

  const getRandomInt = (min = 1, max = 500) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  useEffect(()=>{
    console.log({pokemon});
    pokemon?.abilities?.map((ability)=> console.log(ability.ability.name));
    setCurrentPokemonId(pokemon.id);

  }, [pokemon]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="flex-cotainer">
        <a className="alignCentral" href="https://github.com/AdanJaramillo/Pokedex">Github</a>
        <img
        src= {pokemon?.sprites?.back_default ?? logo }
        className="poke-image" 
        alt="logo" />
        <img src={pokemon?.sprites?.front_default ?? logo2}     
        className="poke-image" 
        alt="logo" />
        </div>
        <div className="nom">
        <p>Nombre: {pokemon.name ?? "NO POKEMON SELECTED"}</p>
        <p>Id: {pokemon.id ?? "NO POKEMON SELECTED"}</p>
        </div>
        <div className="flex-cotainer">
          <button className="button" onClick={() => fetchPokemon (decrease())}>Back</button>
          <button className="button" onClick={() => fetchPokemon (getRandomInt())}>Random</button>
          <button className="button" onClick={() => fetchPokemon (add()) }> Next </button>
        </div>
        <div className="flex-cotainer2">
          <button className="button"  onClick={() => fetchPokemon (abilities()) } > Abilities </button>
          </div>
          
          <ul className='text'> 
          {
            pokemon?.abilities?.map((ability) => (
              <li key={ability.ability.id}> {ability.ability.name}  </li>
            ))
          }
          
          </ul>
          
          
        
        

        

      </header>
    </div>
  );
}

export default App;
