import { useCart } from "../contexApi/CartContext";


const CartPage = () => {
  const { cartItems, updateQuantity } = useCart();
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} width="60" />
          <p>{item.name}</p>
          <p>₹{item.price} × {item.quantity}</p>
          <button onClick={() => updateQuantity(item.id, 'dec')}>-</button>
          <button onClick={() => updateQuantity(item.id, 'inc')}>+</button>
        </div>
      ))}
      <h3>Total: ₹{total}</h3>
    </div>
  );
};

export default CartPage;
