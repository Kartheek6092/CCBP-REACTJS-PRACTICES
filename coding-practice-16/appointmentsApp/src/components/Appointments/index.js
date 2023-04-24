import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {format} from 'date-fns'
import './index.css'
import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {appointmentsList: [], title: '', date: '', showStarred: true}

  onTitleInput = event => {
    this.setState({title: event.target.value})
  }

  onDateInput = event => {
    this.setState({date: event.target.value})
  }

  onAddAppointment = event => {
    event.preventDefault()
    const {title, date} = this.state
    const newAppointment = {
      id: uuidv4(),
      title,
      date: format(new Date(date), 'dd MMMM yyyy, EEEE'),
      isStarred: false,
    }
    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointment],
      title: '',
      date: '',
    }))
  }

  onStarredItem = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(item => {
        if (id === item.id) {
          return {...item, isStarred: !item.isStarred}
        }
        return item
      }),
    }))
  }

  onStarredAppointments = () => {
    const {appointmentsList} = this.state
    const filterStarred = appointmentsList.filter(
      item => item.isStarred === true,
    )
    this.setState(prevState => ({
      appointmentsList: filterStarred,
      showStarred: !prevState.showStarred,
    }))
  }

  onUnsetStarred = () => {
    this.setState(prevState => ({
      showStarred: !prevState.showStarred,
    }))
  }

  render() {
    const {appointmentsList, title, date, showStarred} = this.state

    return (
      <div className="container">
        <div className="appointment-container">
          <div className="create-appointment-container">
            <form className="appointment-form" onSubmit={this.onAddAppointment}>
              <h1>Add Appointment</h1>
              <label htmlFor="title">Title</label>
              <input
                value={title}
                type="text"
                id="title"
                onChange={this.onTitleInput}
              />
              <br />
              <label htmlFor="date">Date</label>
              <input
                type="date"
                value={date}
                id="date"
                onChange={this.onDateInput}
              />
              <br />
              <button type="submit" className="add-btn">
                Add
              </button>
            </form>
            <img
              className="appointment-image"
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
            />
          </div>
          <hr />
          <div className="appointments-list-container">
            <div className="appointments-top-bar">
              <h1>Appointments</h1>
              <button
                className="starred-btn"
                type="button"
                onClick={
                  showStarred ? this.onStarredAppointments : this.onUnsetStarred
                }
              >
                Starred
              </button>
            </div>
            <ul className="appointments-list">
              {appointmentsList.map(item => (
                <AppointmentItem
                  key={item.id}
                  appointmentItem={item}
                  onStarredItem={this.onStarredItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
