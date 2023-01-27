import React, {useState, useEffect} from "react";
import axios from "axios";
import ProductForm from "../components/ProductForm";
import ProductsList from "../components/ProductsList";

const Main = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  const removeFromDom = (productId) => {
    setProducts(products.filter((product) => product._id !== productId));
  };

  return (
    <div>
      <ProductForm />
      <hr />
      <ProductsList products={products} removeFromDom={removeFromDom} />
    </div>
  );
};

export default Main;
