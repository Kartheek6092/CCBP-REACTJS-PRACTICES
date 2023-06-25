import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import './index.css'

const apiUrlConstants = {
  initial: 'INITIAL',
  inprogress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {courses: [], apiStatus: apiUrlConstants.initial}

  componentDidMount() {
    this.getHomeDetails()
  }

  apiSuccess = courses => {
    this.setState({courses, apiStatus: apiUrlConstants.success})
  }

  apiFailure = () => {
    this.setState({apiStatus: apiUrlConstants.failure})
  }

  getHomeDetails = async () => {
    this.setState({apiStatus: apiUrlConstants.inprogress})
    const apiUrl = 'https://apis.ccbp.in/te/courses'
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    // console.log(data)
    if (response.ok === true) {
      this.apiSuccess(data.courses)
    } else {
      this.apiFailure(data.err_msg)
    }
  }

  renderHomeRoute = () => {
    const {courses} = this.state

    return (
      <>
        <div className="home-container">
          <h1>Courses</h1>
          <ul className="courses-list">
            {courses.map(item => (
              <Link
                key={item.id}
                className="course-item"
                to={`/courses/${item.id}`}
                id={item.id}
              >
                <li key={item.id} id={item.id}>
                  <img
                    className="course-logo"
                    src={item.logo_url}
                    alt={item.name}
                  />
                  <p>{item.name}</p>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </>
    )
  }

  onRetry = () => {
    this.setState({apiStatus: apiUrlConstants.initial}, this.getHomeDetails)
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
        return this.renderHomeRoute()

      case 'FAILURE':
        return this.renderFailureView()

      default:
        return null
    }

    // return (

    //     {isLoading ? this.renderLoader() : this.renderHomeRoute()}

    // )
  }
}

export default Home
