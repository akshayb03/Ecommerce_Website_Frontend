import "../styles/Home.css";
import { useEffect, useState } from "react";
import { ProductList } from "../components/ProductList";
import { EmptyHeight } from "../components/EmptyHeight";
import { getProductList } from "../api";
import { useSelector, useDispatch } from "react-redux";
import { saveProductList } from "../store/product";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const productL = useSelector((state) => state.product.productList);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const storedData = productL;
      if (storedData.length === 0) {
        const response = await getProductList();
        setProducts(response.data);
        dispatch(saveProductList(response.data));
      } else {
        setProducts(storedData);
      }
    };
    fetchData();
  }, [dispatch, productL]);

  return (
    <div className="home-container">
      <EmptyHeight height={60} />
      <ProductList products={products} />
    </div>
  );
};
