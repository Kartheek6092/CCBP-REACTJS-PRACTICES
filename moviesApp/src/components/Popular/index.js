import {Component} from 'react'
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'

import {FaGoogle, FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa'

import Header from '../Header'
import RenderLoader from '../Loader'

import './index.css'

const ApiStatusConstants = {
  initial: 'INITIAL',
  inprogress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

export default class Popular extends Component {
  state = {popularMoviesList: [], apiStatus: ApiStatusConstants.initial}

  componentDidMount() {
    this.getPopularMovies()
  }

  getPopularMovies = async () => {
    this.setState({apiStatus: ApiStatusConstants.inprogress})
    const url = 'https://apis.ccbp.in/movies-app/popular-movies'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.setState({
        popularMoviesList: data.results,
        apiStatus: ApiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: ApiStatusConstants.failure})
    }
  }

  onRetry = () => {
    this.setState(
      {apiStatus: ApiStatusConstants.initial},
      this.getPopularMovies,
    )
  }

  renderSuccessView = () => {
    const {popularMoviesList} = this.state

    return (
      <ul className="popular-movies-list">
        {popularMoviesList.map(item => (
          <li key={item.id} className="movie-item">
            <Link to={`/movies/${item.id}`}>
              <img
                src={item.poster_path}
                alt={item.title}
                className="movie-poster"
              />
            </Link>
          </li>
        ))}
      </ul>
    )
  }

  renderFailureView = () => (
    <div className="failure-container">
      <img
        src="https://res.cloudinary.com/dzjuhiwxw/image/upload/v1690287805/Netflix%20clone/Popular/Background-Complete_i2o6cl.png"
        alt="failure view"
      />
      <p className="api-failure-text">Something went wrong. Please try again</p>
      <button
        className="popular-retry-btn"
        type="button"
        onClick={this.onRetry}
      >
        Try Again
      </button>
    </div>
  )

  render() {
    const {apiStatus} = this.state

    const renderComponent = () => {
      switch (apiStatus) {
        case 'INPROGRESS':
          return (
            <div className="popular-loader">
              <RenderLoader />
            </div>
          )
        case 'SUCCESS':
          return this.renderSuccessView()
        case 'FAILURE':
          return this.renderFailureView()
        default:
          return null
      }
    }

    return (
      <div className="popular-movies-page">
        <Header />
        {renderComponent()}
        {apiStatus !== 'FAILURE' ? (
          <footer className="follow-us">
            <ul className="social-media-list">
              <li>
                <FaGoogle />
              </li>
              <li>
                <FaTwitter />
              </li>
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaYoutube />
              </li>
            </ul>
            <p>Contact Us</p>
          </footer>
        ) : null}
      </div>
    )
  }
}
