import './index.css'

const NavBar = props => {
  const {isWin, isDoubleClicked, score, topScore} = props

  return (
    <>
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
      </div>
      {!isWin && !isDoubleClicked ? (
        <div className="score-container">
          <p>Score: {score}</p>
          <p>Top Score: {topScore} </p>
        </div>
      ) : null}
    </>
  )
}

export default NavBar
