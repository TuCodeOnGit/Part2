import { Link } from 'react-router-dom'

// Styles
import './Menu.scss'

export default function Menu() {
  return (
    <nav className='menu'>
      <Link className='menu-item active' to='/'>Home</Link>
      <Link className='menu-item light' to='/'>Man</Link>
      <Link className='menu-item light' to='/'>Woman</Link>
      <Link className='menu-item' to='/'>Kid</Link>
      <Link className='menu-item' to='/'>Sport</Link>
    </nav>
  )
}
