
import './ProductCard.scss'

export default function ProductCard({ id, name, shortDescription, price, image }) {
  const link = '/detail/' + id

  return (
    <div className='card' >
      <div className='card-top' >
        <a href={link}>
          <img className='card-image' src={image} alt="shoes" />
        </a>
        <h4 className='product-name'>{name}</h4>
        <p className='product-description'>{shortDescription}</p>
      </div>
      <div className='card-bottom'>
        <button className='btn-product'>Buy now</button>
        <p className='price'>{price}</p>
      </div>
    </div>
  )
}
