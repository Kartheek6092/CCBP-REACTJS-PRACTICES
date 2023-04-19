import {useState} from 'react'
import HistoryItem from '../HistoryItem'
import './index.css'

const HistoryList = props => {
  const {initialHistoryList} = props
  const [updatedList, setUpdatedList] = useState({
    search: '',
    initialHistoryList,
  })

  const updateOnClick = id => {
    const newList = updatedList.initialHistoryList.filter(
      each => each.id !== id,
    )
    setUpdatedList(prev => ({...prev, initialHistoryList: newList}))
  }

  const controlList = event => {
    const list = updatedList.initialHistoryList.filter(each =>
      each.title.toLowerCase().includes(event.target.value.toLowerCase()),
    )

    console.log(event.target.value)
    setUpdatedList({
      search: event.target.value,
      initialHistoryList: list,
    })
  }
  console.log(updatedList)

  return (
    <div className="main-con">
      <div className="bg-container">
        <div className="flex-con">
          <div className="logo-con">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              className="logo"
              alt="app logo"
            />
          </div>
          <div className="search-con">
            <div className="search-icon">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                className="search1"
                alt="search"
              />
            </div>
            <div className="search-box">
              <input
                type="search"
                placeholder="type to search"
                className="searchBar"
                onChange={controlList}
                value={updatedList.search}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="list-con">
        {updatedList.initialHistoryList.length > 0 ? (
          <ul className="ul-con">
            {updatedList.initialHistoryList.map(eachItem => (
              <HistoryItem
                eachItemDetails={eachItem}
                clickDelete={updateOnClick}
                key={eachItem.id}
              />
            ))}
          </ul>
        ) : (
          <p className="no-item">There is no history to show</p>
        )}
      </div>
    </div>
  )
}
export default HistoryList
