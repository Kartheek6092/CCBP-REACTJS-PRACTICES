import {Link} from 'react-router-dom'
import Header from '../Header'
import {
  MeetupContainer,
  HomeContainer,
  HomeHeader,
  HomeDescription,
  CustomButton,
  HomeImage,
} from './styledComponents'
import MeetContext from '../../Context/MeetContext'

const Home = () => (
  <MeetContext.Consumer>
    {value => {
      const {names, topics} = value
      console.log(names, topics)
      const hasSubmitted = names !== '' && topics !== ''
      return (
        <MeetupContainer>
          <Header />
          {!hasSubmitted && (
            <HomeContainer>
              <HomeHeader>Welcome to Meetup</HomeHeader>
              <HomeDescription>Please register for the topic</HomeDescription>
              <Link to="/register">
                <CustomButton>Register</CustomButton>
              </Link>
              <HomeImage
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png "
                alt="meetup"
              />
            </HomeContainer>
          )}
          {hasSubmitted && (
            <HomeContainer>
              <HomeHeader>Hello {names}</HomeHeader>
              <HomeDescription>Welcome to {topics}</HomeDescription>
              <HomeImage
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
              />
            </HomeContainer>
          )}
        </MeetupContainer>
      )
    }}
  </MeetContext.Consumer>
)

export default Home
