import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {team} = props
  const {id, name, teamImageUrl} = team

  return (
    <Link to={`/team-matches/${id}`} className="item-link">
      <li>
        <img src={teamImageUrl} alt={`${name}`} className="logo" />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
