import styled from "styled-components";
import { DataGrid } from '@mui/x-data-grid';
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
// import EditProduct from "../EditProduct";


export default function ProductsList() {

const [product, setProduct] = useState();

useEffect(() => {
  const getProducts = async () => {
    await axios.get('https://gada-electronics.up.railway.app/products/all')
      .then((res) => { setProduct(res?.data); })
      .then((res) => console.log(res?.data))
  }
  getProducts();
}, [])

// const rows = [
//   { id: 1, pDesc: product[1].name, price: 35 },
//   { id: 2, pDesc: product[2].name, price: 42 },
//   { id: 3, pDesc: product[3].name, price: 45 },
//   { id: 4, pDesc: product[4].name, price: 16 },
//   { id: 5, pDesc: 'Targaryen Daenerys', price: 50 },
//   { id: 6, pDesc: 'Melisandre', price: 150 },
//   { id: 7, pDesc: 'Clifford Ferrara', price: 44 },
//   { id: 8, pDesc: 'Frances Rossini', price: 36 },
//   { id: 9, pDesc: 'Roxie Harvey', price: 65 },
// ];

  // const rows=product?.map(item=>{
  //   return{
  //     id: item.id,
  //     imageUrl:item.image,
  //     pName:item.name,
  //     pDesc:item.desc,
  //     price: item.price.toLocaleString()
  //   };
  // });

//   const columns = [
//   { field: 'id', headerName: 'ID', width: 220 },
//   { field: 'imageUrl', headerName: 'Image', width: 80,
// renderCell:(params)=>{
//   return(
//   <ImageContainer>
//     <img src={params.row.imageUrl} alt=""/>
//   </ImageContainer>
// ) 
// }
// },
//   { field: 'pName', headerName: 'Name', width: 130 },
//   {
//     field: 'pDesc',
//     headerName: 'Description',
//     width: 130,
//   },
//   {
//   field: 'price',
//   headerName: 'Price',
//   width: 80,
// },
//   {
//       field: 'actions',
//       headerName: 'Actions',
//       sortable: false,
//       width: 170,
//       renderCell:(params)=>{
//           return(
//             <Actions>
//               <Delete>Delete</Delete>
//               <View>View</View>
//             </Actions>
//           );
//          },
//         },
//       ];
      

//   const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'imageUrl', headerName: 'Image', width: 80,
//   renderCell:(params)=>{
//   return(
//   <ImageContainer>
//   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjivcct2hLpao-OTDoENHfh_Jbe8GaT2xGzw&usqp=CAU" alt=""/>
//   </ImageContainer>
//   ) 
//   }
//   },
//     {
//     field: 'pDesc',
//     headerName: 'Description',
//     width: 130,
//   },
//   {
//   field: 'price',
//   headerName: 'Price',
//   width: 80,
// },
//   {
//         field: 'actions',
//         headerName: 'Actions',
//         sortable: false,
//         width: 170,
//         renderCell:(params)=>{
//           return(
//           <Actions>
//             <Delete onClick={()=>handledelete(params.row.id)}>Delete</Delete>
//             <EditProduct proId={params.row.id} />
//             <View onClick={()=>navigate(`/product/${params.row.id}`)}>View</View>
//           </Actions>
//         );
//        },
//       },
// ];

// const handledelete=(id)=>{
//   dispatch(productsDelete(id));
// };

  return (
    <div>
      {/* <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      /> */}
      {/* <table>
  <tr>
    <th>Name</th>
    <th>Description</th>
    <th>Price</th>
  </tr>
  <tr>
    <td>16</td>
    <td>14</td>
    <td>10</td>
  </tr>
</table> */}

<div className="d-flex flex-column">
        <h1 className="text-white m-3">Products</h1>
        <table className="table table-dark table-xl m-3">
          <thead>
            <tr>
              <th scope="col">Product ID</th>
              <th scope="col">Product Name</th>
              <th scope="col">Image</th>
              <th scope="col">Price</th>
              {/* <th scope="col">Edit</th> */}
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>

  {product?.map(product => {
          return (
            <tr>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <ImageContainer>
   <img src={product?.image} alt=""/>
   </ImageContainer>
              <td>₹ {product.price}</td>
              {/* <td>
                <button type="button" class="btn btn-success btn-xsm me-2">
                  Add
                </button>
              </td> */}
              <td>
                <button type="button" class="btn btn-danger btn-xsm me-2">
                  Delete
                </button>
              </td>
            </tr>
    )})}
            
          </tbody>
        </table>
        </div>
    </div>
  );
}

  const ImageContainer = styled.div`
    img{
      height: 40px;
    }
  `;

  const Actions = styled.div`
  width:100%;
  display:flex;
  justify-content:space-between;
  button{
    border:none;
    outline: none;
    padding:3px 5px;
    color:white;
    border-radius:3px;
    cursor:pointer;
  }
  `;

  const Delete=styled.button`
    background-color:rgb(255,77,73);
  `;
  const View=styled.button`
    background-color:rgb(114,225,40);
  `;