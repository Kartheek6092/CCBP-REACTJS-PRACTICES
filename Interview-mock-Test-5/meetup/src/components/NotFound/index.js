import {
  NotfoundContainer,
  NotFoundHeader,
  NotFoundImage,
  NotFoundDescription,
} from './styledComponents'

const NotFound = () => (
  <NotfoundContainer>
    <NotFoundImage
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png "
      alt="not found"
    />
    <NotFoundHeader>Page Not Found</NotFoundHeader>
    <NotFoundDescription>
      We are sorry, the page you requested could not be found
    </NotFoundDescription>
  </NotfoundContainer>
)

export default NotFound
