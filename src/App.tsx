import { useEffect, useState, useMemo, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './Cards.container'

export default function App() {

   const names: Array<string> = useMemo(() => createNames(), []);
   function createNames() {
      return ["luxray", "machop", "squirtle", "pikachu", "magnemite", "magikarp", "geodude", "diglett", "gengar", "mewtwo"];
   }

   const [score, setScore] = useState(0);
   const [bestScore, setBestScore] = useState(0);
   interface Card {
      name: string,
      img: string,
      clicked: boolean
   }
   // const pokemon: Array<Card> = useMemo(() => [], []);
   const [cards, setCards] = useState<Array<unknown>>([]);

   useEffect(() => {
      Promise.all(names.map(name =>
         fetch("https://pokeapi.co/api/v2/pokemon/".concat(name))
            .then(resp => resp.json())
            .then(
               (result) => {
                  return ({ name: result.name, img: result.sprites.front_default, clicked: false });
               },
               (error) => {
                  console.log(error);
               }
            )
      )).then(data => setCards(data));
   }, [names]);
   console.log(cards);

   function shuffle() {

   }

   function handleClick(e: unknown) {

   }

   return (
      <>
         <Cards cards={cards} handleClick={handleClick} />
      </>
   )
}