import {Component} from 'react'

import {
  Container,
  EditTextContainer,
  CustomInput,
  EditInputContainer,
  CustomBtn,
  CustomText,
} from './StyledComponents'

class EditableText extends Component {
  state = {saveText: false, text: ''}

  onToggleSave = () => {
    this.setState(prevState => ({saveText: !prevState.saveText}))
  }

  changeText = event => {
    this.setState({text: event.target.value})
  }

  render() {
    const {saveText, text} = this.state

    return (
      <Container>
        <EditTextContainer>
          <h1>Editable Text Input</h1>
          <EditInputContainer>
            {saveText ? (
              <>
                <CustomText>{text}</CustomText>
                <CustomBtn type="button" onClick={this.onToggleSave}>
                  Edit
                </CustomBtn>
              </>
            ) : (
              <>
                <CustomInput
                  type="text"
                  value={text}
                  onChange={this.changeText}
                />
                <CustomBtn type="button" onClick={this.onToggleSave}>
                  Save
                </CustomBtn>
              </>
            )}
          </EditInputContainer>
        </EditTextContainer>
      </Container>
    )
  }
}

export default EditableText
