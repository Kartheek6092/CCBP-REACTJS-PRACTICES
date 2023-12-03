import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'

import {HiOutlineSearch} from 'react-icons/hi'

import RenderLoader from '../Loader'

import './index.css'

const ApiStatusConstants = {
  initial: 'INITIAL',
  inprogress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Search extends Component {
  state = {searchText: '', results: [], apiStatus: ApiStatusConstants.initial}

  onChangeSearchText = event => {
    this.setState({searchText: event.target.value})
  }

  searchMovies = async () => {
    this.setState({apiStatus: ApiStatusConstants.inprogress})
    const {searchText} = this.state
    const url = `https://apis.ccbp.in/movies-app/movies-search?search=${searchText}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.setState({
        results: data.results,
        apiStatus: ApiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: ApiStatusConstants.failure})
    }
  }

  onRetry = () => {
    this.setState({apiStatus: ApiStatusConstants.initial}, this.searchMovies)
  }

  renderSuccessView = () => {
    const {results} = this.state
    console.log(results)

    return (
      <>
        {results.length < 1 ? (
          this.renderNoResultView()
        ) : (
          <ul className="popular-movies-list">
            {results.map(item => (
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
        )}
      </>
    )
  }

  renderNoResultView = () => {
    const {searchText} = this.state

    return (
      <div className="no-results">
        <img
          src="https://res.cloudinary.com/dzjuhiwxw/image/upload/v1690306802/Netflix%20clone/Search/Group_7394_gpdswa.png"
          alt="no movies"
        />
        <p className="no-results-text">
          Your search for {searchText} did not find any matches.
        </p>
      </div>
    )
  }

  renderFailureView = () => (
    <div className="failure-container">
      <img
        src="https://res.cloudinary.com/dzjuhiwxw/image/upload/v1690287805/Netflix%20clone/Popular/Background-Complete_i2o6cl.png"
        alt="failure view"
      />
      <h1 className="api-failure-text">
        Something went wrong. Please try again
      </h1>
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
    const {apiStatus, searchText} = this.state

    const renderComponent = () => {
      switch (apiStatus) {
        case 'INPROGRESS':
          return (
            <div className="popular-loader" testid="loader">
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
      <div className="search-container">
        <nav className="search-header">
          <div className="logo-options">
            <Link to="/" className="logo-direct">
              <img
                className="logo"
                src="https://res.cloudinary.com/dzjuhiwxw/image/upload/v1689049123/Netflix%20clone/Login/Logo_trsrhe.png"
                alt="logo"
              />
            </Link>
            <ul className="navOptions">
              <li>
                <Link to="/" className="link-routes">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/popular" className="link-routes">
                  {' '}
                  Popular
                </Link>
              </li>
            </ul>
          </div>
          <div className="searchAndAvatar">
            <div className="search-div">
              <input
                type="search"
                className="search-input-el"
                value={searchText}
                onChange={this.onChangeSearchText}
              />
              <button
                type="button"
                testid="searchButton"
                className="searchBtn"
                onClick={this.searchMovies}
              >
                <Link to="/search">
                  <HiOutlineSearch />
                </Link>
              </button>
            </div>

            <button type="button" className="search-avatar">
              <Link to="/account">
                <img
                  src="https://res.cloudinary.com/dzjuhiwxw/image/upload/v1689059991/Netflix%20clone/Home/Avatar_e4l4j1.svg"
                  alt="avatar"
                />
              </Link>
            </button>
          </div>
        </nav>
        {renderComponent()}
      </div>
    )
  }
}

export default Search
