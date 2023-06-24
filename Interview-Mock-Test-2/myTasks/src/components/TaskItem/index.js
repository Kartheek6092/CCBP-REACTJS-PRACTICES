import './index.css'

const TaskItem = props => {
  const {task} = props
  console.log(task)
  return (
    <ul className="task-item-container">
      <li>
        <p className="task-text">{task.taskInput}</p>
      </li>
      <li>
        <p type="button" className="task-button">
          {task.tagInput}
        </p>
      </li>
    </ul>
  )
}

export default TaskItem
