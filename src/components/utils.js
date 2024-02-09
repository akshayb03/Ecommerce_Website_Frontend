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
