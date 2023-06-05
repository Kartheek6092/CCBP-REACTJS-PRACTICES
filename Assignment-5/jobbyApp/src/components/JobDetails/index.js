import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiTwotoneStar} from 'react-icons/ai'
import {MdLocationOn, MdOpenInNew} from 'react-icons/md'
import {BsFillBriefcaseFill} from 'react-icons/bs'

import Header from '../Header'
import SimilarJobItem from '../SimilarJobItem'
import SkillItem from '../SkillItem'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class JobDetails extends Component {
  state = {
    jobDetails: {},
    similarJobs: [],
    apiStatus: apiStatusConstants.inProgress,
  }

  componentDidMount() {
    this.getJobDetails()
  }

  onRetry = () => {
    // console.log('retry btn triggered')
    this.setState(
      {apiStatus: apiStatusConstants.inProgress},
      this.getJobDetails,
    )
  }

  getJobDetails = async () => {
    // console.log('job details api requested')
    const {match} = this.props
    const {params} = match
    const {id} = params

    this.setState({apiStatus: apiStatusConstants.inProgress})

    const apiUrl = `https://apis.ccbp.in/jobs/${id}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    // console.log(Array(data.job_details.skills))
    const jobDetails = {
      jobDetails: {
        companyLogoUrl: data.job_details.company_logo_url,
        companyWebsiteUrl: data.job_details.company_website_url,
        employmentType: data.job_details.employment_type,
        id: data.job_details.id,
        jobDescription: data.job_details.job_description,
        lifeAtCompany: data.job_details.life_at_company,
        location: data.job_details.location,
        packagePerAnnum: data.job_details.package_per_annum,
        rating: data.job_details.rating,
        skills: [...data.job_details.skills],
        title: data.job_details.title,
      },
      similarJobs: data.similar_jobs,
    }
    if (response.ok === true) {
      this.setState({
        apiStatus: apiStatusConstants.success,
        jobDetails: jobDetails.jobDetails,
        similarJobs: jobDetails.similarJobs,
      })
    } else {
      this.setSate({apiStatus: apiStatusConstants.failure})
    }
  }

  renderJobDetails = () => {
    const {jobDetails} = this.state
    const {
      companyLogoUrl,
      companyWebsiteUrl,
      employmentType,
      jobDescription,
      location,
      packagePerAnnum,
      rating,
      skills,
      title,
      lifeAtCompany,
    } = jobDetails
    // console.log(lifeAtCompany)

    return (
      <>
        <div className="job-details-container">
          <div className="company-logo-headers">
            <img
              src={companyLogoUrl}
              alt="job details company logo"
              className="logo"
            />
            <div className="title-rating">
              <h1 className="company-title">{title}</h1>
              <p className="rating">
                <AiTwotoneStar className="star-icon" /> {rating}
              </p>
            </div>
          </div>

          <div className="key-aspects">
            <div className="location-employment-type">
              <p>
                <MdLocationOn className="location-icon" /> {location}{' '}
              </p>
              <p>
                <BsFillBriefcaseFill className="briefcase-icon" />{' '}
                {employmentType}{' '}
              </p>
            </div>
            <p className="package">{packagePerAnnum}</p>
          </div>

          <div>
            <hr />
          </div>

          <div className="description-section">
            <div className="description">
              <h1>Description</h1>
              <a href={companyWebsiteUrl} className="visit-page">
                Visit
                <MdOpenInNew />{' '}
              </a>
            </div>
            <p className="description-content">{jobDescription}</p>
          </div>

          <div className="req-skills">
            <h1>Skills</h1>
            <ul className="skills-list">
              {skills !== undefined
                ? skills.map(skill => (
                    <SkillItem key={skill.id} skill={skill} />
                  ))
                : null}
            </ul>
          </div>

          <div className="life-at-company">
            <h1>Life at Company</h1>
            <div className="company-life-description">
              {lifeAtCompany !== undefined ? (
                <>
                  <p className="description-content">
                    {lifeAtCompany.description}
                  </p>
                  <img
                    className="lifeatcompany-img"
                    src={lifeAtCompany.image_url}
                    alt="life at company"
                  />
                </>
              ) : null}
            </div>
          </div>
        </div>
      </>
    )
  }

  renderSimilarJobs = () => {
    const {similarJobs} = this.state
    // console.log(similarJobs)

    return (
      <div className="similarJobs-container">
        <h1>Similar Jobs</h1>
        <ul className="similarJobs-list">
          {similarJobs !== undefined
            ? similarJobs.map(item => (
                <SimilarJobItem key={item.id} similarJob={item} />
              ))
            : null}
        </ul>
      </div>
    )
  }

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderFailureView = () => (
    <div className="failure-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        alt="failure view"
      />
      <h1 className="failure-heading">Oops! Something Went Wrong</h1>
      <p className="failure-context">
        We cannot seem to find the page you are looking for
      </p>
      <button className="failure-btn" type="button" onClick={this.onRetry}>
        Retry
      </button>
    </div>
  )

  render() {
    const {apiStatus} = this.state
    // console.log(apiStatus)

    const renderComponent = () => {
      if (apiStatus === 'INPROGRESS') {
        return this.renderLoader()
      }
      if (apiStatus === 'SUCCESS') {
        return (
          <>
            {this.renderJobDetails()} {this.renderSimilarJobs()}
          </>
        )
      }
      return null
    }

    return (
      <>
        <Header />
        <div className="jd-bg-container">
          {renderComponent()}
          {/* {this.renderFailureView()} */}
        </div>
      </>
    )
  }
}

export default JobDetails
