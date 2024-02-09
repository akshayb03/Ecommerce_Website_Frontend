import "../styles/CartItem.css";
import CrossIcon from "../assets/cross-icon.png";
import PlusIcon from "../assets/plus.png";
import MinusIcon from "../assets/minus.png";
import { EmptyHeight } from "./EmptyHeight";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../store/product";
import { PriceComponent } from "./PriceComponent";

export const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const onIncrement = () => {
    dispatch(incrementQuantity(item));
  };

  const onDecrement = () => {
    dispatch(decrementQuantity(item));
  };

  const removeCartItems = (item) => {
    dispatch(removeFromCart(item));
  };

  return (
    <div className="cart-item-container">
      <div className="first-container">
        <img
          src={item.img}
          width={120}
          height={120}
          alt="product"
          className="cart-img"
        />
        <EmptyHeight width={32} />
        <div className="cart-desc-container">
          <strong className="cart-seller-name">{item.seller}</strong>
          <span className="cart-item-name">{item.name}</span>
          <EmptyHeight height={4} />
          <PriceComponent
            style={{ fontSize: 14 }}
            mrp={item.mrp}
            discount={item.discount}
          />
          <EmptyHeight height={16} />
          <div className="quantity-setter">
            <img
              src={MinusIcon}
              width={14}
              height={14}
              alt="minus"
              onClick={onDecrement}
              onKeyDown={() => {}}
              className="minus-icon"
            />
            <span className="cart-quantity">{item.quantity}</span>
            <img
              src={PlusIcon}
              width={12}
              height={12}
              alt="plus"
              onClick={onIncrement}
              onKeyDown={() => {}}
              className="plus-icon"
            />
          </div>
        </div>
      </div>
      <div onClick={() => removeCartItems(item)} onKeyDown={() => {}}>
        <img
          src={CrossIcon}
          height={24}
          width={24}
          alt="close"
          className="cart-cross-icon"
        />
      </div>
    </div>
  );
};
