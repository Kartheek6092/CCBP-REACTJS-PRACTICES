import {Component} from 'react'
import Loader from 'react-loader-spinner'

import './index.css'

const apiUrlConstants = {
  initial: 'INITIAL',
  inprogress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class CourseItem extends Component {
  state = {courseDetails: [], apiStatus: apiUrlConstants.initial}

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    this.setState({apiStatus: apiUrlConstants.inprogress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiUrl = `https://apis.ccbp.in/te/courses/${id}`
    const options = {
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.setState({
        courseDetails: data.course_details,
        apiStatus: apiUrlConstants.success,
      })
    } else {
      this.setState({apiStatus: apiUrlConstants.failure})
    }
  }

  onRetry = () => {
    this.setState({apiStatus: apiUrlConstants.initial}, this.getDetails)
  }

  renderDetailsView = () => {
    const {courseDetails} = this.state
    const {description, name} = courseDetails

    return (
      <div className="container">
        <div className="course-details-container">
          <img
            src={courseDetails.image_url}
            alt={name}
            className="course-img"
          />
          <div className="details-container">
            <h1>{name}</h1>
            <p>{description}</p>
          </div>
        </div>
      </div>
    )
  }

  renderFailureView = () => (
    <div className="failure-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>We cannot seem to find the page you are looking for.</p>
      <button className="retry-btn" onClick={this.onRetry} type="button">
        Retry
      </button>
    </div>
  )

  renderLoader = () => (
    <div data-testid="loader" className="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  render() {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case 'INPROGRESS':
        return this.renderLoader()

      case 'SUCCESS':
        return this.renderDetailsView()

      case 'FAILURE':
        return this.renderFailureView()

      default:
        return null
    }

    // return (

    //     {isLoading ? (
    //       this.renderLoader()
    //     ) : (

    //     )}
    //   </div>
    // )
  }
}

export default CourseItem
