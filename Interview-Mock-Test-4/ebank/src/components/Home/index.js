import {Redirect} from 'react-router-dom'
import Cookie from 'js-cookie'

import {
  HomeContainer,
  Logo,
  LogoutBtn,
  Header,
  MainHeading,
  DigitalCard,
} from './styledComponents'

const Home = props => {
  const onLogout = () => {
    const {history} = props
    Cookie.remove('jwt_token')
    history.replace('/ebank/login')
  }

  const jwtToken = Cookie.get('jwt_token')

  if (jwtToken === undefined) {
    return <Redirect to="/ebank/login" />
  }

  return (
    <HomeContainer>
      <Header>
        <Logo
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
          alt="website logo"
        />
        <LogoutBtn type="button" onClick={onLogout}>
          Logout
        </LogoutBtn>
      </Header>

      <MainHeading>Your Flexibility, Our Excellence</MainHeading>
      <DigitalCard
        src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
        alt="digital card"
      />
    </HomeContainer>
  )
}

export default Home
