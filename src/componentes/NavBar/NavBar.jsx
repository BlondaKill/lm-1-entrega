import './NavBar.css'

import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <header>
        <h1>La Mala</h1>
        <h2>Stylists</h2>

        <nav>
            <ul>
                <li>Home</li>
                <li>Servicios</li>
                <li>Precios</li>
                <li>Tienda</li>
                
                
            </ul>
        </nav>
        <CartWidget/>
    </header>
  )
}

export default NavBar