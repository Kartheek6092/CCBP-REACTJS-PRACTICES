import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    commentsList: [],
    name: '',
    comment: '',
    count: 0,
  }

  onNameInputChange = event => {
    this.setState({name: event.target.value})
  }

  onCommentInputChange = event => {
    this.setState({comment: event.target.value})
  }

  onPostComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
      count: prevState.count + 1,
    }))
  }

  onDeleteComment = id => {
    const {commentsList} = this.state
    const updatedList = commentsList.filter(item => item.id !== id)
    this.setState(prevState => ({
      commentsList: updatedList,
      count: prevState.count - 1,
    }))
  }

  onLikeButton = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(item => {
        if (id === item.id) {
          return {...item, isLiked: !item.isLiked}
        }
        return item
      }),
    }))
  }

  render() {
    const {commentsList, comment, name, count} = this.state
    // console.log(isLiked)

    return (
      <div className="container">
        <div className="create-comment-container">
          <form onSubmit={this.onPostComment} className="comments-form">
            <h1 className="comments-heading">Comments</h1>
            <p>Say something about 4.0 Technologies</p>
            <input
              value={name}
              className="name-input"
              type="text"
              placeholder="Your name"
              onChange={this.onNameInputChange}
            />
            <br />
            <textarea
              className="comment-area"
              rows="15"
              cols="40"
              placeholder="Your Comment"
              value={comment}
              onChange={this.onCommentInputChange}
            >
              {null}
            </textarea>
            <br />
            <input className="submit-btn" type="submit" value="Add Comment" />
          </form>
          <img
            className="comment-image"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
        </div>

        <div className="comments-container">
          <hr />
          <p>
            <span className="comment-counter">{count}</span> Comments
          </p>
          <ul className="comments-list">
            {commentsList.map(item => (
              <CommentItem
                commentItem={item}
                backgroundClassname={
                  initialContainerBackgroundClassNames[
                    Math.floor(
                      Math.random() *
                        initialContainerBackgroundClassNames.length,
                    )
                  ]
                }
                key={item.id}
                onDeleteComment={this.onDeleteComment}
                onLikeButton={this.onLikeButton}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
