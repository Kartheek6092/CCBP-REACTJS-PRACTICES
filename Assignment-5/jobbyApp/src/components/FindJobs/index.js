import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {BsSearch} from 'react-icons/bs'

import Header from '../Header'
import JobItem from '../JobItem'

import './index.css'

const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

const urlStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class FindJobs extends Component {
  state = {
    employmentType: [],
    minimumPackage: '',
    searchText: '',
    userDetails: {},
    jobsList: [],
    apiStatus: urlStatusConstants[0],
    showRetrybtn: false,
    showNoJobs: false,
  }

  componentDidMount() {
    this.getJobsList()
    this.getProfileDetails()
  }

  searchTextChange = event => {
    this.setState({searchText: event.target.value})
  }

  onSearchJob = () => {
    const {searchText} = this.state
    // console.log(jobsList)
    this.setState({searchText}, this.getJobsList)
  }

  onEmplmntChange = event => {
    if (event.target.checked === true) {
      console.log(event.target.id)
      this.setState(
        prevState => ({
          employmentType: [event.target.id, ...prevState.employmentType],
        }),
        this.getJobsList,
      )
    }
  }

  onSelectSalaryRange = event => {
    console.log(event.target.id)
    this.setState({minimumPackage: event.target.id}, this.getJobsList)
  }

  onProfileRequestUrl = () => {
    this.setState({userDetails: {}}, this.getProfileDetails)
  }

  getProfileDetails = async () => {
    const url = 'https://apis.ccbp.in/profile'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
    const userData = await response.json()
    // console.log(userData)
    const userInfo = {
      name: userData.profile_details.name,
      profileImageUrl: userData.profile_details.profile_image_url,
      shortBio: userData.profile_details.short_bio,
    }
    if (response.ok === true) {
      this.setState({userDetails: userInfo})
    } else {
      this.setState({showRetrybtn: true})
    }
  }

  profileRetryBtn = () => (
    <div className="profile-retry-container">
      <button
        type="button"
        className="profile-retry-button"
        onClick={this.onProfileRequestUrl}
      >
        Retry
      </button>
    </div>
  )

  getJobsList = async () => {
    this.setState({apiStatus: urlStatusConstants.inProgress})
    const {minimumPackage, employmentType, searchText} = this.state
    const fetchJobsUlr = `https://apis.ccbp.in/jobs?employment_type=${employmentType}&minimum_package=${minimumPackage}&search=${searchText}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(fetchJobsUlr, options)
    const jobsList = await response.json()
    console.log(jobsList)
    if (response.ok === true) {
      this.setState({
        jobsList: jobsList.jobs,
        apiStatus: urlStatusConstants.success,
      })
    }
    if (response.ok === true && jobsList.total === 0) {
      this.setState({showNoJobs: true})
    }
  }

  renderJobs = () => {
    const {jobsList, searchText, showNoJobs} = this.state
    console.log(showNoJobs)

    return (
      <div className="jobs-container">
        <div className="search-container">
          <input
            type="search"
            className="search-bar"
            value={searchText}
            onChange={this.searchTextChange}
          />

          <button
            type="button"
            className="search-btn"
            data-testid="searchButton"
            onClick={this.onSearchJob}
          >
            <BsSearch className="search-icon" />
          </button>
        </div>

        {showNoJobs === false ? (
          <ul className="jobs-list">
            {jobsList.map(item => (
              <JobItem job={item} key={item.id} />
            ))}
          </ul>
        ) : (
          <div className="no-jobs">
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
              alt="no jobs"
            />
            <h1 className="noJobs-heading">No Jobs Found</h1>
            <p>We could not find any jobs. Try another filter</p>
          </div>
        )}
      </div>
    )
  }

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  render() {
    const {userDetails, apiStatus, showRetrybtn} = this.state
    // console.log(jobsList)

    return (
      <>
        <Header />
        <div className="find-jobs-container">
          <div className="profile-filter-section">
            {showRetrybtn ? (
              this.profileRetryBtn()
            ) : (
              <div className="profile">
                <img src={userDetails.profileImageUrl} alt="profile" />
                <h1 className="profile-name">{userDetails.name}</h1>
                <p className="role">{userDetails.shortBio}</p>
              </div>
            )}
            <br />
            <div>
              <hr />
            </div>

            <div className="types-of-employment-filter">
              <h1>Type of Employment</h1>
              <ul className="employment-types">
                {employmentTypesList.map(item => (
                  <li className="filter-option">
                    <input
                      type="checkbox"
                      id={item.employmentTypeId}
                      onChange={this.onEmplmntChange}
                    />{' '}
                    <label>{item.label}</label>{' '}
                  </li>
                ))}
              </ul>
            </div>
            <br />

            <div>
              <hr />
            </div>

            <div className="salary-range">
              <h1>Salary range</h1>
              <ul className="salary-filters">
                {salaryRangesList.map(item => (
                  <li className="filter-option">
                    <input
                      type="radio"
                      id={item.salaryRangeId}
                      name="salry-ranges"
                      onClick={this.onSelectSalaryRange}
                    />{' '}
                    <label htmlFor={item.salaryRangeId}>{item.label}</label>{' '}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {apiStatus === 'INPROGRESS' ? this.renderLoader() : this.renderJobs()}
        </div>
      </>
    )
  }
}

export default FindJobs
