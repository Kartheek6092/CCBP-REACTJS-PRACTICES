import {Link} from 'react-router-dom'
import {HiOutlineSearch} from 'react-icons/hi'

import './index.css'

const Header = () => (
  <nav className="nav-bar">
    <div className="logo-options">
      <Link to="/" className="logo-direct">
        <img
          className="logo"
          src="https://res.cloudinary.com/dzjuhiwxw/image/upload/v1689049123/Netflix%20clone/Login/Logo_trsrhe.png"
          alt="website logo"
        />
      </Link>
      <ul className="navOptions">
        <li>
          <Link to="/" className="link-routes">
            Home
          </Link>
        </li>
        <li>
          <Link to="/popular" className="link-routes">
            Popular
          </Link>
        </li>
      </ul>
    </div>
    <div className="search-avatar">
      <button testid="searchButton" type="button" className="search-btn">
        <Link to="/search">
          <HiOutlineSearch className="search-icon" />
        </Link>
      </button>

      <button type="button" className="avatar">
        <Link to="/account">
          <img
            src="https://res.cloudinary.com/dzjuhiwxw/image/upload/v1689059991/Netflix%20clone/Home/Avatar_e4l4j1.svg"
            alt="profile"
          />
        </Link>
      </button>
    </div>
  </nav>
)

export default Header
