import './index.css'

const AddPassword = props => {
  const {
    onAddPassword,
    onChangeWebsite,
    onChangeUserName,
    onChangePassword,
  } = props

  const onAdd = () => {
    onAddPassword()
  }

  const onChangeWeb = event => {
    onChangeWebsite(event.target.value)
  }

  const onChangeUser = event => {
    onChangeUserName(event.target.value)
  }

  const onChangePsswrd = event => {
    onChangePassword(event.target.value)
  }

  return (
    <>
      <form onSubmit={onAdd} className="add-newPassword">
        <h1>Add New Password</h1>
        <div className="website-input input-details">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
            alt="website"
          />
          <input
            type="url"
            placeholder="Enter Website"
            onChange={onChangeWeb}
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
            onChange={onChangeUser}
          />
        </div>
        <div className="password-input input-details">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
            alt="password"
          />
          <input
            type="text"
            placeholder="Enter Password"
            onChange={onChangePsswrd}
          />
        </div>
        <button type="submit" className="submit-btn" onClick={onFormSubmit}>
          Add
        </button>
      </form>
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
        alt="password manager"
        className="password-manager-img"
      />
    </>
  )
}

export default AddPassword
