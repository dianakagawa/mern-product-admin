import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import "./components.css";
import DeleteButton from "./DeleteButton";

const ProductsList = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const removeFromDom = (productId) => {
    setProducts(products.filter((product) => product._id !== productId));
  };

  return (
    <div>
      {products.map((product, idx) => {
        return (
          <p key={idx}>
            <Link className="Links" to={"/products/" + product._id}>
              {product.title}
            </Link>
            <DeleteButton
              productId={product._id}
              successCallback={() => removeFromDom(product._id)}
            />
          </p>
        );
      })}
    </div>
  );
};

export default ProductsList;
