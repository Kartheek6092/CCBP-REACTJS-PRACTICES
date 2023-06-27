import {Component} from 'react'
import Loader from 'react-loader-spinner'

import Header from '../Header'

import {
  ProjectListContainer,
  FilterSelectContainer,
  CategorySelect,
  ProjectsUlList,
  ListItem,
  ItemImg,
  FailureContainer,
  FailureImg,
  RetryBtn,
  ProjectName,
} from './styledComponents'

const apiUrlConstants = {
  initial: 'INITIAL',
  inprogress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const categoriesList = [
  {id: 'ALL', displayText: 'All'},
  {id: 'STATIC', displayText: 'Static'},
  {id: 'RESPONSIVE', displayText: 'Responsive'},
  {id: 'DYNAMIC', displayText: 'Dynamic'},
  {id: 'REACT', displayText: 'React'},
]

class ProjectsList extends Component {
  state = {
    projectsList: [],
    category: 'ALL',
    apiStatus: apiUrlConstants.initial,
  }

  componentDidMount() {
    this.getProjectsList()
  }

  getProjectsList = async () => {
    this.setState({apiStatus: apiUrlConstants.inprogress})
    const {category} = this.state
    const url = `https://apis.ccbp.in/ps/projects?category=${category.toUpperCase()}`
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.setState({
        projectsList: data.projects,
        apiStatus: apiUrlConstants.success,
      })
    } else {
      this.setState({apiStatus: apiUrlConstants.failure})
    }
  }

  changeCategory = event => {
    this.setState({category: event.target.value}, this.getProjectsList)
  }

  renderProjectsList = () => {
    const {projectsList, category} = this.state
    return (
      <>
        <Header />
        <ProjectListContainer>
          <FilterSelectContainer>
            <CategorySelect onChange={this.changeCategory} value={category}>
              {categoriesList.map(item => (
                <option key={item.id} value={item.id}>
                  {item.displayText}
                </option>
              ))}
            </CategorySelect>
          </FilterSelectContainer>
          <ProjectsUlList>
            {projectsList.map(item => (
              <ListItem key={item.id}>
                <ItemImg src={item.image_url} alt={item.name} />
                <ProjectName>{item.name}</ProjectName>
              </ListItem>
            ))}
          </ProjectsUlList>
        </ProjectListContainer>
      </>
    )
  }

  onRetry = () => {
    this.setState({apiStatus: apiUrlConstants.initial}, this.getProjectsList)
  }

  renderFailureView = () => {
    const {category} = this.state

    return (
      <>
        <Header />
        <ProjectListContainer>
          <FilterSelectContainer>
            <CategorySelect onChange={this.changeCategory} value={category}>
              {categoriesList.map(item => (
                <option key={item.id} value={item.id}>
                  {item.displayText}
                </option>
              ))}
            </CategorySelect>
          </FilterSelectContainer>

          <FailureContainer className="failure-container">
            <FailureImg
              src="https://assets.ccbp.in/frontend/react-js/projects-showcase/failure-img.png"
              alt="failure view"
            />
            <h1>Oops! Something Went Wrong</h1>
            <p>We cannot seem to find the page you are looking for.</p>
            <RetryBtn
              className="retry-btn"
              onClick={this.onRetry}
              type="button"
            >
              Retry
            </RetryBtn>
          </FailureContainer>
        </ProjectListContainer>
      </>
    )
  }

  renderLoader = () => {
    const {category} = this.state
    return (
      <>
        <Header />
        <ProjectListContainer>
          <FilterSelectContainer>
            <CategorySelect onChange={this.changeCategory} value={category}>
              {categoriesList.map(item => (
                <option key={item.id} value={item.id}>
                  {item.displayText}
                </option>
              ))}
            </CategorySelect>
          </FilterSelectContainer>
          <div data-testid="loader" className="loader">
            <Loader type="ThreeDots" color="#00BFFF" height={50} width={50} />
          </div>
        </ProjectListContainer>
      </>
    )
  }

  render() {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case 'INPROGRESS':
        return this.renderLoader()

      case 'SUCCESS':
        return this.renderProjectsList()

      case 'FAILURE':
        return this.renderFailureView()

      default:
        return null
    }
  }
}

export default ProjectsList
