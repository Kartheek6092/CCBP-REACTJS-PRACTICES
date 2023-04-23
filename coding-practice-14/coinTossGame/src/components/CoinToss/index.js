import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {randomSide: 0, count: 0, heads: 0, tails: 0}

  onToss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    this.setState(prevState => ({
      randomSide: tossResult,
      count: prevState.count + 1,
      heads: tossResult === 0 ? prevState.heads + 1 : prevState.heads + 0,
      tails: tossResult !== 0 ? prevState.tails + 1 : prevState.heads + 0,
    }))
  }

  render() {
    const {randomSide, count, heads, tails} = this.state

    return (
      <div className="container">
        <div className="toss-container">
          <h1>Coin Toss Game</h1>
          <p className="sub-head">Heads (or) Tails</p>
          {randomSide === 0 ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="toss result"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="toss result"
            />
          )}

          <button type="button" onClick={this.onToss}>
            Toss Coin
          </button>
          <div className="stat-board">
            <p>Total: {count}</p>
            {'   '}
            <p>Heads: {heads}</p>
            {'    '}
            <p>Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
