// Write your code here
import {Component} from 'react'
import './index.css'
import Login from '../Login/index'
import Logout from '../Logout/index'

class Home extends Component {
  state = {isLogged: true}

  onLogin = () => {
    this.setState(prevState => {
      console.log(prevState)
      return {isLogged: false}
    })
  }

  onLogout = () => {
    this.setState(prevState => {
      console.log(prevState)
      return {isLogged: true}
    })
  }

  render() {
    const {isLogged} = this.state
    return isLogged ? (
      <div className="container">
        <div className="loginCard">
          <h1>Please Login</h1>
          <button onClick={this.onLogin} type="button">
            Login
          </button>
        </div>
      </div>
    ) : (
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

export default Home
