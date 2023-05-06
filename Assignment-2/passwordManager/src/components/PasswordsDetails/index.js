import PasswordItem from '../PasswordItem'
import './index.css'

const PasswordsDetails = props => {
  const {
    passwordsList,
    onShowPasswords,
    showPassword,
    onSearchPassword,
    onDeletePassword,
  } = props

  const onShowPassword = event => {
    onShowPasswords(event.target.checked)
  }

  const onSearch = event => {
    onSearchPassword(event.target.value)
  }

  const onDeleteItem = id => {
    onDeletePassword(id)
  }

  return (
    <>
      <nav>
        <h1>
          Your Passwords{' '}
          <p className="passwords-counter">{passwordsList.length}</p>
        </h1>
        <div className="search-bar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
            alt="search"
          />
          <input type="search" placeholder="Search" onChange={onSearch} />
        </div>
      </nav>
      <div className="passwords-container">
        <div className="show-or-not-passwords">
          <input type="checkbox" id="checkBox" onClick={onShowPassword} />
          <label htmlFor="checkBox">Show Passwords</label>
        </div>
        {passwordsList.length === 0 ? (
          <div className="no-passwords">
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
              alt="no passwords"
            />
            <p>No Passwords</p>
          </div>
        ) : (
          <ul className="passwords-list">
            {passwordsList.map(item => (
              <PasswordItem
                item={item}
                key={item.id}
                showPassword={showPassword}
                onDeleteItem={onDeleteItem}
              />
            ))}
          </ul>
        )}
      </div>
    </>
  )
}

export default PasswordsDetails
