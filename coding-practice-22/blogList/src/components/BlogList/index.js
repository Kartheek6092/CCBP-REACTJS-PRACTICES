import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props

  return (
    <ul className="blogs-list">
      {blogsList.map(item => (
        <BlogItem item={item} key={item.id} />
      ))}
    </ul>
  )
}

export default BlogList
