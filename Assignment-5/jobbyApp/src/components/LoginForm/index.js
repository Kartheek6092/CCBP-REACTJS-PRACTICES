import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', showError: false, errMsg: ''}

  onUsernameChange = event => {
    this.setState({username: event.target.value})
  }

  onPasswordChange = event => {
    this.setState({password: event.target.value})
  }

  onSuccessSubmit = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  onFailure = errorMsg => {
    console.log(errorMsg)
    this.setState({showError: true, errMsg: errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userInfo = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userInfo),
    }
    const url = 'https://apis.ccbp.in/login'
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(response)
    if (response.ok === true) {
      this.onSuccessSubmit(data.jwt_token)
    } else {
      this.onFailure(data.error_msg)
    }
  }

  render() {
    const {username, password, errMsg, showError} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="container">
        <div className="login-form-container">
          <div className="login-logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
            />
          </div>
          <form onSubmit={this.onSubmitForm} className="form-container">
            <label htmlFor="username">ENTER USERNAME</label>
            <input
              className="credential-input"
              type="text"
              id="username"
              placeholder="USERNAME"
              value={username}
              onChange={this.onUsernameChange}
            />
            <br />
            <label htmlFor="password">ENTER PASSWORD</label>
            <input
              className="credential-input"
              type="password"
              id="password"
              placeholder="PASSWORD"
              value={password}
              onChange={this.onPasswordChange}
            />
            <br />
            <button className="login-btn" type="submit">
              Login
            </button>
            <p className="error-msg">{showError ? `*${errMsg}` : null}</p>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
