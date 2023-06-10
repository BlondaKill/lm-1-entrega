import './CartWidget.css'

const CartWidget = () => {
    const imgCarrito = "https://cdn-icons-png.flaticon.com/512/687/687259.png?w=360"
  return (
    <div>
        <img className = 'imgCarrito' src={imgCarrito} alt="carrito de compras" />
        
        
    </div>
  )
}

export default CartWidget