import './index.css'

const TransactionItem = props => {
  const {item, onDeleteTransaction} = props
  const {id, title, amount, type} = item

  const onDelete = () => {
    onDeleteTransaction(id)
  }

  return (
    <li className="transaction-item">
      <p>{title}</p>
      <p>{amount}</p>
      <p>{type[0] + type.slice(1, type.length).toLowerCase()}</p>
      <button
        type="button"
        data-testid="delete"
        className="delete-btn"
        onClick={onDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="del-icon"
        />
      </button>
    </li>
  )
}

export default TransactionItem
