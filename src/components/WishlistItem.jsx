import CrossIcon from "../assets/cross-icon.png";
import "../styles/WishlistItem.css";
import { EmptyHeight } from "./EmptyHeight";
import { PriceComponent } from "./PriceComponent";
import { useDispatch } from "react-redux";
import { saveToCart } from "../store/product";
import { removeFromWishlist } from "../store/product";
import { useNavigate } from "react-router-dom";

export const WishlistItem = ({ item }) => {
  const width = window.screen.width;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const moveToCart = (item) => {
    dispatch(saveToCart(item));
    dispatch(removeFromWishlist(item));
  };
  return (
    <div className="item-container">
      <div
        onClick={() => navigate("/product", { state: { item: item } })}
        onKeyDown={() => {}}
      >
        <img
          src={item.img}
          width={width / 4 - 60}
          height={width / 4 - 60}
          alt="product"
        />
        <img
          className="close-icon"
          src={CrossIcon}
          height={24}
          width={24}
          alt="close"
        />
        <div className="desc" style={{ width: "80%" }}>
          <span className="item-name">{item.name}</span>
          <EmptyHeight height={6} />
          <PriceComponent
            style={{ fontSize: 14 }}
            mrp={item.mrp}
            discount={item.discount}
          />
          <EmptyHeight height={16} />
        </div>
      </div>
      <div
        className="cta"
        onClick={() => moveToCart(item)}
        onKeyDown={() => {}}
      >
        <span className="cta-text">{"Move to Cart"}</span>
      </div>
    </div>
  );
};
