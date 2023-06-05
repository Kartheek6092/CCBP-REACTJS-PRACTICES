import './index.css'

const SkillItem = props => {
  const {skill} = props
  //   console.log(skill)

  return (
    <li className="skill">
      <img className="skill-logo" src={skill.image_url} alt={skill.name} />
      {skill.name}
    </li>
  )
}

export default SkillItem
