// Write your code here

import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => {
      console.log(prevState)
      return {count: Math.floor(Math.random() * 100)}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="EvenOddContainer">
          <h1>
            Count <span>{count}</span>
          </h1>
          {count % 2 === 0 && <p className="countType">Count is Even</p>}
          {count % 2 === 1 && <p className="countType">Count is Odd</p>}

          <button type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p>*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
