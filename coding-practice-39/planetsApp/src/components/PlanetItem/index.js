import './index.css'

const PlanetItem = props => {
  const {planetItem} = props
  const {name, imageUrl, description} = planetItem

  return (
    <div className="planet-container">
      <img src={imageUrl} alt={`planet ${name}`} />
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  )
}

export default PlanetItem
