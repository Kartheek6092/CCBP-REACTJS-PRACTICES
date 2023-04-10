// Write your code here.

import './index.css'

const BannerCard = props => {
  const {cardDetails} = props
  const {id, headerText, description, className} = cardDetails
  const clsName = ' card'
  return (
    <li className={className + clsName}>
      <div>
        <h1>{headerText}</h1>
        <p>{description}</p>
        <button className="button">Show More</button>
      </div>
    </li>
  )
}

export default BannerCard
