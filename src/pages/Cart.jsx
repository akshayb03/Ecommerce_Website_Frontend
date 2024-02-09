import "../styles/Cart.css";
import { useSelector } from "react-redux";
import { CartItem } from "../components/CartItem";
import { EmptyHeight } from "../components/EmptyHeight";
const uuid = require("uuid");

export const Cart = () => {
  const cartItems = useSelector((state) => state.product.cartItems);
  return (
    <div className="cart-container">
      <EmptyHeight height={32} />
      {cartItems.map((item) => {
        return <CartItem key={uuid.v4()} item={item} />;
      })}
    </div>
  );
};
