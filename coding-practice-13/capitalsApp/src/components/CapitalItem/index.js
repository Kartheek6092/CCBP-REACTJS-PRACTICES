import './index.css'

const CapitalItem = props => {
  const {item} = props
  const {capitalDisplayText, id} = item

  return <option value={id}>{capitalDisplayText}</option>
}

export default CapitalItem
