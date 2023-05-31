import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovies = moviesList.filter(item => item.categoryId === 'ACTION')
  const comedyMovies = moviesList.filter(item => item.categoryId === 'COMEDY')

  return (
    <div className="prime-video-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="banner"
      />
      <div className="videos">
        <h1 className="category">Action Movies</h1>
        <MoviesSlider movies={actionMovies} />

        <h1 className="category">Comedy Movies</h1>
        <MoviesSlider movies={comedyMovies} />
      </div>
    </div>
  )
}

export default PrimeVideo
