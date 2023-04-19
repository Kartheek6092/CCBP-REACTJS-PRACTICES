import './index.css'

const HistoryItem = props => {
  const {eachItemDetails, clickDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachItemDetails

  const removeItem = () => {
    clickDelete(id)
  }
  return (
    <li className="item-con">
      <div className="time">
        <p>{timeAccessed}</p>
      </div>
      <div>
        <img src={logoUrl} className="logo-icon" alt="domain logo" />
      </div>
      <div className="site-details">
        <p className="head">{title}</p>
        <p className="domain">{domainUrl}</p>
      </div>
      <button
        type="button"
        className="item-in-list"
        onClick={removeItem}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          className="del-icon"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default HistoryItem
