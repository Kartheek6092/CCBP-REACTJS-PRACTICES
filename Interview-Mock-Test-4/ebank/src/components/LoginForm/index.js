import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import {
  LoginContainer,
  Container,
  FormHeading,
  LoginImg,
  Form,
  CustomLabel,
  CustomInput,
  ErrorMessage,
  LoginBtn,
} from './styledComponents'

class LoginForm extends Component {
  state = {errMsg: '', username: '', pin: '', showErrMsg: false}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePin = event => {
    this.setState({pin: event.target.value})
  }

  onSuccessSubmit = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  onFailure = errorMsg => {
    // console.log(errorMsg)
    this.setState({showErrMsg: true, errMsg: errorMsg})
  }

  onLogin = async event => {
    event.preventDefault()
    const {username, pin} = this.state
    const userData = {user_id: username, pin}
    const apiUrl = 'https://apis.ccbp.in/ebank/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userData),
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()
    // console.log(response)
    if (response.ok === true) {
      this.onSuccessSubmit(data.jwt_token)
    } else {
      this.onFailure(data.error_msg)
    }
  }

  render() {
    const {errMsg, showErrMsg, username, pin} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <Container>
        <LoginContainer>
          <LoginImg
            src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
            alt="website login"
          />
          <Form onSubmit={this.onLogin}>
            <FormHeading>Welcome Back!</FormHeading>
            <CustomLabel htmlFor="username">User ID</CustomLabel> <br />
            <CustomInput
              id="username"
              type="text"
              value={username}
              onChange={this.onChangeUsername}
              placeholder="Enter User ID"
            />
            <br />
            <CustomLabel htmlFor="pin">PIN</CustomLabel> <br />
            <CustomInput
              id="pin"
              type="password"
              value={pin}
              onChange={this.onChangePin}
              placeholder="Enter PIN"
            />
            <br />
            <LoginBtn type="submit">Login</LoginBtn>
            {showErrMsg ? <ErrorMessage>*{errMsg}</ErrorMessage> : null}
          </Form>
        </LoginContainer>
      </Container>
    )
  }
}

export default LoginForm
