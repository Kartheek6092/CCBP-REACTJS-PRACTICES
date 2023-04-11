// Write your code here

import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {count1: 0, count2: 0}

  onMangoCount = () => {
    this.setState(prevState => {
      console.log(`Previoust count is ${prevState}`)
      return {count1: prevState.count1 + 1}
    })
  }

  onBananaCount = () => {
    this.setState(prevState => {
      console.log(`Previoust count is ${prevState}`)
      return {count2: prevState.count2 + 1}
    })
  }

  render() {
    const {count1, count2} = this.state
    return (
      <div className="container">
        <div className="fruitContainer">
          <h1>
            Bob ate <span>{count1}</span> mangoes <span>{count2}</span> bananas
          </h1>
          <div className="fruits">
            <div className="mangos">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button type="button" onClick={this.onMangoCount}>
                Eat Mango
              </button>
            </div>
            <div className="bananas">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button type="button" onClick={this.onBananaCount}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
