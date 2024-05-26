import { useEffect, useState, useMemo, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Cards } from './components/Cards.container'
import { Header } from './components/Header'

export default function App() {
   const containerStyle = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
   };

   const names: Array<string> = useMemo(() => createNames(), []);
   function createNames() {
      return ["luxray", "machop", "squirtle", "pikachu", "magnemite", "magikarp", "geodude", "diglett", "gengar", "mewtwo", "charizard", "lugia"];
   }

   const [score, setScore] = useState(0);
   const [bestScore, setBestScore] = useState(0);
   interface Card {
      name: string,
      img: string,
      clicked: boolean
   }
   const [cards, setCards] = useState<Array<Card>>([]);

   useEffect(() => {
      Promise.all(names.map(name =>
         fetch("https://pokeapi.co/api/v2/pokemon/".concat(name))
            .then(resp => resp.json())
            .then(
               (result) => {
                  return ({ name: result.name[0].toUpperCase().concat(name.substring(1)), img: result.sprites.front_default, clicked: false });
               },
               (error) => {
                  console.log(error);
               }
            )
      )).then(data => setCards(data));
   }, [names]);

   function shuffle(nextCards: Array<Card>) {
      const result = nextCards;
      for (let i = cards.length - 1; i >= 0; --i) {
         const j = Math.floor(Math.random() * (11 + 1));
         const temp = result[j];
         result[j] = result[i];
         result[i] = temp;
      }
      return result;
   }

   function handleClick(clicked: boolean, index: number) {
      let nextCards: Array<Card>;
      if (clicked) {
         setScore(0);
         nextCards = cards.map((card) =>
            ({ name: card.name, img: card.img, clicked: false })
         );
      } else {
         if (score % 12 == 0) {
            nextCards = cards.map((card) =>
               ({ name: card.name, img: card.img, clicked: false }))
         } else {
            nextCards = cards.map((card, i) =>
               i === index ? ({ name: card.name, img: card.img, clicked: true }) : card
            );
         }
         setScore(score + 1);
         score + 1 > bestScore ? setBestScore(score + 1) : null
      }
      nextCards = shuffle(nextCards);
      setCards(nextCards);

   }

   return (
      <div style={containerStyle as React.CSSProperties}>
         <Header score={score} bestScore={bestScore} />
         <Cards cards={cards} handleClick={handleClick} />
      </div>
   )
}