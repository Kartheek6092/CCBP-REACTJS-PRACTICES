import {Component} from 'react'

import './App.css'

//  This is the list (static data) used in the application. You can move it to any component if needed.

const initialCountriesList = [
  {
    id: '53c9c67a-c923-4927-8a75-fdfc4bc5ec61',
    name: 'Australia',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-australia-img.png',
    isVisited: false,
  },
  {
    id: '8baa8029-fb2c-4f06-bfcc-3dc9ad12b24d',
    name: 'Canada',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-canada-img.png',
    isVisited: false,
  },
  {
    id: '1b520f98-6548-41f3-816e-c8b887865172',
    name: 'Greenland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-greenland-img.png',
    isVisited: false,
  },
  {
    id: '25841996-fbfd-4554-add4-4c94082c8ccd',
    name: 'India',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-india-img.png',
    isVisited: true,
  },
  {
    id: '603c3568-13b0-11ec-82a8-0242ac130003',
    name: 'Netherlands',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-netherland-img.png',
    isVisited: false,
  },
  {
    id: '3c988dec-55e1-477d-a9e2-b354fd559849',
    name: 'Portugal',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-portugal-img.png',
    isVisited: false,
  },
  {
    id: 'd766f754-34f7-413e-81ec-9992821b97fa',
    name: 'Switzerland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-switzerland-img.png',
    isVisited: false,
  },
  {
    id: '7ebb4e04-b124-417f-a69e-564a456d70f1',
    name: 'Thailand',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-thailand-img.png',
    isVisited: false,
  },
  {
    id: '1e4b1dcd-6ace-4dde-ad8d-675927d5ae47',
    name: 'United Kingdom',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-united-kingdom-img.png',
    isVisited: true,
  },
  {
    id: 'e76da8ca-bc48-4981-902b-a4d2d46feb6d',
    name: 'Venezuela',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-venezuela-img.png',
    isVisited: false,
  },
]

class App extends Component {
  state = {visitedCountries: [], countriesList: initialCountriesList}

  componentDidMount() {
    this.getVisitedCountries()
  }

  getVisitedCountries = () => {
    const {countriesList} = this.state

    const getVisitedList = countriesList.filter(item => item.isVisited === true)
    this.setState({visitedCountries: getVisitedList})
  }

  visitCountry = event => {
    const {countriesList} = this.state
    const ModifiedList = countriesList.map(item => {
      if (item.id === event.target.id) {
        return {...item, isVisited: true}
      }
      return item
    })
    // console.log(ModifiedList)

    const visitingCountry = countriesList.filter(
      item => item.id === event.target.id,
    )
    this.setState(prevState => ({
      countriesList: ModifiedList,
      visitedCountries: !prevState.visitedCountries.includes(visitingCountry)
        ? [...prevState.visitedCountries, ...visitingCountry]
        : prevState.visitedCountries,
    }))
  }

  removeCountry = event => {
    const {visitedCountries, countriesList} = this.state

    const filterVisitedCountries = visitedCountries.filter(
      item => item.id !== event.target.id,
    )

    const ModifiedList = countriesList.map(item => {
      if (item.id === event.target.id) {
        return {...item, isVisited: false}
      }
      return item
    })

    this.setState({
      countriesList: ModifiedList,
      visitedCountries: filterVisitedCountries,
    })
  }

  render() {
    const {visitedCountries, countriesList} = this.state
    console.log(visitedCountries)

    return (
      <div className="container">
        <h1>Countries</h1>
        <div className="countries">
          <ul className="countriesList">
            {countriesList.map(item => (
              <li className="country-item" key={item.id}>
                <p>{item.name}</p>
                {item.isVisited ? (
                  <p>Visited</p>
                ) : (
                  <button
                    type="button"
                    id={item.id}
                    onClick={this.visitCountry}
                    className="visit-btn"
                  >
                    Visit
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="visited-countries">
          <h1>Visited Countries</h1>
          <ul className="visited-list">
            {visitedCountries.length > 0 ? (
              visitedCountries.map(item => (
                <li className="visited-item" key={item.id}>
                  <img
                    className="visited-country-img"
                    src={item.imageUrl}
                    alt="thumbnail"
                  />
                  <div className="country-name-remove">
                    <p>{item.name}</p>{' '}
                    <button
                      className="remove-btn"
                      type="button"
                      id={item.id}
                      onClick={this.removeCountry}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))
            ) : (
              <div>
                <p className="No-visited-countries">No Countries Visited Yet</p>
              </div>
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
