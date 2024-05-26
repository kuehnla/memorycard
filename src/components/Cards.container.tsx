import { useEffect } from 'react';
import { Card } from './Card.tsx'

interface CardsProps {
  cards: Array<Card>,
  handleClick: (clicked: boolean, key: number) => void,
}
export const Cards = ({cards, handleClick}: CardsProps) =>
{

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    rowGap: "40px",
    width: "min(60%, 1000px)",
    justifyContent: "space-between",
  };

  return (
    <div style={containerStyle as React.CSSProperties}>
      {cards.map((card, index) => <Card key={index} index={index} name={card.name} img={card.img} clicked={card.clicked} handleClick={handleClick} /> )}
    </div>
  );
}