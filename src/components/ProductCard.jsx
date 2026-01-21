import { Link } from 'react-router-dom'
import './ProductCard.css'

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="product-image-wrapper">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
          onError={(e) => {
            e.target.style.backgroundColor = '#f5f5f5'
            e.target.style.display = 'block'
          }}
        />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">
          {product.priceFrom ? `FROM ${product.priceFrom}` : product.price}
        </p>
      </div>
    </Link>
  )
}

export default ProductCard
