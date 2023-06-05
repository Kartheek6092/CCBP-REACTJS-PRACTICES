import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <nav className="header-container">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          alt="website logo"
          className="header-logo"
        />
      </Link>

      <ul className="nav-items">
        <li>
          <Link className="link-component" to="/">
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link className="link-component" to="/jobs">
            <p>Jobs</p>
          </Link>
        </li>
        <li> </li>
      </ul>
      <button className="logout-btn" type="button" onClick={onClickLogout}>
        Logout
      </button>
    </nav>
  )
}

export default withRouter(Header)
