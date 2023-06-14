import {Component} from 'react'

import {
  MainContainer,
  MemeReqForm,
  MainHeading,
  Label,
  Input,
  FontSize,
  GenerateButton,
  MemeText,
  GeneratedMemeContainer,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    generate: false,
    imgUrl: '',
    topText: '',
    bottomText: '',
    textSize: 8,
  }

  onGenerate = event => {
    event.preventDefault()
    this.setState({generate: true})
  }

  updateImgUrl = event => {
    this.setState({imgUrl: event.target.value})
  }

  updateTopText = event => {
    this.setState({topText: event.target.value})
  }

  updateBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  updateFontSize = event => {
    this.setState({textSize: event.target.value})
  }

  render() {
    const {generate, topText, bottomText, imgUrl, textSize} = this.state
    return (
      <MainContainer>
        <MemeReqForm onSubmit={this.onGenerate}>
          <MainHeading>Meme Generator</MainHeading>
          <div>
            <Label htmlFor="img-url">Image URL</Label>
            <br />
            <Input
              id="img-url"
              placeholder="ENTER IMAGE URL"
              onChange={this.updateImgUrl}
            />
          </div>
          <br />

          <div>
            <Label htmlFor="top-text">Top Text</Label>
            <br />
            <Input
              id="top-text"
              placeholder="ENTER TOP TEXT"
              onChange={this.updateTopText}
            />
          </div>
          <br />

          <div>
            <Label htmlFor="bottom-text">Bottom Text</Label>
            <br />
            <Input
              id="bottom-text"
              placeholder="ENTER BOTTOM TEXT"
              onChange={this.updateBottomText}
            />
          </div>
          <br />

          <Label htmlFor="font-size">Font Size</Label>
          <FontSize
            id="font-size"
            value={textSize}
            onChange={this.updateFontSize}
          >
            {fontSizesOptionsList.map(item => (
              <option key={item.optionId}>{item.displayText}</option>
            ))}
          </FontSize>

          <GenerateButton type="submit">Generate</GenerateButton>
        </MemeReqForm>

        <GeneratedMemeContainer bgImage={imgUrl} data-testid="meme">
          {generate ? (
            <>
              <MemeText fontValue={textSize}>{topText}</MemeText>
              <MemeText fontValue={textSize}>{bottomText}</MemeText>
            </>
          ) : null}
        </GeneratedMemeContainer>
      </MainContainer>
    )
  }
}

export default MemeGenerator
