// Write your code here

import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onGenerate = () => {
    this.setState({
      count: Math.floor(Math.random() * 100),
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="randNumContainer">
          <h1>Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button
            type="button"
            className="generateRandNum"
            onClick={this.onGenerate}
          >
            Generate
          </button>
          <p className="count">{count}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
