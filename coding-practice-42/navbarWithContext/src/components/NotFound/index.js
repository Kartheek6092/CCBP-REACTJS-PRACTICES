import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <div>
          {isDarkTheme ? (
            <>
              <Navbar />
              <div className="image-container bg-dark">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                  alt="not found"
                  className="image"
                />
                <h1 className="heading light">Lost Your Way?</h1>
                <p className="para light">
                  we cannot seem to find the page you are looking for.
                </p>
              </div>
            </>
          ) : (
            <>
              <Navbar />
              <div className="image-container bg-light">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                  alt="not found"
                  className="image"
                />
                <h1 className="heading dark">Lost Your Way?</h1>
                <p className="para dark">
                  we cannot seem to find the page you are looking for.
                </p>
              </div>
            </>
          )}
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
