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

// const Update = (props) => {
//   const navigate = useNavigate();
//   const {id} = useParams();
//   const [title, setTitle] = useState();
//   const [price, setPrice] = useState();
//   const [description, setDescription] = useState();

//   useEffect(() => {
//     axios
//       .get("http://localhost:8000/api/products/" + id)
//       .then((res) => {
//         setTitle(res.data.title);
//         setPrice(res.data.price);
//         setDescription(res.data.description);
//       })
//       .catch((err) => console.log(err));
//   }, [id]);

//   const onSubmitHandler = (e) => {
//     e.preventDefault();
//     axios
//       .put("http://localhost:8000/api/products/" + id, {
//         title,
//         price,
//         description,
//       })
//       .then((res) => navigate("/products/" + id))
//       .catch((err) => console.log(err));
//   };

//   return (
//     <div>
//       <form className="Form" onSubmit={onSubmitHandler}>
//         <h1>Update the product {title}</h1>
//         <div className="Input">
//           <label>Title</label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />
//         </div>
//         <div className="Input">
//           <label>Price</label>
//           <input
//             type="number"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//           />
//         </div>
//         <div className="Input">
//           <label>Description</label>
//           <input
//             type="text"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />
//         </div>
//         <input className="Btn bgr" type="submit" value="Update" />
//       </form>
//     </div>
//   );
// };

// export default Update;
