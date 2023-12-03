import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

class NetflixLogin extends Component {
  state = {username: '', password: '', showErr: false, errMsg: ''}

  onUsernameInput = event => {
    this.setState({username: event.target.value})
  }

  onPasswordInput = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitError = errorMsg => {
    this.setState({showErr: true, errMsg: errorMsg})
  }

  onLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const loginDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(loginDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitError(data.error_msg)
    }
  }

  render() {
    if (Cookies.get('jwt_token') !== undefined) {
      return <Redirect to="/" />
    }
    const {username, password, showErr, errMsg} = this.state

    return (
      <div className="login-page">
        <img
          className="login-logo"
          src="https://res.cloudinary.com/dzjuhiwxw/image/upload/v1689049123/Netflix%20clone/Login/Logo_trsrhe.png"
          alt="login website logo"
        />
        <div className="form-container">
          <form onSubmit={this.onLogin} className="login-form">
            <h1 className="form-heading">Login</h1>

            <div className="input-container">
              <label className="label-el" htmlFor="username">
                USERNAME
              </label>
              <input
                className="input-el"
                type="text"
                id="username"
                value={username}
                onChange={this.onUsernameInput}
              />
            </div>

            <div className="input-container">
              <label className="label-el" htmlFor="password">
                PASSWORD
              </label>
              <input
                className="input-el"
                type="password"
                id="password"
                password={password}
                onChange={this.onPasswordInput}
              />
              {showErr === true ? <p className="error">{errMsg}</p> : null}
            </div>
            <br />

            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }
}
export default NetflixLogin
