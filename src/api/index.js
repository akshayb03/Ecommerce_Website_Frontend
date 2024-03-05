import axios from "axios";

export const getProductList = async () => {
  const prod = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/api/products`
  );
  return prod;
};

export const createUser = async (data) => {
  try {
    const createdUser = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/api/add-user`,
      data
    );
    return createdUser;
  } catch (error) {
    return;
  }
};

export const userLogin = async (email, password) => {
  try {
    const result = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/api/login`,
      { email: email, password: password }
    );
    return result;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

export const checkAuthorisation = async () => {
  try {
    const result = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/api/is-auth`,
      {},
      { headers: { "x-access-token": sessionStorage.getItem("authToken") } }
    );
    return result;
  } catch (error) {
    return { auth: false };
  }
};

export const createTransaction = async (data) => {
  try {
    const result = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/payments/transactions`,
      data
    );
    return result;
  } catch (error) {}
};
