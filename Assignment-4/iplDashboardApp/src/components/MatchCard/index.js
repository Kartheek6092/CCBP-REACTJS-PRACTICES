import './index.css'

const MatchCard = props => {
  const {matchItem} = props
  const convertedItem = {
    competingTeam: matchItem.competing_team,
    competingTeamLogo: matchItem.competing_team_logo,
    date: matchItem.date,
    firstInnings: matchItem.first_innings,
    id: matchItem.id,
    manOfTheMatch: matchItem.man_of_the_match,
    matchStatus: matchItem.match_status,
    result: matchItem.result,
    secondInnings: matchItem.second_innings,
    umpires: matchItem.umpires,
    venue: matchItem.venue,
  }

  const {competingTeam, competingTeamLogo, matchStatus, result} = convertedItem

  return (
    <li className="match-container">
      <img src={competingTeamLogo} alt={`competing team ${competingTeam}`} />
      <p className="competing-team">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={matchStatus === 'Won' ? 'won-status' : 'lost-status'}>
        {matchStatus}
      </p>
    </li>
  )
}

export default MatchCard
