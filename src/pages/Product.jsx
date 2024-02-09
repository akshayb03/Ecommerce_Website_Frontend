import "../styles/Product.css";
import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { EmptyHeight } from "../components/EmptyHeight";
import { RatingComponent } from "../components/RatingComponent";
import { PriceComponent } from "../components/PriceComponent";
import { useDispatch, useSelector } from "react-redux";
import { saveToCart } from "../store/product";
import { saveToWishlist } from "../store/product";
import { useNavigate } from "react-router-dom";
import {
  CheckProductInCart,
  CheckProductInWishlist,
} from "../components/utils.js";

export const Product = () => {
  const dispatch = useDispatch();
  const width = window.screen.width;
  const location = useLocation();
  const navigate = useNavigate();
  const wishlistItems = useSelector((state) => state.product.wishlistItems);
  const cartItems = useSelector((state) => state.product.cartItems);
  const [presentInCart, setPresentInCart] = useState(false);
  const [presentInWishlist, setPresentInWishlist] = useState(false);
  const addToCart = useCallback(
    (item) => {
      dispatch(saveToCart(item));
    },
    [dispatch]
  );
  const addToWishlist = useCallback(
    (item) => {
      dispatch(saveToWishlist(item));
    },
    [dispatch]
  );

  useEffect(() => {
    const isPresentInWishlist = CheckProductInWishlist(
      wishlistItems,
      location.state.item
    );
    const isPresentInCart = CheckProductInCart(cartItems, location.state.item);
    if (isPresentInWishlist) {
      setPresentInWishlist(true);
    }
    if (isPresentInCart) {
      setPresentInCart(true);
    }
  }, [wishlistItems, location.state.item, cartItems]);

  return (
    <div className="product-container">
      <img
        height={width / 2 - 60}
        width={width / 2 - 60}
        src={location.state.item.img}
        alt="product"
      />
      <EmptyHeight width={24} />
      <div className="product-inner-container">
        <p className="seller-text">{location.state.item.seller}</p>
        <p className="product-name">{location.state.item.name}</p>
        <EmptyHeight height={16} />
        <RatingComponent
          rating={location.state.item.rating}
          ratingTotal={location.state.item.ratingTotal}
        />
        <EmptyHeight height={16} />
        <div className="separator" />
        <EmptyHeight height={16} />
        <PriceComponent
          mrp={location.state.item.mrp}
          discount={location.state.item.discount}
        />
        <p>Inclusive of all taxes</p>
        <EmptyHeight height={32} />
        <div className="cta-container">
          {!presentInCart ? (
            <button
              type="button"
              onClick={() => addToCart(location.state.item)}
              onKeyDown={() => {}}
              className="product-cta"
            >
              Add to cart
            </button>
          ) : (
            <button
              type="button"
              className="product-cta"
              onClick={() => navigate("/cart")}
              onKeyDown={() => {}}
            >
              Go to cart
            </button>
          )}
          <EmptyHeight width={32} />
          {!presentInWishlist ? (
            <button
              title="Add to wishlist"
              type="button"
              onClick={() => addToWishlist(location.state.item)}
              onKeyDown={() => {}}
              className="product-cta"
            >
              Add to wishlist
            </button>
          ) : (
            <button
              type="button"
              className="product-cta"
              onClick={() => navigate("/wishlist")}
              onKeyDown={() => {}}
            >
              Go to wishlist
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
