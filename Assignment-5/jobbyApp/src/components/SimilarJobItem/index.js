import {AiTwotoneStar} from 'react-icons/ai'
import {MdLocationOn} from 'react-icons/md'
import {BsFillBriefcaseFill} from 'react-icons/bs'

import './index.css'

const SimilarJobItem = props => {
  const {similarJob} = props
  console.log(similarJob)
  const convertJobData = {
    companyLogoUrl: similarJob.company_logo_url,
    employmentType: similarJob.employment_type,
    jobDescription: similarJob.job_description,
    location: similarJob.location,
    rating: similarJob.rating,
    title: similarJob.title,
  }
  const {
    companyLogoUrl,
    employmentType,
    jobDescription,
    location,
    rating,
    title,
  } = convertJobData

  return (
    <li className="similar-job-item">
      <div className="company-logo-headers">
        <img src={companyLogoUrl} alt="similar job company logo" id="logo" />
        <div className="title-rating">
          <h1>{title}</h1>
          <p className="rating">
            <AiTwotoneStar className="star-icon" /> {rating}
          </p>
        </div>
      </div>
      <h1>Description</h1>
      <p className="description-text">{jobDescription}</p>
      <div className="key-aspects">
        <p>
          {' '}
          <MdLocationOn /> {location}
          {'     '} <BsFillBriefcaseFill /> {employmentType}{' '}
        </p>
      </div>
    </li>
  )
}

export default SimilarJobItem
