import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {item} = props
  const {imageUrl, projectTitle, duration, description, projectUrl} = item
  //   console.log(item)

  return (
    <div className="project-card">
      <img src={imageUrl} alt="project" />
      <div className="project-header">
        <h1>{projectTitle}</h1>
        <div className="duration-container">
          <AiFillCalendar />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <a href={projectUrl} className="project-url-text">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
