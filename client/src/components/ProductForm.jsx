import React, {useState} from "react";

const ProductForm = (props) => {
  const {initialTitle, initialPrice, initialDescription, onSubmitProp} = props;
  const [title, setTitle] = useState(initialTitle);
  const [price, setPrice] = useState(initialPrice);
  const [description, setDescription] = useState(initialDescription);

  const onSubmitHandler = (e) => {
    // e.preventDefault();
    onSubmitProp({title, price, description});
  };

  return (
    <div>
      <form className="Form" onSubmit={onSubmitHandler}>
        <h1>Product Manager</h1>
        <div className="Input">
          <label>Title</label>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div className="Input">
          <label>Price</label>
          <input
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>
        <div className="Input">
          <label>Description</label>
          <input
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>
        <input className="Btn bgr" type="submit" value="Add" />
      </form>
    </div>
  );
};

export default ProductForm;
