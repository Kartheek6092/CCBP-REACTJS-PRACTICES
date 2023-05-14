import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

const CryptocurrenciesList = props => {
  const {currencyList} = props
  console.log(currencyList)

  return (
    <>
      <h1>Cryptocurrency Tracker</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
        className="main-img"
      />
      <ul className="currencies-list">
        <div className="table-header">
          <p>Coin Type</p>
          <div className="value-types">
            <p>USD</p>
            <p>EURO</p>
          </div>
        </div>
        {currencyList.map(item => (
          <CryptocurrencyItem item={item} key={item.id} />
        ))}
      </ul>
    </>
  )
}

export default CryptocurrenciesList
