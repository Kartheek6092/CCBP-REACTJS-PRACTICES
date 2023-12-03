import {Component} from 'react'
import Slider from 'react-slick'
import {Link} from 'react-router-dom'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import RenderLoader from '../Loader'
import './index.css'

export default class TrendingMovies extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    }
    const {trending} = this.props

    return (
      <>
        {trending.length < 1 ? (
          <RenderLoader />
        ) : (
          <Slider {...settings} className="react-slider">
            {trending.map(item => (
              <div key={item.id} className="movie-item-container">
                <Link to={`/movies/${item.id}`}>
                  <img
                    src={item.poster_path}
                    alt={item.title}
                    className="video-poster"
                  />
                </Link>
              </div>
            ))}
          </Slider>
        )}
      </>
    )
  }
}
