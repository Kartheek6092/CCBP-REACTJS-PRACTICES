import './index.css'

const EmojiCard = props => {
  const {emojiItem, onEmojiClick} = props
  const {id, emojiName, emojiUrl} = emojiItem

  const onButtonClick = () => {
    onEmojiClick(id)
  }

  return (
    <li className="emoji-card">
      <button type="button" onClick={onButtonClick}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}
export default EmojiCard
