import './index.css'

const ReviewItem = props => {
  const {reviewItem} = props
  const {imgUrl, username, companyName, description} = reviewItem

  return (
    <div className="review-card">
      <img src={imgUrl} alt={username} />
      <p>{username}</p>
      <p>{companyName}</p>
      <p>{description}</p>
    </div>
  )
}

export default ReviewItem
