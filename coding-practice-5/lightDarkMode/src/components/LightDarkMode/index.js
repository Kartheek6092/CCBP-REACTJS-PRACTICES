// Write your code here

import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {mode: 'Black'}

  onDarkMode = () => {
    this.setState(prevState => {
      console.log(prevState)
      return {mode: 'Black'}
    })
  }

  onLightMode = () => {
    this.setState(prevState => {
      console.log(prevState)
      return {mode: 'White'}
    })
  }

  render() {
    const {mode} = this.state
    let element
    if (mode === 'Black') {
      element = (
        <div className="container">
          <div className="darkContainer">
            <h1>Click To Change Mode</h1>
            <button
              type="button"
              className="lightbtn"
              onClick={this.onLightMode}
            >
              Light Mode
            </button>
          </div>
        </div>
      )
    } else if (mode === 'White') {
      element = (
        <div className="container">
          <div className="lightContainer">
            <h1>Click To Change Mode</h1>
            <button type="button" className="darkbtn" onClick={this.onDarkMode}>
              Dark Mode
            </button>
          </div>
        </div>
      )
    }
    return element
  }
}

export default LightDarkMode
