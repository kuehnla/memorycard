import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'
import { PokemonClient } from 'pokenode-ts';

export default function App() {
  const names: Array<string> = ["luxray", "machop", "squirtle", "pikachu", "magnemite", "magikarp", "geodude", "diglett", "gengar", "mewtwo"];
  const pokemon: Array<Pokemon> = [];

  (async () => {
    const api = new PokemonClient();

    try {
      for (let i = 0; i < names.length; ++i) {
        pokemon[i] = await api.getPokemonByName(names[i]);
        console.log(pokemon[i].name);
        console.log(pokemon[i].sprites.front_default);
      }
    } catch (error) {
      console.error(error);
    }
  })();

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cards, setCards] = useState([]);

  function handleClick(e) {
    
  }

  return (
    <>
    </>
  )
}