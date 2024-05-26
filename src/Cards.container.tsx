import { useEffect } from 'react';
import Card from './Card.tsx'

export default function Cards(
  { cards, handleClick }:
  { cards: Array<Card>; handleClick: (e: unknown) => void })
{

  const containerStyle = {
    display: "flex",

  };

  return (
    <div style={containerStyle}>
      {cards.map(card => {
        return <Card name={card.name} img={card.img} clicked={card.clicked} handleClick={handleClick} />
      })}
    </div>
  );
}