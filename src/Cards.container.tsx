import Card from './Card.tsx'

export default function Cards(
  { cards, handleClick }:
  { cards: Array<Card>; handleClick: (e: unknown) => void })
{

  //handleClick={handleClick} 
  console.log(cards);

  return (
    <div className="cards">
      {cards.map(card => {
        return <Card name={card.name} img={card.img} clicked={card.clicked} handleClick={handleClick} />
      })}
      random text after cards processing
    </div>
  );
}