import './index.css'

const TodoItem = props => {
  const {item, onDeleteTodo} = props

  const onDelete = () => {
    onDeleteTodo(item.id)
  }

  return (
    <li>
      <p>{item.title}</p>
      <button className="deleteBtn" onClick={onDelete} type="button">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
