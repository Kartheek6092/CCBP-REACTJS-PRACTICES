import {Component} from 'react'
import './index.css'
import CapitalItem from '../CapitalItem'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {countryId: 'NEW_DELHI'}

  onChangeCapital = event => {
    console.log(event.target.value)
    this.setState({
      countryId: event.target.value,
    })
  }

  filterCountries = () => {
    const {countryId} = this.state
    const resultedCountry = countryAndCapitalsList.filter(
      item => item.id === countryId,
    )
    return resultedCountry
  }

  render() {
    // const {countryId} = this.state
    const filteredCountry = this.filterCountries()
    console.log(filteredCountry)

    return (
      <div className="container">
        <div className="capitals-container">
          <h1>Countries And Capitals</h1>
          <p>
            <select
              value={filteredCountry.capitalDisplayText}
              onChange={this.onChangeCapital}
            >
              {countryAndCapitalsList.map(item => (
                <CapitalItem item={item} key={item.id} />
              ))}
            </select>{' '}
            is capital of which country?
          </p>
          <p className="country-container">{filteredCountry[0].country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
