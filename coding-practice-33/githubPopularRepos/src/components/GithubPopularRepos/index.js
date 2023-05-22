import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    repositoriesData: [],
    activeLanguageFilterId: languageFiltersData[0].id,
  }

  componentDidMount() {
    this.getRepositories()
  }

  getRepositories = async () => {
    const {activeLanguageFilterId} = this.state
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const apiUrl = `https://apis.ccbp.in/popular-repos?language=${activeLanguageFilterId}`
    const response = await fetch(apiUrl)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.popular_repos.map(eachRepository => ({
        id: eachRepository.id,
        imageUrl: eachRepository.avatar_url,
        name: eachRepository.name,
        starsCount: eachRepository.stars_count,
        forksCount: eachRepository.forks_count,
        issuesCount: eachRepository.issues_count,
      }))
      this.setState({
        repositoriesData: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderLoadingView = () => (
    <div data-testid="loader">
      <Loader color="#0284c7" height={80} type="ThreeDots" width={80} />
    </div>
  )

  renderFailureView = () => (
    <div className="failure-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure-view-image"
      />
      <h1 className="error-message">Something Went Wrong</h1>
    </div>
  )

  renderRepositoriesListView = () => {
    const {repositoriesData} = this.state

    return (
      <ul className="repositories-list">
        {repositoriesData.map(eachRepository => (
          <RepositoryItem
            key={eachRepository.id}
            repositoryDetails={eachRepository}
          />
        ))}
      </ul>
    )
  }

  renderRepositories = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderRepositoriesListView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  setActiveLanguageFilterId = newFilterId => {
    this.setState({activeLanguageFilterId: newFilterId}, this.getRepositories)
  }

  renderLanguageFiltersList = () => {
    const {activeLanguageFilterId} = this.state

    return (
      <ul className="filters-list">
        {languageFiltersData.map(eachLanguageFilter => (
          <LanguageFilterItem
            key={eachLanguageFilter.id}
            isActive={eachLanguageFilter.id === activeLanguageFilterId}
            languageFilterDetails={eachLanguageFilter}
            setActiveLanguageFilterId={this.setActiveLanguageFilterId}
          />
        ))}
      </ul>
    )
  }

  render() {
    return (
      <div className="app-container">
        <div className="responsive-container">
          <h1 className="heading">Popular</h1>
          {this.renderLanguageFiltersList()}
          {this.renderRepositories()}
        </div>
      </div>
    )
  }
}

export default GithubPopularRepos
