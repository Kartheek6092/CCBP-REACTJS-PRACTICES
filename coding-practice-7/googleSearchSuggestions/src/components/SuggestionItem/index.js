import './index.css'

const SuggestionItem = props => {
  const {item, onSuggested} = props
  const {suggestion} = item

  const onSuggestFill = () => {
    onSuggested(suggestion)
  }

  return (
    <li>
      <p>{item.suggestion}</p>
      <button type="button" onClick={onSuggestFill}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="left-arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
