import './index.css'

const AppointmentItem = props => {
  const {appointmentItem, onStarredItem} = props
  const {id, title, date, isStarred} = appointmentItem
  //   const newDate = new Date()

  const onChangeStar = () => {
    onStarredItem(id)
  }

  const starImg = !isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'

  return (
    <li className="appointment-item">
      <div className="title">
        <p>{title}</p>
        <button
          type="button"
          data-testid="star"
          className="star-btn"
          onClick={onChangeStar}
        >
          <img src={starImg} alt="star" />
        </button>
      </div>
      <p>Date:{date}</p>
    </li>
  )
}

export default AppointmentItem
