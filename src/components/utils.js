import axios from "axios";

export const CheckProductInWishlist = (wishlistItems, item) => {
  const productFound = wishlistItems.find(
    (wishlistItem) => wishlistItem.id === item.id
  );
  if (!productFound || productFound.length === 0) {
    return false;
  }
  return true;
};

export const CheckProductInCart = (cartItems, item) => {
  const productFound = cartItems.find((cartItem) => cartItem.id === item.id);
  if (!productFound || productFound.length === 0) {
    return false;
  }
  return true;
};

// export const loadScript = (src) => {
//   const script = document.createElement("script");
//   script.src = src;
//   script.async = true;

//   document.body.appendChild(script);
// };

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

export const displayRazorpay = async (totalPrice, showSuccess, cartItems) => {
  const date = Date.now();
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

  if (!res) {
    alert("Failed to load Razorpay SDK");
    return;
  }

  const result = await axios.post(
    `${process.env.REACT_APP_BASE_URL}:${process.env.REACT_APP_PORT}/payments/orders`,
    { amount: totalPrice * 100, receipt: `receipt_${date}` }
  );

  if (!result) {
    alert("Server issue");
    return;
  }

  const { amount, id: order_id, currency } = result.data;

  const options = {
    key: process.env.REACT_APP_RAZORPAY_KEY_ID,
    amount: amount.toString(),
    currency: currency,
    name: "Soumya Corp.",
    description: "Test Transaction",
    // image: { logo },
    order_id: order_id,
    handler: async (response) => {
      const data = {
        order_id: order_id,
        payment_id: response.razorpay_payment_id,
        razorpay_id: response.razorpay_order_id,
        // razorpaySignature: response.razorpay_signature,
        currency: currency,
        amount: amount / 100,
        products: cartItems,
      };

      showSuccess(data);

      // const result = await axios.post("http://localhost:5000/payment/success", data);
    },
    prefill: {
      name: "Soumya Dey",
      email: "SoumyaDey@example.com",
      contact: "9999999999",
    },
    notes: {
      address: "Soumya Dey Corporate Office",
    },
    theme: {
      color: "#61dafb",
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};
