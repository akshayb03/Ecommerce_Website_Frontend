import "../styles/Cart.css";
import { useSelector } from "react-redux";
import { CartItem } from "../components/CartItem";
import { EmptyHeight } from "../components/EmptyHeight";
import EmptyCart from "../assets/empty-cart.webp";
import { useNavigate } from "react-router-dom";
const uuid = require("uuid");

export const Cart = () => {
  const cartItems = useSelector((state) => state.product.cartItems);
  console.log("cartItems", cartItems);
  return (
    <div style={{ height: "100vh" }}>
      {!cartItems || cartItems.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="cart-container">
          <EmptyHeight height={32} />
          {cartItems.map((item) => {
            return <CartItem key={uuid.v4()} item={item} />;
          })}
        </div>
      )}
    </div>
  );
};

const EmptyState = () => {
  const navigate = useNavigate();
  return (
    <div className="empty-cart-container">
      <img src={EmptyCart} width={240} height={240} alt="empty cart" />
      <EmptyHeight height={16} />
      <strong>Hey, it feels so light</strong>
      <EmptyHeight height={4} />
      <span style={{ opacity: 0.4 }}>
        {"There is nothing in your bag, lets add some items"}
      </span>
      <EmptyHeight height={56} />
      <button
        type="button"
        className="product-cta"
        onClick={() => navigate("/wishlist")}
        onKeyDown={() => {}}
      >
        Go to wishlist
      </button>
    </div>
  );
};
