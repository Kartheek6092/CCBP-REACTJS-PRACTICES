import {Component} from 'react'
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import {format} from 'date-fns'

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

export default class MoviesDetails extends Component {
  state = {movieDetails: '', apiStatus: ApiStatusConstants.initial}

  componentDidMount() {
    this.getMovieDetails()
  }

  getMovieDetails = async () => {
    this.setState({apiStatus: ApiStatusConstants.inprogress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/movies-app/movies/${id}`
    const options = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${Cookies.get('jwt_token')}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const movieDetails = data.movie_details
    // console.log(data)
    const camelMovieDetails = {
      adult: movieDetails.adult,
      backdropPath: movieDetails.backdrop_path,
      budget: movieDetails.budget,
      genres: movieDetails.genres,
      id: movieDetails.id,
      overview: movieDetails.overview,
      posterPath: movieDetails.poster_path,
      releaseDate: format(new Date(movieDetails.release_date), 'Y'),
      runtime: movieDetails.runtime,
      similarMovies: movieDetails.similar_movies,
      spokenLanguages: movieDetails.spoken_languages,
      title: movieDetails.title,
      voteAverage: movieDetails.vote_average,
      voteCount: movieDetails.vote_count,
    }
    if (response.ok === true) {
      this.setState({
        movieDetails: {...camelMovieDetails},
        apiStatus: ApiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: ApiStatusConstants.failure})
    }
  }

  onRetry = () => {
    this.setState({apiStatus: ApiStatusConstants.initial}, this.getMovieDetails)
  }

  renderSuccessView = () => {
    const {movieDetails} = this.state

    const {
      backdropPath,
      //   id,
      overview,
      //   posterPath,
      title,
      runtime,
      adult,
      releaseDate,
      genres,
      spokenLanguages,
      voteCount,
      voteAverage,
      budget,
      similarMovies,
    } = movieDetails

    const containerStyle = {
      position: 'relative',
      backgroundImage: ` radial-gradient(farthest-side at 60% 25%, rgba(0,0,0,0.1), rgba(0,0,0,0.8)), url(${backdropPath})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }

    return (
      <>
        <div
          className="movie-header-container"
          testid="movieItem"
          style={containerStyle}
        >
          <Header />
          <div className="header-content">
            <h1 className="movie-name">{title}</h1>
            <div className="movie-basic-details">
              <p>{this.minutesToHours(runtime)}</p>
              <p className="sensor-mark">{adult !== true ? 'U/A' : 'A'}</p>
              <p>{releaseDate}</p>
            </div>

            <p>{overview}</p>
            <button type="button" className="play-btn">
              Play
            </button>
          </div>
        </div>

        <div className="contextual-info">
          <div className="movie-genres">
            <h1 className="info-titles">genres</h1>
            <ul className="genres">
              {genres !== null
                ? genres.map(item => (
                    <li className="genre" key={item.id} id={item.id}>
                      <p>{item.name}</p>
                    </li>
                  ))
                : null}
            </ul>
          </div>

          <div className="languages">
            <h1 className="info-titles">Audio Available</h1>
            <ul className="genres">
              {genres !== null
                ? spokenLanguages.map(item => (
                    <li className="genre" key={item.id} id={item.id}>
                      <p>{item.english_name}</p>
                    </li>
                  ))
                : null}
            </ul>
          </div>

          <div className="rating">
            <h1 className="info-titles">Rating Count</h1>
            <p className="value">{voteCount}</p>

            <h1 className="info-titles">Rating Average</h1>
            <p className="value">{voteAverage}</p>
          </div>

          <div className="budget-release">
            <h1 className="info-titles">Budget</h1>
            <p className="value">{budget}</p>

            <h1 className="info-titles">Release Date</h1>
            <p className="value">{releaseDate}</p>
          </div>
        </div>

        <div className="similar-movies">
          <h1 className="more-like-this">More like this</h1>
          <ul className="similar-movies-list">
            {similarMovies !== null
              ? similarMovies.map(item => (
                  <li className="similar-movie-item" key={item.id}>
                    <Link to={`/movies/${item.id}`}>
                      <img
                        src={item.poster_path}
                        alt={item.title}
                        className="similar-movie-poster"
                      />
                    </Link>
                  </li>
                ))
              : null}
          </ul>
        </div>

        <div className="follow-us">
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
        </div>
      </>
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

  minutesToHours = minutes => {
    const hours = Math.floor(minutes / 60)
    const minutesLeft = minutes - hours * 60
    const outTime = `${hours}h ${minutesLeft}m`
    return outTime
  }

  render() {
    const {apiStatus} = this.state

    const renderComponent = () => {
      switch (apiStatus) {
        case 'INPROGRESS':
          return (
            <div className="movieDetails-loader">
              <Header />
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
      <div className="movie-details-page" testid="movieItem">
        {apiStatus === 'FAILURE' ? <Header /> : null}
        {renderComponent()}
      </div>
    )
  }
}
