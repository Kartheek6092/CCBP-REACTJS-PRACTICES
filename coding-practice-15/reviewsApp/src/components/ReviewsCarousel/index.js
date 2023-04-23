import {Component} from 'react'
import './index.css'
import ReviewItem from '../ReviewItem'

class ReviewsCarousel extends Component {
  state = {displayReviewId: 0}

  onRightArrow = () => {
    this.setState(prevState => ({
      displayReviewId: prevState.displayReviewId + 1,
    }))
  }

  onLeftArrow = () => {
    this.setState(prevState => ({
      displayReviewId: prevState.displayReviewId - 1,
    }))
  }

  render() {
    const {reviewsList} = this.props
    const {displayReviewId} = this.state
    const leftArrow = displayReviewId > 0 ? this.onLeftArrow : null
    const rightArrow =
      displayReviewId < reviewsList.length - 1 ? this.onRightArrow : null
    const displayReview =
      displayReviewId >= 0 && displayReviewId < reviewsList.length
        ? reviewsList[displayReviewId]
        : reviewsList[reviewsList.length - 1]

    return (
      <div className="container">
        <div className="reviews-container">
          <h1>Reviews</h1>
          <div className="reviews">
            <button data-testid="leftArrow" type="button" onClick={leftArrow}>
              <img
                className="arrow"
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>

            <ReviewItem reviewItem={displayReview} />

            <button data-testid="rightArrow" type="button" onClick={rightArrow}>
              <img
                className="arrow"
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
