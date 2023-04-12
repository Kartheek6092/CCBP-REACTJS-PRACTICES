// Write your code here
import {Component} from 'react'
import './index.css'
import Message from '../Message/index'

class Login extends Component {
  onLogin = () => {
    this.setState(prevState => {
      console.log(prevState)
      return {isLogged: true}
    })
  }

  render() {
    return (
      <div className="container">
        <div className="loginCard">
          <Message />
          <button onClick={this.onLogin} type="button">
            Login
          </button>
        </div>
      </div>
    )
  }
}

export default Login
