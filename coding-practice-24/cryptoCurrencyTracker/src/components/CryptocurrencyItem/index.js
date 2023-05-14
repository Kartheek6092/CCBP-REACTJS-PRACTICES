import './index.css'

const CryptocurrencyItem = props => {
  const {item} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = item

  return (
    <li>
      <div className="currency-type">
        <img src={currencyLogo} alt={currencyName} />
        <p>{currencyName}</p>
      </div>
      <div className="values">
        <p>{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
