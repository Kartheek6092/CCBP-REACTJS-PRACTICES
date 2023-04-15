import './index.css'

const DenominationItem = props => {
  const {denominationItem, onDeductionAmount} = props
  const {value} = denominationItem

  const OnDeduction = () => {
    // console.log(value)
    onDeductionAmount(value)
  }

  return (
    <li>
      <button className="denominationBtn" type="button" onClick={OnDeduction}>
        {denominationItem.value}
      </button>
    </li>
  )
}

export default DenominationItem
