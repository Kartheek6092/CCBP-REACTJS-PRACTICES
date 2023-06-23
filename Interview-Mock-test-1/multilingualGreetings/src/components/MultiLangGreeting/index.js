import {Component} from 'react'

import {
  GreetingsContainer,
  CustomImg,
  LangBtn,
  LangList,
  CustomList,
  Container,
} from './styledComponents'

class MultiLangGreeting extends Component {
  state = {selectedLangId: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0'}

  selectLang = event => {
    console.log(event.target.id)
    this.setState({selectedLangId: event.target.id})
  }

  render() {
    const {languageGreetingsList} = this.props
    const {selectedLangId} = this.state

    const selectedLanguage = languageGreetingsList.filter(
      item => selectedLangId === item.id,
    )

    const selectedLangItem = selectedLanguage[0]
    console.log(selectedLangItem)

    return (
      <Container>
        <GreetingsContainer>
          <h1>Multilingual Greetings</h1>
          <LangList>
            {languageGreetingsList.map(item => (
              <CustomList key={item.id}>
                <LangBtn
                  onClick={this.selectLang}
                  id={item.id}
                  type="button"
                  isSelected={selectedLangId === item.id}
                >
                  {item.buttonText}
                </LangBtn>
              </CustomList>
            ))}
          </LangList>
          <CustomImg
            src={selectedLangItem.imageUrl}
            alt={selectedLangItem.imageAltText}
          />
        </GreetingsContainer>
      </Container>
    )
  }
}

export default MultiLangGreeting
