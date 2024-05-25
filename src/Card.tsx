

export default function Card(
  { name, img, clicked, handleClick }: 
  {name: string, img: string, clicked: boolean, handleClick: (e: unknown) => void }) 
{

  const cardStyles = {
    container: {
      display: "flex",
      boxShadow: "0 0 3px 2px #cec7c759",
      alignItems: "center",
    },
    name: {
      fontSize: "20px",
    },
  };

  return (
    <div style={cardStyles.container} onClick={(e) => {handleClick(e)}}>
      <img src={img} alt={name} />
      <p>{name}</p>
    </div>
  );
}