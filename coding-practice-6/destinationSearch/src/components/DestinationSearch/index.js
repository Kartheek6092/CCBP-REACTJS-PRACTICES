import {Component} from 'react'

import DestinationCard from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    console.log(event.target.value)
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state

    const searchItems = destinationsList.filter(item =>
      item.name.toLowerCase().includes(searchInput),
    )
    return (
      <div className="container">
        <h1>Destination Search</h1>
        <div className="searchbar-container">
          <input
            type="search"
            onChange={this.onChangeSearchInput}
            value={searchInput}
            placeholder="Search"
          />
          <img
            className="search-icon"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </div>

        <div>
          <ul className="cardsContainer">
            {searchItems.map(item => (
              <DestinationCard item={item} key={item.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
