import {Link} from 'react-router-dom'
import {Component} from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import RenderLoader from '../Loader'
import './index.css'

export default class OriginalMovies extends Component {
  render() {
    // const CustomPrevArrow = props => (
    //   <div {...props}>
    //     <svg
    //       xmlns="https://res.cloudinary.com/dzjuhiwxw/image/upload/v1689835592/Netflix%20clone/Home/chevron_left_sx7yp1.svg"
    //       width="24"
    //       height="24"
    //       viewBox="0 0 24 24"
    //       fill="currentColor"
    //     >
    //       https://res.cloudinary.com/dzjuhiwxw/image/upload/v1689835592/Netflix%20clone/Home/chevron_left_sx7yp1.svg
    //     </svg>
    //   </div>
    // )

    // const CustomNextArrow = props => (
    //   <div {...props}>
    //     <svg
    //       xmlns="https://res.cloudinary.com/dzjuhiwxw/image/upload/v1689835592/Netflix%20clone/Home/chevron_right_wmszwz.svg"
    //       width="24"
    //       height="24"
    //       viewBox="0 0 24 24"
    //       fill="#fff"
    //     >
    //       https://res.cloudinary.com/dzjuhiwxw/image/upload/v1689835592/Netflix%20clone/Home/chevron_right_wmszwz.svg
    //     </svg>
    //   </div>
    // )

    const settings = {
      speed: 500,
      dots: false,
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 1,
    }
    const {originals} = this.props
    console.log(originals)

    return (
      <>
        {originals.length < 1 ? (
          <RenderLoader />
        ) : (
          <Slider {...settings} className="react-slider">
            {originals.map(item => (
              <div key={item.id}>
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
