import {Link} from 'react-router-dom'
import {AiTwotoneStar} from 'react-icons/ai'
import {MdLocationOn} from 'react-icons/md'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import './index.css'
// import {descriptions} from 'jest-config'

const JobItem = props => {
  const {job} = props
  //   console.log(job)
  const convertJobDetails = {
    id: job.id,
    title: job.title,
    rating: job.rating,
    companyLogoUrl: job.company_logo_url,
    employmentType: job.employment_type,
    jobDescription: job.job_description,
    location: job.location,
    packagePerAnnum: job.package_per_annum,
  }
  const {
    id,
    title,
    rating,
    companyLogoUrl,
    employmentType,
    jobDescription,
    location,
    packagePerAnnum,
  } = convertJobDetails

  return (
    <Link to={`/jobs/${id}`} className="link-component">
      <li>
        <div className="company">
          <img
            src={companyLogoUrl}
            alt="company logo"
            className="company-logo"
          />
          <div>
            <h1 className="company-title">{title}</h1>
            <p className="rating">
              <AiTwotoneStar className="rating-icon" /> {rating}
            </p>
          </div>
        </div>
        <div className="job-key-aspects">
          <div className="locationAndJobType">
            <p>
              <MdLocationOn /> {location}
            </p>
            <p>
              <BsFillBriefcaseFill /> {employmentType}
            </p>
          </div>
          <p className="package">{packagePerAnnum}</p>
        </div>
        <div>
          <hr />
        </div>
        <h2>Description</h2>
        <p className="description">{jobDescription}</p>
      </li>
    </Link>
  )
}

export default JobItem
