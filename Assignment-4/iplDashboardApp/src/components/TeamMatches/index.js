import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {teamMatches: [], isLoading: true, team: ''}

  componentDidMount() {
    this.getTeamMatchDetails()
  }

  getTeamMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const formattedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    this.setState({teamMatches: formattedData, isLoading: false, team: id})
  }

  render() {
    const {isLoading, teamMatches, team} = this.state
    const {teamBannerUrl} = teamMatches

    return (
      <div className={`${team}-matches ${'team-details'}`}>
        {isLoading ? (
          <div data-testid="loader" className={`${team}-matches  loader`}>
            <Loader type="Oval" color="#ffffff" height={50} />
          </div>
        ) : (
          <>
            <img src={teamBannerUrl} alt="team banner" className="team-logo" />
            <p>latest matches</p>
            <div>
              <LatestMatch latestMatch={teamMatches.latestMatchDetails} />
            </div>
            <ul>
              {teamMatches.recentMatches.map(item => (
                <MatchCard matchItem={item} key={item.id} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default TeamMatches
