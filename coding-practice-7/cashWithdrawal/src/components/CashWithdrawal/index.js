import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  onDeductionAmount = value => {
    console.log(value)
    const {balance} = this.state
    this.setState({
      balance: balance - value,
    })
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state

    return (
      <div className="container">
        <div className="withdrawalContainer">
          <div className="candidateProfile">
            <p>
              <span className="profileStartLetter"> S </span>
              <b> Sarah Williams</b>
            </p>
          </div>
          <div className="yourBalance">
            <p id="urBalance">Your Balance</p>
            <div className="amount">
              <p id="amount-display">{balance}</p>
              <p>In Rupees</p>
            </div>
          </div>
          <div className="withdrawal">
            <p id="withdrawText">Withdraw</p>
            <p>CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul className="denominationItems">
            {denominationsList.map(item => (
              <DenominationItem
                denominationItem={item}
                onDeductionAmount={this.onDeductionAmount}
                key={item.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
