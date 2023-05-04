import './index.css'

const MoneyDetails = props => {
  const {moneyDetailsList} = props

  return (
    <>
      <div className="balance money-element">
        <img src={moneyDetailsList[0].imgUrl} alt={moneyDetailsList[0].type} />
        <div>
          <p>
            {'Your '}
            {moneyDetailsList[0].type}
          </p>
          <div className="d-amount">
            <p data-testid="balanceAmount">Rs {moneyDetailsList[0].amount}</p>
          </div>
        </div>
      </div>
      <div className="income money-element">
        <img src={moneyDetailsList[1].imgUrl} alt={moneyDetailsList[1].type} />
        <div>
          <p>
            {'Your '}
            {moneyDetailsList[1].type}
          </p>
          <div className="d-amount">
            <p data-testid="incomeAmount">Rs {moneyDetailsList[1].amount}</p>
          </div>
        </div>
      </div>

      <div className="expenses money-element">
        <img src={moneyDetailsList[2].imgUrl} alt={moneyDetailsList[2].type} />
        <div>
          <p>
            {'Your '}
            {moneyDetailsList[2].type}
          </p>
          <div className="d-amount">
            <p data-testid="expensesAmount">Rs {moneyDetailsList[2].amount}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default MoneyDetails
