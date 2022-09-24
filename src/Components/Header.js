import { Link } from 'react-router-dom'

// Styles
import './Header.scss'

export default function Header() {
  return (
    <header className='header'>
      <div className='brand'>
        <Link to="/">
          <img className='brand-logo' src="/img/logo.png" alt="logo" />
        </Link>
      </div>
      <div className='header-right'>
        <Link className='header-link cart' to="/">
          <img src="/img/cart.svg" alt="cart icon" />
          <div className='products-count'>(1)</div>
        </Link>
        <Link className='header-link' to="/register">Login</Link>
        <Link className='header-link' to="/register">Register</Link>
      </div>
    </header>
  )
}
