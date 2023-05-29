import {Component} from 'react'
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

class TimelineView extends Component {
  renderTimelineView = item => {
    if (item.categoryId === 'PROJECT') {
      return <ProjectTimelineCard key={item.id} item={item} />
    }
    return <CourseTimelineCard key={item.id} item={item} />
  }

  render() {
    const {timelineItemsList} = this.props
    // console.log(timelineItemsList)
    return (
      <div className="timeline-container">
        <h1 className="heading1">
          MY JOURNEY OF <br /> <span className="heading2">CCBP 4.0</span>
        </h1>

        <div className="chrono-container">
          <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
            {timelineItemsList.map(item => this.renderTimelineView(item))}
          </Chrono>
        </div>
      </div>
    )
  }
}

export default TimelineView
