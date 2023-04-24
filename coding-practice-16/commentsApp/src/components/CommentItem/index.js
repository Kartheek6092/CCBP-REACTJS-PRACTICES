import './index.css'
import {formatDistanceToNow} from 'date-fns'

console.log(formatDistanceToNow(new Date()))

const CommentItem = props => {
  const {
    commentItem,

    backgroundClassname,
    onDeleteComment,
    onLikeButton,
  } = props
  const {id, isLiked, name, comment} = commentItem

  //   console.log(isLikedIt)
  const likeImg = !isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'

  const onDelete = () => {
    onDeleteComment(id)
  }

  const onLike = () => {
    onLikeButton(id)
  }

  const clsName = ' profile-letter'

  return (
    <li className="comment-item">
      <div className="nameAndComment">
        <p className={backgroundClassname + clsName}>{name[0]}</p>
        <div>
          <div className="name-and-time">
            <h1>{name}</h1>
            {'   '}
            <p className="posted-time">{formatDistanceToNow(new Date())}</p>
          </div>

          <p>{comment}</p>
        </div>
      </div>
      <p className="action-container">
        <button type="button" className="like-btn" onClick={onLike}>
          <img src={likeImg} alt="like" /> Like
        </button>{' '}
        <button
          type="button"
          data-testid="delete"
          className="del-btn"
          onClick={onDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>{' '}
      </p>
    </li>
  )
}

export default CommentItem
