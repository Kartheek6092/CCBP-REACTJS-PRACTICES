import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import TagItem from '../TagItem'
import TaskItem from '../TaskItem'
import './index.css'

class MyTasks extends Component {
  state = {
    taskList: [],
    filterTagId: undefined,
    tagInput: 'Health',
    taskInput: '',
  }

  onChangeTag = event => {
    this.setState({
      tagInput: event.target.value,
    })
  }

  onChangeTask = event => {
    this.setState({
      taskInput: event.target.value,
    })
  }

  addTask = event => {
    event.preventDefault()
    const {tagInput, taskInput} = this.state
    if (tagInput !== '' && taskInput !== '') {
      const newTask = {id: uuidv4(), tagInput, taskInput}
      this.setState(prevState => ({
        taskList: [...prevState.taskList, newTask],
        taskInput: '',
        tagInput: 'Health',
      }))
    }
  }

  tabSelected = id => {
    console.log('id is', id)
    this.setState({
      filterTagId: id,
    })
  }

  render() {
    const {tagsList} = this.props
    const {taskList, filterTagId, tagInput, taskInput} = this.state

    console.log(taskList, filterTagId)

    const filterList =
      filterTagId !== undefined
        ? taskList.filter(each => each.tagInput === filterTagId)
        : taskList

    return (
      <div className="container">
        <div className="left-side-container">
          <h1 className="heading">Create a task!</h1>
          <form className="task-input-form" onSubmit={this.addTask}>
            <label htmlFor="task-input" className="task-label">
              Task
            </label>
            <input
              type="text"
              className="task-input"
              id="task-input"
              placeholder="Enter the task here"
              onChange={this.onChangeTask}
              value={taskInput}
            />
            <br />
            <label htmlFor="tags" className="tags-label">
              Tags
            </label>
            <select
              id="tags"
              className="tags-input"
              onChange={this.onChangeTag}
              value={tagInput}
            >
              {tagsList.map(each => (
                <option value={each.optionId}>{each.displayText}</option>
              ))}
            </select>
            <button type="submit" className="submit-button">
              Add Task
            </button>
          </form>
        </div>
        <div className="right-side-container">
          <h2 className="tags-heading">Tags</h2>
          <ul className="tags-list">
            {tagsList.map(each => (
              <TagItem
                key={each.optionId}
                tag={each}
                tabSelected={this.tabSelected}
                filterTagId={filterTagId}
              />
            ))}
          </ul>
          <h2 className="task-heading">Tasks</h2>
          {filterList.length > 0 && (
            <ul className="task-container">
              {filterList.map(each => (
                <TaskItem key={each.id} task={each} />
              ))}
            </ul>
          )}
          {filterList.length === 0 && (
            <p className="no-task-text">No Tasks Added Yet</p>
          )}
          )
        </div>
      </div>
    )
  }
}

export default MyTasks
