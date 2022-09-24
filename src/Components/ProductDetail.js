import { useEffect, useState } from 'react'

// styles
import './ProductDetail.scss'

export default function ProductDetail({ shoes }) {
  const [counter, setCounter] = useState(1)

  return (
    <div className='product-detail'>
      <div className='product-detail-left'>
        <div className='detail-image'>
          <img src={shoes.image} alt="shoes" />
        </div>
      </div>
      <div className='product-detail-right'>
        <h4 className='detail-name'>{shoes.name}</h4>
        <p className='detail-description'>
          {shoes.description}
        </p>
        <h6 className='detail-availability'>Available size</h6>
        <div className='detail-sizes'>
          {shoes.size && shoes.size.map(size => (
            <div key={size} className='size-box'>{size}</div>
          ))}
        </div>
        <h6 className='detail-price'>{shoes.price}$</h6>
        <div className='amount'>
          <button
            className='btn-increment'
            onClick={() => { setCounter(prevCounter => prevCounter + 1) }}
          >+</button>
          <p className='amount-count'>{counter}</p>
          <button
            className='btn-decrement'
            onClick={counter > 1 ? () => { setCounter(prevCounter => prevCounter - 1) } : null}
          >-</button>
        </div>
        <button className='btn-add'>Add to cart</button>
      </div>
    </div>
  )
}
