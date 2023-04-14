// Write your code here
import './index.css'

const DestinationCard = props => {
  const {item} = props
  const {imgUrl, name} = item

  return (
    <li className="destination-item">
      <img src={imgUrl} alt={name} className="destination-image" />
      <p className="name">{name}</p>
    </li>
  )
}

export default DestinationCard
