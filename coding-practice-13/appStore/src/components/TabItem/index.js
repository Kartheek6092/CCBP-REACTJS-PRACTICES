import './index.css'

const TabItem = props => {
  const {tabItem, onTabSelect} = props
  const selectTab = () => {
    onTabSelect(tabItem.tabId)
  }

  return (
    <li>
      <button type="button" onClick={selectTab}>
        {tabItem.displayText}
      </button>
    </li>
  )
}

export default TabItem
