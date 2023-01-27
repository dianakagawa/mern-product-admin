import React, {useState} from "react";
import axios from "axios";

const ProductForm = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  const onSubmitHandler = (e) => {
    // e.preventDefault();
    axios
      .post("http://localhost:8000/api/products", {
        title,
        price,
        description,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form className="Form" onSubmit={onSubmitHandler}>
        <h1>Product Manager</h1>
        <div className="Input">
          <label>Title</label>
          <input type="text" onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="Input">
          <label>Price</label>
          <input type="number" onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div className="Input">
          <label>Description</label>
          <input type="text" onChange={(e) => setDescription(e.target.value)} />
        </div>
        <input className="Btn bgr" type="submit" value="Add" />
      </form>
    </div>
  );
};

export default ProductForm;
