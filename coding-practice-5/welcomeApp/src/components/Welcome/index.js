import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  onSubscribed = () => {
    this.setState(prevState => {
      console.log(prevState)
      return {isSubscribed: false}
    })
  }

  onSubscribe = () => {
    this.setState(prevState => {
      console.log(prevState)
      return {isSubscribed: true}
    })
  }

  render() {
    const {isSubscribed} = this.state
    return (
      <div className="container">
        <div className="welContainer">
          <h1>Welcome</h1>
          <p>Thank you! Happy Learning</p>
          {isSubscribed && (
            <button onClick={this.onSubscribed}>Subscribed</button>
          )}
          {!isSubscribed && (
            <button onClick={this.onSubscribe}>Subscribe</button>
          )}
        </div>
      </div>
    )
  }
}

export default Welcome
