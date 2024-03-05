import "../styles/ProductList.css";
import { forwardRef, useCallback, useEffect, useState } from "react";
import { VirtuosoGrid } from "react-virtuoso";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveToWishlist } from "../store/product";
import { PriceComponent } from "./PriceComponent";
import { CheckProductInWishlist } from "./utils.js";

const width = window.screen.width;
const height = window.screen.height;

export const ProductList = ({ products }) => {
  if (!products || products?.length === 0) {
    return <div>Loading...</div>;
  }
  const gridComponents = {
    List: forwardRef(({ style, children, ...props }, ref) => (
      <div
        ref={ref}
        {...props}
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          ...style,
        }}
      >
        {children}
      </div>
    )),
    Item: ({ children, ...props }) => (
      <div
        {...props}
        style={{
          width: (width - 160) / 3,
          marginBottom: 50,
          display: "flex",
          flex: "none",
          alignContent: "stretch",
          boxSizing: "border-box",
        }}
      >
        {children}
      </div>
    ),
  };

  const ItemWrapper = ({ item }) => {
    return (
      <div>
        <Product item={item} />
      </div>
    );
  };
  return (
    <>
      <VirtuosoGrid
        style={{ height: height - 172 }}
        totalCount={2000}
        components={gridComponents}
        itemContent={(index) => <ItemWrapper item={products[index]} />}
      />
    </>
  );
};

const Product = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.product.wishlistItems);
  const [present, setPresent] = useState(false);
  const addToWishlist = useCallback(
    (item) => {
      dispatch(saveToWishlist(item));
    },
    [dispatch]
  );
  const goToProductDetail = () => {
    navigate("/product", {
      state: { item: item },
    });
  };

  useEffect(() => {
    const isPresentInWishlist = CheckProductInWishlist(wishlistItems, item);
    if (isPresentInWishlist) {
      setPresent(true);
    } else {
      setPresent(false);
    }
  }, [wishlistItems, item]);
  return (
    <div>
      <img
        width={(width - 160) / 3}
        height={(width - 160) / 3}
        src={item.img}
        alt={item.name}
        className="product-grid-image"
        onClick={goToProductDetail}
        onKeyDown={() => {}}
      />
      <div className="product-list-desc-container">
        <div>
          <span>{item.name}</span>
          <PriceComponent
            mrp={item.mrp}
            discount={item.discount}
            price={item.price}
          />
        </div>
        <div>
          <div>
            {!present ? (
              <div
                className="wishlist-cta"
                onClick={() => addToWishlist(item)}
                onKeyDown={() => {}}
              >
                <strong>{"Add to Wishlist"}</strong>
              </div>
            ) : (
              <div
                className="wishlist-cta"
                onClick={() => {
                  navigate("/wishlist", { replace: true });
                }}
                onKeyDown={() => {}}
              >
                <strong>{"Go to Wishlist"}</strong>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
