import './index.css'

const ThumbnailItem = props => {
  const {imageItem, onSelectedImage, isSelected} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageItem

  const onSelectedImg = () => onSelectedImage(id)

  return (
    <li>
      <button type="button" onClick={onSelectedImg}>
        <img
          className={isSelected === id ? '' : 'fadeImg'}
          src={thumbnailUrl}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
