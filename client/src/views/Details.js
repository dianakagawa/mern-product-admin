import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";
import "../components/components.css";

const Details = (props) => {
  const navigate = useNavigate();
  const {id} = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products/" + id)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const deleteProduct = (id) => {
    axios
      .delete("http://localhost:8000/api/products/" + id)
      .then((res) => {
        console.log(res);
        navigate("/products");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="Container">
      <div className="Form">
        <h1 className="Title">{product.title}</h1>
        <p className="Other">Price: ${product.price}</p>
        <p className="Other">Description: {product.description}</p>
      </div>
      <div className="Navigation">
        <Link className="Links" to={"/products/" + product._id + "/edit"}>
          Edit
        </Link>
        <button
          className="Btn"
          onClick={(e) => {
            deleteProduct(product._id);
          }}
        >
          Delete
        </button>
        <Link className="Links" to={"/products"}>
          Main
        </Link>
      </div>
    </div>
  );
};

export default Details;
