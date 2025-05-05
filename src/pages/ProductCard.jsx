import { useCart } from "../contexApi/CartContext";


const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <img src={product.image} width="100" />
      <h4>{product.name}</h4>
      <p>{`₹${product.price}`}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
