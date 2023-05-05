import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {isClicked: false, answerIds: []}

  showAnswer = id => {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked,
      answerIds: prevState.answerIds.includes(id)
        ? [prevState.answerIds.filter(item => item !== id)]
        : [...prevState.answerIds, id],
    }))
  }

  render() {
    const {isClicked, answerIds} = this.state
    const {faqsList} = this.props

    const updatedList = faqsList.map(item => {
      if (answerIds.includes(item.id)) {
        return {...item, showResult: true}
      }
      return {...item, showResult: false}
    })

    return (
      <div className="container">
        <div className="faqs-container">
          <h1>FAQs</h1>
          <ul>
            {updatedList.map(item => (
              <FaqItem
                item={item}
                key={item.id}
                isClicked={isClicked}
                showAnswer={this.showAnswer}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
