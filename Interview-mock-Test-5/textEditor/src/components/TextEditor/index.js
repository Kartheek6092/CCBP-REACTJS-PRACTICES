import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {TextArea, Button} from './styledComponents'

import './index.css'

class TextEditor extends Component {
  state = {isBold: false, isItalic: false, underline: false, inputText: ''}

  toggleBold = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }

  toggleItalic = () => {
    this.setState(prevState => ({isItalic: !prevState.isItalic}))
  }

  toggleUnderline = () => {
    this.setState(prevState => ({underline: !prevState.underline}))
  }

  render() {
    const {isBold, isItalic, underline, inputText} = this.state

    return (
      <div className="container">
        <div className="editor-container">
          <div className="head-img">
            <h1>Text Editor</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </div>
          <div className="editor">
            <div className="edit-tools-container">
              <ul className="tools-list">
                <li className="tool-item">
                  <Button
                    applied={isBold}
                    data-testid="bold"
                    onClick={this.toggleBold}
                  >
                    <VscBold size={25} />
                  </Button>
                </li>

                <li className="tool-item">
                  <Button
                    applied={isItalic}
                    data-testid="italic"
                    onClick={this.toggleItalic}
                  >
                    <GoItalic size={25} />
                  </Button>
                </li>

                <li className="tool-item">
                  <Button
                    applied={underline}
                    data-testid="underline"
                    onClick={this.toggleUnderline}
                  >
                    <AiOutlineUnderline size={25} />
                  </Button>
                </li>
              </ul>
            </div>
            <TextArea isBold={isBold} isItalic={isItalic} underline={underline}>
              {inputText}
            </TextArea>
          </div>
        </div>
      </div>
    )
  }
}

export default TextEditor
