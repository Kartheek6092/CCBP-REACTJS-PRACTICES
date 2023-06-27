import {Component} from 'react'
import {
  RegisterContainer,
  FormContainer,
  RegisterSubContainer,
  FormHeading,
  NameLabel,
  NameInput,
  TopicsLabel,
  SelectInput,
  CustomImage,
  ErrorMsg,
} from './styledComponents'
import Header from '../Header'
import {CustomButton} from '../Home/styledComponents'
import MeetContext from '../../Context/MeetContext'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  state = {name: '', topic: topicsList[0].displayText, hasError: false}

  onChangeName = event => {
    this.setState({
      name: event.target.value,
    })
  }

  onChangeTopic = event => {
    console.log(topicsList.filter(item => item.id === event.target.value))
    this.setState({
      topic: topicsList.filter(item => item.id === event.target.value)[0]
        .displayText,
    })
  }

  onFormSubmit = event => {
    event.preventDefault()
    const {name, topic} = this.state
    const {history} = this.props

    if (name !== '' && topic !== '') {
      history.replace('/')
    } else {
      this.setState({
        hasError: true,
      })
    }
  }

  render() {
    const {name, topic, hasError} = this.state
    return (
      <MeetContext.Consumer>
        {value => {
          const {updateDetails} = value
          const onClickSubmit = () => {
            if (name !== '' && topic !== '') {
              updateDetails(name, topic)
            }
          }
          return (
            <RegisterContainer>
              <Header />
              <RegisterSubContainer>
                <CustomImage
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png "
                  alt="website register"
                />
                <FormContainer onSubmit={this.onFormSubmit}>
                  <FormHeading>Let us join</FormHeading>
                  <NameLabel htmlFor="name">NAME</NameLabel>
                  <NameInput
                    id="name"
                    value={name}
                    onChange={this.onChangeName}
                  />
                  <br />
                  <TopicsLabel htmlFor="topics">TOPICS</TopicsLabel>
                  <SelectInput id="topics" onChange={this.onChangeTopic}>
                    {topicsList.map(each => (
                      <option key={each.id} value={each.id}>
                        {each.displayText}
                      </option>
                    ))}
                  </SelectInput>
                  <br />
                  <CustomButton type="submit" onClick={onClickSubmit}>
                    Register Now
                  </CustomButton>
                  {hasError && <ErrorMsg>Please enter your name</ErrorMsg>}
                </FormContainer>
              </RegisterSubContainer>
            </RegisterContainer>
          )
        }}
      </MeetContext.Consumer>
    )
  }
}

export default Register
