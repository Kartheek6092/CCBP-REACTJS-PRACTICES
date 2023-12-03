import {Component} from 'react'
import Cookies from 'js-cookie'
import {FaGoogle, FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa'

import RenderLoader from '../Loader'
import Header from '../Header'
import TrendingMovies from '../TrendingMovies'
import OriginalMovies from '../OriginalMovies'

import './index.css'

const ApiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inprogress: 'INPROGRESS',
}

class Home extends Component {
  state = {
    trending: [],
    originals: [],
    OriginalsApiStatus: ApiStatusConstants.initial,
    TrendingApiStatus: ApiStatusConstants.initial,
  }

  componentDidMount() {
    this.getTrendingMovies()
    this.getOriginalMovies()
  }

  getTrendingMovies = async () => {
    this.setState({OriginalsApiStatus: ApiStatusConstants.inprogress})
    const url = 'https://apis.ccbp.in/movies-app/trending-movies'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    // console.log(data)

    if (response.ok === true) {
      this.setState({
        trending: data.results,
        TrendingApiStatus: ApiStatusConstants.success,
      })
    } else {
      this.setState({TrendingApiStatus: ApiStatusConstants.failure})
    }
  }

  getOriginalMovies = async () => {
    const url = 'https://apis.ccbp.in/movies-app/originals'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    // console.log(data)

    if (response.ok === true) {
      this.setState({
        originals: data.results,
        OriginalsApiStatus: ApiStatusConstants.success,
      })
    } else {
      this.setState({OriginalsApiStatus: ApiStatusConstants.failure})
    }
  }

  OriginalsRetry = () => {
    this.setState(
      {OriginalsApiStatus: ApiStatusConstants.initial},
      this.getOriginalMovies,
    )
  }

  TrendingRetry = () => {
    this.setState(
      {TrendingApiStatus: ApiStatusConstants.initial},
      this.getTrendingMovies,
    )
  }

  FailureView = () => (
    <div className="failure-container">
      <img
        src="https://res.cloudinary.com/dzjuhiwxw/image/upload/v1689736752/Netflix%20clone/Home/alert-triangle_rsaihh.svg"
        alt="failure view"
      />
      <p className="failure-text">Something went wrong. Please try again</p>
      <button className="retry-btn" type="button" onClick={this.OriginalsRetry}>
        Try Again
      </button>
    </div>
  )

  TrendingFailureView = () => (
    <div className="failure-container">
      <img
        src="https://res.cloudinary.com/dzjuhiwxw/image/upload/v1689736752/Netflix%20clone/Home/alert-triangle_rsaihh.svg"
        alt="failure view"
      />
      <p className="failure-text">Something went wrong. Please try again</p>
      <button className="retry-btn" type="button" onClick={this.TrendingRetry}>
        Try Again
      </button>
    </div>
  )

  render() {
    const {
      OriginalsApiStatus,
      trending,
      originals,
      TrendingApiStatus,
    } = this.state

    const randomMovie = originals[Math.floor(Math.random() * originals.length)]

    const title = randomMovie !== undefined ? randomMovie.title : null
    const posterPath =
      randomMovie !== undefined ? randomMovie.backdrop_path : null
    const overview = randomMovie !== undefined ? randomMovie.overview : null

    const containerStyle = {
      position: 'relative',
      backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url(${posterPath})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      height: '80vh',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
    }

    return (
      <div className="home-container">
        {OriginalsApiStatus === 'FAILURE' ? (
          <div className="header-failure">
            <Header />
            {this.FailureView()}
          </div>
        ) : (
          <div style={containerStyle}>
            <Header />
            {randomMovie === undefined &&
            OriginalsApiStatus === 'INPROGRESS' ? (
              <RenderLoader />
            ) : (
              <div className="header-content">
                <h1 className="movie-name">{title}</h1>
                <h1 className="overview">{overview}</h1>
                <button type="button" className="play-btn">
                  Play
                </button>
              </div>
            )}
          </div>
        )}

        <div className="videos-slicks">
          <div className="slick-container">
            <h1>Trending Now</h1>
            {TrendingApiStatus === 'FAILURE' ? (
              this.TrendingFailureView()
            ) : (
              <TrendingMovies trending={trending} />
            )}
          </div>

          <br />
          <div className="slick-container">
            <h1>Originals</h1>
            {OriginalsApiStatus === 'FAILURE' ? (
              this.FailureView()
            ) : (
              <OriginalMovies originals={originals} />
            )}
          </div>
        </div>

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
          <p>Contact us</p>
        </footer>
      </div>
    )
  }
}

export default Home
