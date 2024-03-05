import { useState, useEffect } from "react";

export const BillingComponent = ({ cartItems, getTotalPrice }) => {
  const [tPrice, setTPrice] = useState(0);
  const [tMrp, setTMrp] = useState(0);

  useEffect(() => {
    const totalPrice = cartItems.reduce((accumulator, current) => {
      return accumulator + Number(current.price) * current.quantity;
    }, 0);
    const totalMrp = cartItems.reduce((accumulator, current) => {
      return accumulator + Number(current.mrp) * current.quantity;
    }, 0);
    setTPrice(totalPrice);
    setTMrp(totalMrp);
    getTotalPrice(totalPrice + 20);
  }, [cartItems, getTotalPrice]);
  return (
    <div>
      <p className="billing-details">{`PRICE DETAILS (${cartItems.length} Items)`}</p>
      <p>Total MRP ₹{tMrp}</p>
      <p>Discount on MRP ₹{tMrp - tPrice}</p>
      <p>Platform Fee ₹20</p>
      <p>Shipping Fee FREE</p>
      <p>{`Total Amount ${tPrice + 20}`}</p>
    </div>
  );
};
