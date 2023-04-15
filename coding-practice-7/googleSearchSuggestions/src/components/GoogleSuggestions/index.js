import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchText: ''}

  onSuggested = suggestion => {
    this.setState({
      searchText: suggestion,
    })
  }

  onSearchInput = event => {
    this.setState({
      searchText: event.target.value,
    })
  }

  render() {
    const {suggestionsList} = this.props
    const {searchText} = this.state

    const searchItems = suggestionsList.filter(item => {
      if (searchText === searchText.toLowerCase()) {
        return item.suggestion.toLowerCase().includes(searchText)
      }
      return item.suggestion.includes(searchText)
    })

    return (
      <div className="container">
        <div className="google-search-bar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="Google logo"
            className="google-logo"
          />
          <div className="searchAndSuggestionContainer">
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
              />
              <input
                type="search"
                placeholder="Search google"
                onChange={this.onSearchInput}
                value={searchText}
              />
            </div>
            <div className="suggestion-container">
              <ul>
                {searchItems.map(eachitem => (
                  <SuggestionItem
                    item={eachitem}
                    key={eachitem.id}
                    onSuggested={this.onSuggested}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
