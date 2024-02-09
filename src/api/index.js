import axios from "axios";

export const getProductList = async () => {
  const prod = await axios.get(
    `${process.env.REACT_APP_BASE_URL}:${process.env.REACT_APP_PORT}/api/products`
  );
  return prod;
};
