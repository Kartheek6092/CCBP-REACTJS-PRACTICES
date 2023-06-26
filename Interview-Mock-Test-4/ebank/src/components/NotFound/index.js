import {
  Notfoundcontainer,
  CustomHead,
  CustomImg,
  CustomPara,
} from './styledComponents'

const NotFound = () => (
  <Notfoundcontainer>
    <CustomImg
      src="https://assets.ccbp.in/frontend/react-js/ebank-not-found-img.png"
      alt="not found"
    />
    <CustomHead>Page Not Found</CustomHead>
    <CustomPara>
      We are sorry, the page you requested could not be found.
    </CustomPara>
  </Notfoundcontainer>
)

export default NotFound
