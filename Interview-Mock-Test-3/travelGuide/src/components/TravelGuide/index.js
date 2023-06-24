import {Component} from 'react'
import Loader from 'react-loader-spinner'

import {
  GuideContainer,
  MainHeading,
  LoaderContainer,
  TravelList,
  CustomImg,
  TravelItem,
  CustomHeading,
  Description,
} from './styledComponents'

class Guide extends Component {
  state = {isLoading: false, packages: []}

  componentDidMount() {
    this.getTravelData()
  }

  apiSuccess = data => {
    this.setState({packages: data.packages, isLoading: false})
  }

  getTravelData = async () => {
    this.setState({isLoading: true})
    const apiUrl = `https://apis.ccbp.in/tg/packages`
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    console.log(data)

    if (response.ok === true) {
      this.apiSuccess(data)
    } else {
      this.apiFailure(data.err_msg)
    }
  }

  renderTravelList = () => {
    const {packages} = this.state

    return (
      <TravelList>
        {packages.map(item => (
          <TravelItem key={item.id}>
            <CustomImg src={item.image_url} alt={item.name} />
            <CustomHeading>{item.name}</CustomHeading>
            <Description>{item.description}</Description>
          </TravelItem>
        ))}
      </TravelList>
    )
  }

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </LoaderContainer>
  )

  render() {
    const {isLoading} = this.state

    return (
      <GuideContainer>
        <MainHeading>Travel Guide</MainHeading>
        {isLoading ? this.renderLoader() : this.renderTravelList()}
      </GuideContainer>
    )
  }
}

export default Guide
