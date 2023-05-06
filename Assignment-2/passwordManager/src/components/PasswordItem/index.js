import './index.css'

const PasswordItem = props => {
  const {item, showPassword, onDeleteItem} = props
  const {id, websiteName, userName, password} = item

  const onDelete = () => {
    onDeleteItem(id)
  }

  return (
    <li>
      <div className="profile-letter">{userName[0].toUpperCase()}</div>
      <div className="details">
        <p>{websiteName}</p>
        <p>{userName}</p>
        {showPassword ? (
          <p>{password}</p>
        ) : (
          <p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
              className="stars"
            />{' '}
          </p>
        )}
      </div>
      <button type="button" data-testid="delete" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default PasswordItem
