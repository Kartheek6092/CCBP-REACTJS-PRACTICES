import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const onClickThemeIcon = () => {
        toggleTheme()
        console.log('Theme Triggered')
      }

      const BgTheme = isDarkTheme ? 'DarkTheme' : 'LightTheme'

      const websiteLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const navElements = isDarkTheme ? 'dark-theme-text' : 'light-theme-text'

      const btnEle = isDarkTheme ? 'dark-theme' : 'light-theme'

      const themeIcon = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      return (
        <div className={`nav-container ${BgTheme}`}>
          <img src={websiteLogo} alt="website logo" className="website-logo" />

          <ul className="nav-elements-container">
            <Link to="/" className={`nav-element ${navElements}`}>
              <li>Home</li>
            </Link>
            <Link to="/about" className={`nav-element ${navElements}`}>
              <li>About</li>
            </Link>
          </ul>

          <div>
            <button
              type="button"
              onClick={onClickThemeIcon}
              className={btnEle}
              data-testid="theme"
            >
              <img src={themeIcon} alt="theme" className="theme" />
            </button>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
