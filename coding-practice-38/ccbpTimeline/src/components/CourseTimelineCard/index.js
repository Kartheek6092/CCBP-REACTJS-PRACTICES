import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {item} = props
  const {courseTitle, description, duration, tagsList} = item
  console.log(tagsList)
  return (
    <>
      <div className="coursetimeline-container">
        <div className="course-title-container">
          <h1 className="title">{courseTitle}</h1>
          <div className="duration-container">
            <AiFillClockCircle />
            <p className="duration">{duration}</p>
          </div>
        </div>
        <p className="description">{description}</p>
        <ul className="taglist-container">
          {tagsList.map(each => (
            <li key={each.id} className="tag">
              <p className="taglist-text">{each.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default CourseTimelineCard
