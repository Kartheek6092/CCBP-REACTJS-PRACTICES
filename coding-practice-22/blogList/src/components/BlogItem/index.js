import './index.css'

const BlogItem = props => {
  const {item} = props
  const {title, description, publishedDate} = item

  return (
    <li>
      <div className="title-date">
        <h1 className="title">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
    </li>
  )
}

export default BlogItem
