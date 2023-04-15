import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onInputChange = event => {
    const input = event.target.value.trim()
    if (input.length !== 0) {
      this.setState({
        count: input.length,
      })
    }
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <div className="word-calc-container">
          <div className="content-container">
            <h1>Calculate the letters you enter</h1>
            <label htmlFor="inputText">Enter the phrase</label>
            <br />
            <input
              id="inputText"
              type="text"
              placeholder="Enter the phrase"
              onChange={this.onInputChange}
            />
            <p className="numCountShow">No.of letters: {count}</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
