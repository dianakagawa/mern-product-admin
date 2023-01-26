import React, {useEffect, useState} from "react";
import AddProduct from "../components/AddProduct";
import AllProducts from "../components/AllProducts";
import axios from "axios";

export default () => {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => {
        setProducts(res.data);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <AddProduct />
      <hr />
      {loaded && <AllProducts products={products} />}
    </div>
  );
};
