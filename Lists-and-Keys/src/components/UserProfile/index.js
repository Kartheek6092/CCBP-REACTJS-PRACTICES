import './index.css'

const UserProfile = props => {
  const {userDetails} = props
  const {imageUrl, name, role} = userDetails
  return (
    <div className="user-card-container">
      <img src={imageUrl} className="avatar" alt="avatar" />
      <div className="user-details-container">
        <h1 className="user-name">{name}</h1>
        <p className="user-designation">{role}</p>
      </div>
    </div>
  )
}

export default UserProfile
