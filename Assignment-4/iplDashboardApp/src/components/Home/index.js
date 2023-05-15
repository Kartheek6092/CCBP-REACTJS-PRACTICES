import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamsList: [], isLoading: true}

  componentDidMount() {
    this.getTeamsData()
  }

  getTeamsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const {teams} = await response.json()

    const formattedData = teams.map(item => ({
      id: item.id,
      name: item.name,
      teamImageUrl: item.team_image_url,
    }))
    this.setState({teamsList: formattedData, isLoading: false})
    console.log(formattedData)
  }

  render() {
    const {teamsList, isLoading} = this.state

    return (
      <div className="ipl-home">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} />
          </div>
        ) : (
          <>
            <div className="header">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
              />
              <h1>IPL Dashboard</h1>
            </div>

            <ul className="teams-list">
              {teamsList.map(team => (
                <TeamCard team={team} key={team.id} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default Home
