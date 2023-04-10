// Write your code here.

import './index.css'

const TechnologyCard = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  const clsName = ' card'
  return (
    <li className={className + clsName}>
      <div className="cardContent">
        <h1>{title}</h1>
        <p>{description}</p>
        <img src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default TechnologyCard
