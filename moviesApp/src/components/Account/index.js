// import {Redirect} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import Cookies from 'js-cookie'

import {FaGoogle, FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa'

import Header from '../Header'
import './index.css'

const Account = () => {
  const history = useHistory()

  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <div className="account-container">
      <Header />
      <div className="account-details">
        <h1>Account</h1>

        <div style={{width: '100%'}}>
          <hr />
        </div>

        <div className="membership-details">
          <p style={{color: '#9fb9c9', fontSize: '20px', fontWeight: '600'}}>
            Member Ship{' '}
          </p>
          <div className="name-password">
            <p>{}</p>
            <p>Password: **********</p>
          </div>
        </div>

        <div style={{width: '100%'}}>
          <hr />
        </div>

        <div className="plan">
          <p style={{color: '#9fb9c9', fontSize: '20px', fontWeight: '600'}}>
            Plan Details:{' '}
          </p>
          <p style={{paddingLeft: '5%', width: 'fit-content'}}>Premium</p>
          <p className="premium-type">Ultra HD</p>
        </div>

        <div style={{width: '100%'}}>
          <hr />
        </div>

        <button type="button" className="logout-btn" onClick={onClickLogout}>
          Logout
        </button>
      </div>

      <div className="follow-us">
        <ul className="social-media-list">
          <li>
            <FaGoogle />
          </li>
          <li>
            <FaTwitter />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaYoutube />
          </li>
        </ul>
        <p>Contact Us</p>
      </div>
    </div>
  )
}

export default Account
