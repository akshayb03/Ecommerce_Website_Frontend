import "../styles/Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { CartItem } from "../components/CartItem";
import { EmptyHeight } from "../components/EmptyHeight";
import EmptyCart from "../assets/empty-cart.webp";
import { useNavigate } from "react-router-dom";
import { SafeAreaTop } from "../components/SafeAreaTop";
import { BillingComponent } from "../components/BillingComponent";
import { displayRazorpay } from "../components/utils";
import { Modal } from "../components/Modal";
import { emptyCart } from "../store/product";
import { createTransaction } from "../api";
const uuid = require("uuid");

export const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useSelector((state) => state.product.cartItems);
  const [houseNo, setHouseNo] = useState();
  const [street, setStreet] = useState();
  const [landmark, setLandmark] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [pincode, setPincode] = useState();

  const [totalPrice, setTotalPrice] = useState();

  const showSuccess = (data) => {
    createTransaction(data);
    navigate("/success");
    dispatch(emptyCart());
  };

  const placeOrder = () => {
    if (houseNo && street && landmark && city && state && pincode) {
      setIsOpen(false);
      displayRazorpay(totalPrice, showSuccess, cartItems);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const getTotalPrice = (price) => {
    setTotalPrice(price);
  };

  return (
    <div style={{ height: "100vh" }}>
      {!cartItems || cartItems.length === 0 ? (
        <EmptyState />
      ) : (
        <>
          <SafeAreaTop />
          <div className="cart-container">
            <EmptyHeight height={32} />
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div>
                {cartItems.map((item) => {
                  return <CartItem key={uuid.v4()} item={item} />;
                })}
              </div>
              <EmptyHeight width={100} />
              <div
                style={{ height: "60vh", width: 1, backgroundColor: "black" }}
              />
              <EmptyHeight width={100} />
              <div>
                <BillingComponent
                  cartItems={cartItems}
                  getTotalPrice={getTotalPrice}
                />
                <div
                  className="place-order-cta"
                  onClick={() => setIsOpen(true)}
                  onKeyDown={() => {}}
                >
                  <strong>{"Place Order"}</strong>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <Modal isOpen={isOpen} onClose={handleClose}>
        <div style={{ overflow: "scroll" }}>
          <strong>Delivery Information</strong>
          <EmptyHeight height={32} />
          <input
            className="modal-input"
            placeholder="House number / Apartment"
            onChange={(e) => setHouseNo(e.target.value)}
          />
          <EmptyHeight height={8} />
          <input
            className="modal-input"
            placeholder="Street Address"
            onChange={(e) => setStreet(e.target.value)}
          />
          <EmptyHeight height={8} />
          <input
            className="modal-input"
            placeholder="Landmark"
            onChange={(e) => setLandmark(e.target.value)}
          />
          <EmptyHeight height={8} />
          <input
            className="modal-input"
            placeholder="City"
            onChange={(e) => setCity(e.target.value)}
          />
          <EmptyHeight height={8} />
          <input
            className="modal-input"
            placeholder="State"
            onChange={(e) => setState(e.target.value)}
          />
          <EmptyHeight height={8} />
          <input
            className="modal-input"
            placeholder="Pincode"
            onChange={(e) => setPincode(e.target.value)}
          />
          <EmptyHeight height={32} />
          <button
            type="button"
            style={{ width: "40%", height: 46 }}
            onClick={placeOrder}
            onKeyDown={() => {}}
          >
            {"Pay now"}
          </button>
        </div>
      </Modal>
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
