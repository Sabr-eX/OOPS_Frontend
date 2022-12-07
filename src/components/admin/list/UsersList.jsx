import styled from "styled-components";
import * as React from 'react';
import { useEffect,useState } from "react";
import axios from "axios";



export default function UsersList() {

  const [product, setProduct] = useState();

useEffect(() => {
  const getProducts = async () => {
    await axios.get('https://gada-electronics.up.railway.app/users/all')
      .then((res) => { setProduct(res?.data); })
      .then((res) => console.log(res?.data))
  }
  getProducts();
}, [])
//   const dispatch = useDispatch();
// const navigate = useNavigate();
  // const {list}=useSelector((state)=>state.users)

    // useEffect(()=>{
    //     dispatch(usersFetch());
    // },[dispatch])

//   const rows=list&&list.map((user)=>{
//     return{
//       id: user._id,
//       uName:user.name,
//       uEmail:user.email,
//       isAdmin:user.isAdmin,
//     };
//   });

//   const columns = [
//   { field: 'id', headerName: 'ID', width: 220 },
//   { field: 'uName', headerName: 'Name', width: 150,},
//   { field: 'uEmail', headerName: 'Email', width: 200 },
//   {
//     field: 'isAdmin',
//     headerName: 'Role',
//     width: 100,
// renderCell:(params)=>{
    //       return(
      //       <div>
      //         {params.row.isAdmin?(<Admin>Admin</Admin>):(<Customer>Customer</Customer>)}
      //       </div>
      //     );
      //    },
//   },
//   {
//   field: 'price',
//   headerName: 'Price',
//   width: 80,
// },
//   {
  //     field: 'actions',
  //     headerName: 'Actions',
  //     sortable: false,
  //     width: 170,
  //     renderCell:(params)=>{
    //       return(
      //       <Actions>
      //         <Delete>Delete</Delete>
      //         <View>View</View>
      //       </Actions>
      //     );
      //    },
      //   },
      // ];
      
      // const rows = [
      //   { id: 1, pDesc: 'Snow Jon', price: 35 },
      //   { id: 2, pDesc: 'Lannister Cersei', price: 42 },
      //   { id: 3, pDesc: 'Lannister Jaime', price: 45 },
      //   { id: 4, pDesc: 'Stark Arya', price: 16 },
      //   { id: 5, pDesc: 'Targaryen Daenerys', price: 50 },
      //   { id: 6, pDesc: 'Melisandre', price: 150 },
      //   { id: 7, pDesc: 'Clifford Ferrara', price: 44 },
      //   { id: 8, pDesc: 'Frances Rossini', price: 36 },
      //   { id: 9, pDesc: 'Roxie Harvey', price: 65 },
      // ];

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
//         width: 120,
//         renderCell:(params)=>{
//           return(
//           <Actions>
//             <Delete onClick={()=>handledelete(params.row.id)}>Delete</Delete>
//             <View onClick={()=>navigate(`/user/${params.row.id}`)}>View</View>
//           </Actions>
//         );
//        },
//       },
// ];

// const handledelete=(id)=>{
// //   dispatch(productsDelete(id));
// };

return (
  <div>
<div className="d-flex flex-column">
      <h1 className="text-white m-3">Products</h1>
      <table className="table table-dark table-xl m-3">
        <thead>
          <tr>
            <th scope="col">Product ID</th>
            <th scope="col">Product Name</th>
            <th scope="col">Phone No.</th>
            {/* <th scope="col">Price</th> */}
            {/* <th scope="col">Edit</th> */}
            <th scope="col">Role</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>

{product?.map(product => {
        return (
          <tr>
            <td>{product.id}</td>
            <td>{product.name}</td>
            {/* <ImageContainer>
 <img src={product?.image} alt=""/>
 </ImageContainer> */}
            <td>{product.phone}</td>
            {/* <td>
              <button type="button" class="btn btn-success btn-xsm me-2">
                Add
              </button>
            </td> */}
            <td>{(product.role==="ADMIN")?(<Admin>Admin</Admin>):((product.role==="MANAGER")?(<Manager>Manager</Manager>):(<Customer>Customer</Customer>))}</td>
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

  const Admin=styled.div`
    color:rgb(253,181,40);
    background-color:rgb(253,181,40,0.12);
    padding:3px 5px;
    border-radius:3px;
    font-size:14px;
  `
  const Customer=styled.div`
  color:rgb(38,198,249);
  background-color:rgb(38,198,249,0.12);
  padding:3px 5px;
  border-radius:3px;
  font-size:14px;
`
const Manager=styled.div`
color:rgb(181,253,40);
background-color:rgb(181,253,40,0.12);
padding:3px 5px;
border-radius:3px;
font-size:14px;
`