import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isSubmitted: false}

  onFeedback = () => {
    this.setState({
      isSubmitted: true,
    })
  }

  render() {
    const {isSubmitted} = this.state
    const {resources} = this.props
    const {emojis} = resources

    return isSubmitted !== true ? (
      <div className="container">
        <div className="feedback-container">
          <h1>How satisfied are you with our customer support performance?</h1>
          <div className="emoji-container">
            <li key={emojis[0].id}>
              <img
                src={emojis[0].imageUrl}
                alt={emojis[0].name}
                onClick={this.onFeedback}
              />
              <p>{emojis[0].name}</p>
            </li>
            <li key={emojis[1].id}>
              <img
                src={emojis[1].imageUrl}
                alt={emojis[1].name}
                onClick={this.onFeedback}
              />
              <p>{emojis[1].name}</p>
            </li>
            <li key={emojis[2].id}>
              <img
                src={emojis[2].imageUrl}
                alt={emojis[2].name}
                onClick={this.onFeedback}
              />
              <p>{emojis[2].name}</p>
            </li>
          </div>
        </div>
      </div>
    ) : (
      <div className="container">
        <div className="feedback-container">
          <img
            src={resources.loveEmojiUrl}
            alt="love emoji"
            className="luvEmoji"
          />
          <h1>Thank You!</h1>
          <p>
            We will see your feedback to improve our customer support
            performance.
          </p>
        </div>
      </div>
    )
  }
}

export default Feedback
