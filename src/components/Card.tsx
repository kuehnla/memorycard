import '../App.css'

interface CardProps {
  name: string,
  img: string,
  clicked: boolean,
  index: number,
  handleClick: (clicked: boolean, key: number) => void,
}

export const Card = ({ name, img, clicked, index, handleClick }: CardProps) =>
{
  return (
    <div className="card" onClick={() => {handleClick(clicked, index)}}>
      <img className="img" src={img} alt={name} />
      <p className="name">{name}</p>
    </div>
  );
}