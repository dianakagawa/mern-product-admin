import React from "react";
import {Link} from "react-router-dom";

export default (props) => {
  return (
    <div>
      <h1>All Products</h1>
      {props.products.map((product, idx) => {
        return (
          <p key={idx}>
            <Link to={"/products/" + product._id}>{product.title}</Link>
          </p>
        );
      })}
    </div>
  );
};
