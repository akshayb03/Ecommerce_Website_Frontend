import "../styles/Wishlist.css";
import { useSelector } from "react-redux";
import { EmptyHeight } from "../components/EmptyHeight";
import { WishlistItem } from "../components/WishlistItem";
import { SafeAreaTop } from "../components/SafeAreaTop";
const uuid = require("uuid");

export const Wishlist = () => {
  const wishlistItems = useSelector((state) => state.product.wishlistItems);
  return (
    <>
      <SafeAreaTop />
      <strong style={{ marginLeft: 50 }}>My wishlist items</strong>
      <div className="wishlist-container">
        <EmptyHeight height={32} />
        {wishlistItems.map((item) => {
          return <WishlistItem key={uuid.v4()} item={item} />;
        })}
      </div>
    </>
  );
};
