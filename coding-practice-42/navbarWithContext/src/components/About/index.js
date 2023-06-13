import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const AboutPageBgTheme = isDarkTheme
        ? 'about-page-bg-dark-theme'
        : 'about-page-bg-light-theme'

      const AboutPageImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const AboutPageTextColor = isDarkTheme
        ? 'about-page-bg-dark-text'
        : 'about-page-bg-light-text'

      return (
        <>
          <Navbar />
          <div className={`image-container ${AboutPageBgTheme}`}>
            <img src={AboutPageImage} alt="about" className="image" />
            <h1 className={`heading ${AboutPageTextColor}`}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
