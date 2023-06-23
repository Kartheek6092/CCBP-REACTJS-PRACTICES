import {Component} from 'react'
import {v4 as uuid} from 'uuid'

import {
  CharCounterContainer,
  TextInputContainer,
  Container,
  CustomHeader,
  UserInputList,
  TextInputHeading,
  InputItem,
  TextInput,
  AddBtn,
  InputContainer,
} from './styledComponents'

class CharCounter extends Component {
  state = {userInputList: [], userInput: ''}

  changeInput = event => {
    this.setState({userInput: event.target.value})
  }

  addText = event => {
    event.preventDefault()
    const {userInput} = this.state
    this.setState(prevState => ({
      userInputList:
        userInput !== ''
          ? [...prevState.userInputList, userInput]
          : prevState.userInputList,
      userInput: '',
    }))
  }

  render() {
    const {userInputList, userInput} = this.state

    const printId = () => userInputList.map(item => console.log(item.key))

    if (userInputList.length > 0) {
      printId()
    }

    return (
      <Container>
        <CharCounterContainer>
          <CustomHeader>Count the characters like a boss...</CustomHeader>
          {userInputList.length < 1 ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
            />
          ) : (
            <UserInputList>
              {' '}
              {userInputList.map(item => (
                <InputItem key={uuid()}>
                  {' '}
                  <p>
                    {' '}
                    {item} : {item.length}
                  </p>
                </InputItem>
              ))}
            </UserInputList>
          )}
        </CharCounterContainer>
        <TextInputContainer>
          <TextInputHeading>Character Counter</TextInputHeading>

          <InputContainer onSubmit={this.addText}>
            <TextInput
              type="text"
              placeholder="Enter the characters here"
              onChange={this.changeInput}
              value={userInput}
            />
            <AddBtn type="submit">Add</AddBtn>
          </InputContainer>
        </TextInputContainer>
      </Container>
    )
  }
}

export default CharCounter
