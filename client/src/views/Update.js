import React, {useState, useEffect} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import DeleteButton from "../components/DeleteButton";
import ProductForm from "../components/ProductForm";

const Update = (props) => {
  const navigate = useNavigate();
  const {id} = useParams();
  const [product, setProduct] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products/" + id)
      .then((res) => {
        setProduct(res.data);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const updateProduct = (product) => {
    axios
      .put("http://localhost:8000/api/products/" + id, product)
      .then((res) => {
        navigate("/products/" + id);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Update a Product</h1>
      {loaded && (
        <>
          <ProductForm
            onSubmitProp={updateProduct}
            initialTitle={product.title}
            initialPrice={product.price}
            initialDescription={product.description}
          />
          <DeleteButton
            productId={product._id}
            successCallback={() => props.history.push("products")}
          />
        </>
      )}
    </div>
  );
};

export default Update;
