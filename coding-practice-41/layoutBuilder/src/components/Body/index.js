import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar === true ? (
            <nav className="left-nav">
              <h1>Left Nav Menu</h1>
              <ul className="left-nav-items">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
              </ul>
            </nav>
          ) : null}

          {showContent === true ? (
            <div className="content">
              <h1>Content</h1>
              <p>
                Lorem ipsum dolar sit ujdf fioasf asiffu ui uiigdi
                iiuagoafvjkdjgdijfweoji uidhgsdui sduifgsdg uigguisvhghwegu ed
              </p>
            </div>
          ) : null}

          {showRightNavbar === true ? (
            <nav className="right-nav">
              <h1>Right Navbar Menu</h1>
              <ul className="right-nav-ads">
                <li className="ad">Ad 1</li>
                <li className="ad">Ad 2</li>
              </ul>
            </nav>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
