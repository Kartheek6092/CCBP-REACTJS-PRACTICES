/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'

import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    isWin: false,
    clickedEmojiIds: [],
    isDoubleClicked: false,
  }

  onEmojiClick = id => {
    const {clickedEmojiIds} = this.state
    if (clickedEmojiIds.includes(id)) {
      this.setState({
        isDoubleClicked: true,
      })
    } else {
      this.setState(prevState => ({
        clickedEmojiIds: [...prevState.clickedEmojiIds, id],
        score: prevState.score + 1,
        isWin: prevState.score === 11,
      }))
    }
  }

  onRestartGame = () => {
    const {score} = this.state
    this.setState(prevState => ({
      score: 0,
      isWin: false,
      clickedEmojiIds: [],
      isDoubleClicked: false,
      topScore: prevState.topScore < score ? score : prevState.topScore,
    }))
  }

  shuffledEmojisList = emojisList => emojisList.sort(() => Math.random() - 0.5)

  render() {
    const {score, topScore, isWin, isDoubleClicked} = this.state
    const {emojisList} = this.props
    this.shuffledEmojisList(emojisList)

    return (
      <div className="container">
        <nav className="head-container">
          <NavBar score={score} topScore={topScore} />
        </nav>
        <div className="emoji-game-container">
          {!isDoubleClicked ? (
            <ul className="emoji-cards">
              {emojisList.map(item => (
                <EmojiCard
                  emojiItem={item}
                  key={item.id}
                  isDoubleClicked={isDoubleClicked}
                  onEmojiClick={this.onEmojiClick}
                />
              ))}
            </ul>
          ) : (
            <div className="win/lose-container">
              <WinOrLoseCard
                isWin={isWin}
                score={score}
                onRestartGame={this.onRestartGame}
              />
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
