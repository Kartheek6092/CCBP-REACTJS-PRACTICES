import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const homePageBgTheme = isDarkTheme
        ? 'home-page-bg-dark-theme'
        : 'home-page-bg-light-theme'

      const homePageImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      const homePageTextColor = isDarkTheme
        ? 'home-page-bg-dark-text'
        : 'home-page-bg-light-text'

      return (
        <div>
          <>
            <Navbar />
            <div className={`image-container ${homePageBgTheme}`}>
              <img src={homePageImage} alt="home" className="image" />
              <h1 className={`heading ${homePageTextColor}`}>Home</h1>
            </div>
          </>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
