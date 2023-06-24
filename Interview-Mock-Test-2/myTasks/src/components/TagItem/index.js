import './index.css'

const TagItem = props => {
  const {tag, tabSelected, filterTagId} = props

  console.log(tag)

  const tabClicked = () => {
    tabSelected(tag.optionId)
  }

  const tabStyle = filterTagId === tag.optionId ? 'task-button' : 'tag-button'

  return (
    <li className="tag-item-container">
      <button type="button" className={tabStyle} onClick={tabClicked}>
        {tag.displayText}
      </button>
    </li>
  )
}

export default TagItem
