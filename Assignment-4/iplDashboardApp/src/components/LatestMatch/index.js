import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props
  const convertedData = {
    competingTeam: latestMatch.competing_team,
    competingTeamLogo: latestMatch.competing_team_logo,
    date: latestMatch.date,
    firstInnings: latestMatch.first_innings,
    id: latestMatch.id,
    manOfTheMatch: latestMatch.man_of_the_match,
    matchStatus: latestMatch.match_status,
    result: latestMatch.result,
    secondInnings: latestMatch.second_innings,
    umpires: latestMatch.umpires,
    venue: latestMatch.venue,
  }

  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = convertedData

  return (
    <div className="match-card">
      <div className="opponent-team-details">
        <p className="competing-team">{competingTeam}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <div className="team-logo">
        <img src={competingTeamLogo} alt={`latest match ${competingTeam}`} />
      </div>

      <div className="match-details">
        <p>First Innings</p>
        <p>{firstInnings}</p>
        <p>Second Innings</p>
        <p>{secondInnings}</p>
        <p>Man of The Match</p>
        <p>{manOfTheMatch}</p>
        <p>Umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
