import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PrimaryButton } from "./CommonStyled";

const EditUser = () => {
  // const [productImg, setProductImg] = useState("");
  let {state} = useLocation();
  const product = state["product"];
console.log(state);
  // let { state } = useLocation();
  // const product = state["product"];
async function handleSubmit(e) {
  e.preventDefault();
  let item = { name, description, quantity, price, delivery , discount};
  console.log(state.id);
  let result = await fetch(
    "https://gada-electronics.up.railway.app/products/edit/"+state.id,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    }
  );
  result = await result.json();
}


  // const navigate = useNavigate();
  const [name, setName] = useState(state.name);
  // const [image, setImg] = useState(state.image);
  const [price, setPrice] = useState(state.price);
  const [description, setDesc] = useState(state.description);
  const [quantity, setQty] = useState(state.quantity);
  const [discount, setDiscount] = useState(state.discount);
  const [delivery, setDelivery] = useState(state.delivery);
  const [id, setTd] = useState(state.id);

  // return (
    
  //   <StyledCreateProduct>
  //     <StyledForm>
  //       <h3>Edit a Product</h3>
  //       <input
  //         type="text"
  //         placeholder="Name"
  //         value={name}
  //         onChange={(e) => setName(e.target.value)}
  //         required
  //       />
  //       {/* <input
  //         type="text"
  //         value={image}
  //         placeholder="Image URL"
  //         onChange={(e) => setImg(e.target.value)}
  //         required
  //       /> */}
  //       <input
  //         type="number"
  //         value={discount}
  //         placeholder="Discount"
  //         onChange={(e) => setDiscount(e.target.value)}
  //         required
  //       />
  //       <input
  //         type="number"
  //         value={price}
  //         placeholder="Price"
  //         onChange={(e) => setPrice(e.target.value)}
  //         required
  //       />
  //       <input
  //         type="number"
  //         value={quantity}
  //         placeholder="Quantity"
  //         onChange={(e) => setQty(e.target.value)}
  //         required
  //       />
  //       <input
  //         type="number"
  //         value={delivery}
  //         placeholder="Delivery"
  //         onChange={(e) => setDelivery(e.target.value)}
  //         required
  //       />
  //       <input
  //         type="text"
  //         value={description}
  //         placeholder="Short Description"
  //         onChange={(e) => setDesc(e.target.value)}
  //         required
  //       />

  //       <PrimaryButton type="submit" onClick={handleSubmit}>
  //         Submit
  //       </PrimaryButton>
  //     </StyledForm>
  //     {/* <ImagePreview>
  //       {image ? (
  //         <>
  //           <img src={image} alt="error!" />
  //         </>
  //       ) : (
  //         <p>Product image upload preview will appear here!</p>
  //       )}
  //     </ImagePreview> */}
  //   </StyledCreateProduct>
  // );
};

export default EditUser;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin-top: 2rem;

  select,
  input {
    padding: 7px;
    min-height: 30px;
    outline: none;
    border-radius: 5px;
    border: 1px solid rgb(182, 182, 182);
    margin: 0.3rem 0;

    &:focus {
      border: 2px solid rgb(0, 208, 255);
    }
  }

  select {
    color: rgb(95, 95, 95);
  }
`;

const StyledCreateProduct = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ImagePreview = styled.div`
  margin: 2rem 0 2rem 2rem;
  padding: 2rem;
  border: 1px solid rgb(183, 183, 183);
  max-width: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: rgb(78, 78, 78);

  img {
    max-width: 100%;
  }
`;
