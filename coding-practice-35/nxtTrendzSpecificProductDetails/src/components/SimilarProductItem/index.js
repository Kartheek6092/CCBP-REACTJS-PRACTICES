import './index.css'

const SimilarProductItem = props => {
  const {item} = props
  const {imageUrl, title, price, brand, rating} = item
  console.log(item)
  return (
    <li className="similar-product-item">
      <img
        src={imageUrl}
        alt={`similar product ${title}`}
        className="similar-product-image"
      />
      <p className="title">{title}</p>
      <p id="brand">by {brand}</p>
      <div className="rating-price">
        {' '}
        <p id="price">Rs {price}/- </p>
        <p className="rating">
          {rating}
          <img
            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
            alt="star"
            className="star"
          />{' '}
        </p>
      </div>
    </li>
  )
}

export default SimilarProductItem
