import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import "./components.css";

const ProductsList = (props) => {
  const {products, removeFromDom} = props;

  const deleteProduct = (productId) => {
    axios
      .delete("http://localhost:8000/api/products/" + productId)
      .then((res) => {
        removeFromDom(productId);
      });
  };
  return (
    <div>
      {products.map((product, idx) => {
        return (
          <p key={idx}>
            <Link className="Links" to={"/products/" + product._id}>
              {product.title}
            </Link>
            <button
              className="Btn"
              onClick={(e) => {
                deleteProduct(product._id);
              }}
            >
              x
            </button>
          </p>
        );
      })}
    </div>
  );
};

export default ProductsList;
