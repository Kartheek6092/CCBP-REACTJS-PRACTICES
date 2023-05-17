import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    fNameErr: '',
    lNameErr: '',
    isSuccessLogin: false,
    firstName: '',
    lastName: '',
  }

  // firstName.length < 1 && lastName.length < 1) ||

  onFnameBlur = () => {
    const {firstName} = this.state
    if (firstName.length < 1) {
      this.setState({
        fNameErr: '*Required',
        isSuccessLogin: false,
      })
    } else {
      this.setState({fNameErr: ''})
    }
  }

  onLnameBlur = () => {
    const {lastName} = this.state
    if (lastName.length < 1) {
      this.setState({
        lNameErr: '*Required',
        isSuccessLogin: false,
      })
    } else {
      this.setState({lNameErr: ''})
    }
  }

  onFirstNameInput = event => {
    this.setState({firstName: event.target.value})
  }

  onLastNameInput = event => {
    this.setState({lastName: event.target.value})
  }

  onFormSubmitted = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName.length > 0 && lastName.length > 0) {
      this.setState({isSuccessLogin: true})
    } else if (lastName.length < 1 && firstName.length < 1) {
      this.setState({fNameErr: '*Required', lNameErr: '*Required'})
    } else if (firstName.length < 1) {
      this.setState({fNameErr: '*Required'})
    } else if (lastName.length < 1) {
      this.setState({lNameErr: '*Required'})
    } else {
      this.setState({fNameErr: '', lNameErr: ''})
    }
  }

  anotherResponse = () => {
    this.setState({
      isSuccessLogin: false,
      fNameErr: '',
      lNameErr: '',
      firstName: '',
      lastName: '',
    })
  }

  render() {
    const {lNameErr, fNameErr, isSuccessLogin, firstName, lastName} = this.state

    return (
      <div className="container">
        <h1>Registration</h1>

        {isSuccessLogin ? (
          <div className="success-registration">
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
            />
            <p>Submitted successfully</p>
            <button
              type="submit"
              onClick={this.anotherResponse}
              className="submit-another"
            >
              Submit Another Response
            </button>
          </div>
        ) : (
          <form className="form-container" onSubmit={this.onFormSubmitted}>
            <label htmlFor="first-name">FIRST NAME</label>
            <input
              onBlur={this.onFnameBlur}
              type="text"
              id="first-name"
              placeholder="First Name"
              onChange={this.onFirstNameInput}
              value={firstName}
            />
            {fNameErr !== '' ? <p className="error-msg">{fNameErr}</p> : null}
            <label htmlFor="last-name">LAST NAME</label>
            <input
              onBlur={this.onLnameBlur}
              onChange={this.onLastNameInput}
              type="text"
              id="last-name"
              placeholder="Last Name"
              value={lastName}
            />
            {lNameErr !== '' ? <p className="error-msg">{lNameErr}</p> : null}
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    )
  }
}

export default RegistrationForm
