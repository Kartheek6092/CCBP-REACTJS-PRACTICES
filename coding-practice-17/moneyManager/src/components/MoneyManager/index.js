import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'

import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

const initialMoneyDetails = [
  {
    id: 0,
    type: 'Balance',
    amount: 0,
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png',
  },
  {
    id: 1,
    type: 'Income',
    amount: 0,
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png',
  },
  {
    id: 2,
    type: 'Expenses',
    amount: 0,
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png',
  },
]

class MoneyManager extends Component {
  state = {
    moneyDetailList: initialMoneyDetails,
    historyList: [],
    title: '',
    amount: '',
    type: 'Income',
  }

  onTitleChange = event => {
    this.setState({
      title: event.target.value,
    })
  }

  onAmountChange = event => {
    this.setState({
      amount: event.target.value,
    })
  }

  onOptionChange = event => {
    this.setState({
      type: event.target.value,
    })
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    const newTransaction = {
      id: uuidv4(),
      title,
      amount,
      type: type[0] + type.slice(1, type.length).toLowerCase(),
    }
    this.setState(prevState => ({
      historyList: [...prevState.historyList, newTransaction],
      title: '',
      amount: '',
      moneyDetailList: prevState.moneyDetailList.map(item => {
        if (item.type === 'Balance') {
          return {
            ...item,
            amount:
              newTransaction.type === 'Income'
                ? parseInt(item.amount) + parseInt(amount)
                : parseInt(item.amount) - parseInt(amount),
          }
        }
        if (newTransaction.type === item.type) {
          if (item.type === 'Income') {
            // console.log(
            //   parseInt(prevState.moneyDetailList[0].amount) +
            //     parseInt(newTransaction.amount),
            // )
            return {
              ...item,
              amount:
                parseInt(prevState.moneyDetailList[1].amount) +
                parseInt(newTransaction.amount),
            }
          }
          if (item.type === 'Expenses') {
            // console.log(
            //   parseInt(prevState.moneyDetailList[0].amount) -
            //     parseInt(newTransaction.amount),
            // )
            return {
              ...item,
              amount:
                parseInt(prevState.moneyDetailList[2].amount) +
                parseInt(newTransaction.amount),
            }
          }
          return {...item}
        }
        return item
      }),
      type: 'Income',
    }))
  }

  onDeleteTransaction = id => {
    const {historyList} = this.state
    const filteredList = historyList.filter(item => id !== item.id)
    const deletingItem = historyList.filter(item => id === item.id)

    this.setState(prevState => ({
      historyList: filteredList,
      moneyDetailList: prevState.moneyDetailList.map(item => {
        if (item.type === 'Balance') {
          console.log(parseInt(item.amount) + parseInt(deletingItem[0].amount))
          return {
            ...item,
            amount:
              deletingItem[0].type === 'Income'
                ? parseInt(item.amount) - parseInt(deletingItem[0].amount)
                : parseInt(item.amount) + parseInt(deletingItem[0].amount),
          }
        }

        if (deletingItem[0].type === item.type) {
          if (item.type === 'Income') {
            // console.log(
            //   parseInt(prevState.moneyDetailList[0].amount) -
            //     parseInt(deletingItem.amount),
            // )
            return {
              ...item,
              amount:
                parseInt(prevState.moneyDetailList[1].amount) -
                parseInt(deletingItem[0].amount),
            }
          }
          if (item.type === 'Expenses') {
            // console.log(
            //   parseInt(prevState.moneyDetailList[0].amount) -
            //     parseInt(deletingItem.amount),
            // )
            return {
              ...item,
              amount:
                parseInt(prevState.moneyDetailList[2].amount) -
                parseInt(deletingItem[0].amount),
            }
          }
          return {...item}
        }
        return item
      }),
    }))
  }

  render() {
    const {moneyDetailList, historyList, title, type, amount} = this.state

    return (
      <div className="container">
        <div className="mm-container">
          <div className="head-container">
            <h1>Hi, Richard</h1>
            <p>Welcome back to your Money Manager</p>
          </div>
          <div className="money-report">
            <MoneyDetails moneyDetailsList={moneyDetailList} />
          </div>
          <div className="transaction-and-history-container">
            <form
              className="add-transaction-form"
              onSubmit={this.onAddTransaction}
            >
              <h1 className="form-heading">Add transaction</h1>
              <label htmlFor="title">TITLE</label>
              <br />
              <input
                type="text"
                id="title"
                placeholder="TITLE"
                className="title-input"
                onChange={this.onTitleChange}
                value={title}
              />
              <br />
              <label htmlFor="amount">AMOUNT</label>
              <br />
              <input
                type="text"
                id="amount"
                placeholder="AMOUNT"
                className="amount-input"
                onChange={this.onAmountChange}
                value={amount}
              />
              <br />
              <label htmlFor="type">TYPE</label>
              <br />
              <select id="type" onChange={this.onOptionChange} value={type}>
                <option value={transactionTypeOptions[0].optionId} selected>
                  {transactionTypeOptions[0].displayText}
                </option>
                <option value={transactionTypeOptions[1].optionId}>
                  {transactionTypeOptions[1].displayText}
                </option>
              </select>
              <br />
              <button type="submit" className="add-btn">
                Add
              </button>
            </form>
            <div className="history-container">
              <h1>History</h1>
              <ul className="transaction-list">
                <li className="category">
                  <p>Title</p>
                  <p>Amount</p>
                  <p>Type</p>
                  <p>
                    {null}
                    {'   '}
                  </p>
                </li>
                {historyList.map(item => (
                  <TransactionItem
                    item={item}
                    key={item.id}
                    onDeleteTransaction={this.onDeleteTransaction}
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

export default MoneyManager
