import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
// import AddPassword from '../AddPassword'
import PasswordsDetails from '../PasswordsDetails'
import './index.css'

class PasswordManager extends Component {
  state = {
    passwordsList: [],
    website: '',
    user: '',
    password: '',
    showPassword: false,
    searchText: '',
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onChangeUserName = event => {
    this.setState({user: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onShowPasswords = value => {
    // console.log(value)
    this.setState({
      showPassword: value,
    })
  }

  onAddPassword = event => {
    event.preventDefault()
    const {website, user, password} = this.state
    const newPassword = {
      id: uuidv4(),
      websiteName: website,
      userName: user,
      password,
    }

    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newPassword],
      website: '',
      user: '',
      password: '',
    }))
  }

  onSearchPassword = value => {
    this.setState({
      searchText: value,
    })
  }

  onDeletePassword = id => {
    this.setState(prevState => ({
      passwordsList: prevState.passwordsList.filter(item => item.id !== id),
    }))
  }

  onFormSubmit = () => {
    console.log('Form submitted')
  }

  render() {
    const {
      passwordsList,
      showPassword,
      user,
      website,
      password,
      searchText,
    } = this.state
    // console.log(passwordsList)

    const filteredList = passwordsList.filter(item =>
      item.websiteName.toLowerCase().includes(searchText.toLowerCase()),
    )

    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="logo"
        />
        <div className="add-password">
          <form onSubmit={this.onAddPassword} className="add-newPassword">
            <h1>Add New Password</h1>
            <div className="website-input input-details">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
              />
              <input
                type="text"
                placeholder="Enter Website"
                onChange={this.onChangeWebsite}
                value={website}
              />
            </div>
            <div className="username-input input-details">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
              />
              <input
                type="text"
                placeholder="Enter Username"
                onChange={this.onChangeUserName}
                value={user}
              />
            </div>
            <div className="password-input input-details">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
              />
              <input
                type="password"
                placeholder="Enter Password"
                onChange={this.onChangePassword}
                value={password}
              />
            </div>
            <button
              type="submit"
              className="submit-btn"
              onClick={this.onFormSubmit}
            >
              Add
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="password-manager-img"
          />
        </div>
        <div className="password-details">
          <PasswordsDetails
            passwordsList={filteredList}
            onShowPasswords={this.onShowPasswords}
            showPassword={showPassword}
            onSearchPassword={this.onSearchPassword}
            onDeletePassword={this.onDeletePassword}
            // searchText={searchText}
          />
        </div>
      </div>
    )
  }
}

export default PasswordManager
