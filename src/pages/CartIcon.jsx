
import { Link } from 'react-router-dom';
import { useCart } from '../contexApi/CartContext';


const CartIcon = () => {
  const { cartItems } = useCart();
  const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Link to="/cart">
      <div className="cart-icon">
        🛒 <span>{totalCount}</span>
      </div>
    </Link>
  );
};

export default CartIcon;
