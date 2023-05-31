import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {movies} = props
  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
  }
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {movies.map(movieItem => (
          <MovieItem key={movieItem.id} movie={movieItem} />
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
