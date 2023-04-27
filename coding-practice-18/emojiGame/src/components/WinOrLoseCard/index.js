import './index.css'

const WinOrLoseCard = props => {
  const {score, isWin, onRestartGame} = props

  const onRestart = () => {
    onRestartGame()
  }

  return isWin ? (
    <div className="win-container">
      <div className="game-result-container">
        <h1>You Won</h1>
        <p className="res-text">Best Score</p>
        <p className="score">{score}/12</p>
        <button type="button" className="playAgain-btn" onClick={onRestart}>
          Play Again
        </button>
      </div>
      <img
        className="result-img"
        src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
        alt="win or lose"
      />
    </div>
  ) : (
    <div className="lose-container">
      <div className="game-result-container">
        <h1>You Lose</h1>
        <p className="res-text">Score</p>
        <p className="score">{score}/12</p>
        <button type="button" className="playAgain-btn" onClick={onRestart}>
          Play Again
        </button>
      </div>
      <img
        className="result-img"
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        alt="win or lose"
      />
    </div>
  )
}

export default WinOrLoseCard
