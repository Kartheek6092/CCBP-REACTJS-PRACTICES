import './index.css'

const FaqItem = props => {
  const {item, showAnswer} = props
  const {id, questionText, answerText, showResult} = item

  const imgUrl = showResult
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

  const altText = showResult ? 'minus' : 'plus'

  const onButtonClick = () => {
    showAnswer(id)
  }

  return (
    <li>
      <div className="question">
        <h1>{questionText}</h1>
        <button type="button" onClick={onButtonClick}>
          <img src={imgUrl} alt={altText} />
        </button>
      </div>

      {showResult ? (
        <>
          <hr />
          <div className="answer">
            <p>{answerText}</p>
          </div>
        </>
      ) : null}
    </li>
  )
}

export default FaqItem
