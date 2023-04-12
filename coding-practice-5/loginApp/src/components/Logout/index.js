// Write your code here
import {Component} from 'react'
import './index.css'

class Logout extends Component {
  onLogout = () => {
    this.setState(prevState => {
      console.log(prevState)
      return {isLogged: false}
    })
  }

  render() {
    return (
      <div className="container">
        <div className="loginCard">
          <h1>Welcome User</h1>
          <button onClick={this.onLogout} type="button">
            Logout
          </button>
        </div>
      </div>
    )
  }
}

export default Logout
