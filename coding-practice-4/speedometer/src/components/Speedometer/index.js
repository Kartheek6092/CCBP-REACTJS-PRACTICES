import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onAccelerate = () => {
    this.setState(prevState => {
      let acc = {}
      if (prevState.count < 200) {
        acc = {count: prevState.count + 10}
      }
      return acc
    })
  }

  onApplyBreaks = () => {
    this.setState(prevState => {
      let acc = {}
      if (prevState.count > 0) {
        acc = {count: prevState.count - 10}
        console.log(prevState)
      }
      return acc
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="counterContainer">
          <h1>SPEEDOMETER</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
          />
          <h1 className="speedStatus1">Speed is 0mph</h1>
          <h1 className="speedStatus">
            Speed is <span>{count}</span>mph
          </h1>
          <p>Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="buttons">
            <button
              className="acceleratebtn"
              type="button"
              onClick={this.onAccelerate}
            >
              Accelerate
            </button>
            <button
              className="breakbtn"
              type="button"
              onClick={this.onApplyBreaks}
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
