import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: true,
  }

  renderButton = () => {}

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="container">
        <Welcome greeting="Hello" name="User" />
        {isLoggedIn && <button>Logout</button>}
        {!isLoggedIn && <button>Login</button>}
      </div>
    )
  }
}

export default App
