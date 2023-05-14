import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

class CryptocurrencyTracker extends Component {
  state = {currencyList: [], isLoading: true}

  componentDidMount() {
    this.getCurrenciesList()
  }

  getCurrenciesList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const formattedData = data.map(item => ({
      currencyLogo: item.currency_logo,
      currencyName: item.currency_name,
      euroValue: item.euro_value,
      id: item.id,
      usdValue: item.usd_value,
    }))
    console.log(formattedData)

    this.setState({currencyList: formattedData, isLoading: false})
  }

  render() {
    const {isLoading, currencyList} = this.state

    return (
      <div className="currency-tracker">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <CryptocurrenciesList currencyList={currencyList} />
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
