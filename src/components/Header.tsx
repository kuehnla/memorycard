interface HeaderProps {
  score: number,
  bestScore: number,
}

export const Header = ({score, bestScore}: HeaderProps) => {
  const headerStyles = {
    container: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      paddingBottom: "32px",
    },
    instructions: {
      gridColumn: "1 / 2",
      display: "flex",
      flexDirection: "column",
      color: "#468998",
    },
    scores: {
      gridColumn: "2 / 3",
      display: "flex",
      color: "#468998",
      justifyContent: "flex-end",
      gap: "24px",
    },
    h1: {
      margin: "0",
    },
    p: {
      fontSize: "24px",
    }
  };
  return (
    <div style={headerStyles.container} className="header-container">
      <div style={headerStyles.instructions as React.CSSProperties} className="instructions">
        <h1 style={headerStyles.h1}>Memory matching game</h1>
        <p style={headerStyles.p}>Instructions: Click a card to gain a point. Click the same card and your score will reset!</p>
      </div>
      <div style={headerStyles.scores} className="scores">
        <p style={headerStyles.p}>Score: {score}</p>
        <p style={headerStyles.p}>Best Score: {bestScore}</p>
      </div>
    </div>
  )
}