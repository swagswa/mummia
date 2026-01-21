import { useState } from 'react'
import { useParams } from 'react-router-dom'
import './ProductDetail.css'
import { products } from '../data/products'
import ProductGrid from '../components/ProductGrid'
import ImageCarousel from '../components/ImageCarousel'

function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === parseInt(id))
  const [selectedColor, setSelectedColor] = useState(0)
  const [selectedSize, setSelectedSize] = useState('XS')

  if (!product) {
    return <div className="product-not-found">Product not found</div>
  }

  return (
    <div className="product-detail">
      <div className="product-content">
        {/* Desktop: Vertical Gallery */}
        <div className="product-gallery desktop-gallery">
          {product.images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image} alt={`${product.name} ${index + 1}`} />
            </div>
          ))}
        </div>

        {/* Mobile/Tablet: Image Carousel */}
        <div className="mobile-carousel">
          <ImageCarousel images={product.images} productName={product.name} />
        </div>

        {/* Product Information */}
        <div className="product-info">
          <h1 className="product-title">{product.name}</h1>

          <p className="product-price">{product.price}</p>

          <div className="tax-info">
            Tax included. <span className="shipping-link">Shipping</span> calculated at checkout.
          </div>

          {/* Description */}
          <div className="product-description">
            {product.description.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>

          {/* Color Selection */}
          <div className="product-colors">
            <label className="selection-label">Color</label>
            <div className="color-swatches">
              {product.colors.map((color, index) => (
                <button
                  key={index}
                  className={`color-swatch ${selectedColor === index ? 'selected' : ''}`}
                  style={{ backgroundColor: color.value }}
                  onClick={() => setSelectedColor(index)}
                  title={color.name}
                >
                  {color.value === '#FFFFFF' && <div className="white-border"></div>}
                </button>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="product-sizes">
            <label className="selection-label">Size</label>
            <div className="size-buttons">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`size-button ${selectedSize === size ? 'selected' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart Button - Desktop */}
          <button className="add-to-cart-button desktop-cart-btn">ADD TO CART</button>
        </div>
      </div>

      {/* Mobile: Fixed Add to Cart Button */}
      <div className="mobile-cart-wrapper">
        <button className="add-to-cart-button mobile-cart-btn">ADD TO CART</button>
      </div>

      {/* Related Products */}
      <div className="related-products">
        <h2 className="related-title">YOU MAY ALSO LIKE</h2>
        <ProductGrid />
      </div>
    </div>
  )
}

export default ProductDetail
