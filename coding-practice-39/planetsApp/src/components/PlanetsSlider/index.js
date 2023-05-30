import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  console.log(planetsList)
  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div data-testid="planets" className="planets-slider">
      <h1>PLANETS</h1>
      <div className="slider-container">
        <Slider {...settings}>
          {planetsList.map(planetItem => (
            <PlanetItem planetItem={planetItem} key={planetItem.id} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PlanetsSlider
