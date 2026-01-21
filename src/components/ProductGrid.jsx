import './ProductGrid.css'
import ProductCard from './ProductCard'
import { products as allProducts } from '../data/products'

function ProductGrid() {
  const products = allProducts.map(p => ({
    id: p.id,
    name: p.name,
    price: p.price,
    image: p.images[0]
  }))

  return (
    <div className="product-grid-container">
      <div className="sort-controls">
        <button className="sort-button">
          SORT BY: FEATURED
          <span className="sort-arrow">▼</span>
        </button>
      </div>

      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductGrid
