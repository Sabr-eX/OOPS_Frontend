import styled from "styled-components";
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import { productsDelete } from "../../../slices/productsSlice";
import EditProduct from "../EditProduct";


export default function ProductsList() {
  const dispatch = useDispatch();
const navigate = useNavigate();
  // const {items}=useSelector((state)=>state.products)

//   const rows=items&&items.map(item=>{
//     return{
//       id: item._id,
//       imageUrl:item.image.url,
//       pName:item.name,
//       pDesc:item.desc,
//       price: item.price.toLocaleString()
//     };
//   });

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
      
      const rows = [
        { id: 1, pDesc: 'Snow Jon', price: 35 },
        { id: 2, pDesc: 'Lannister Cersei', price: 42 },
        { id: 3, pDesc: 'Lannister Jaime', price: 45 },
        { id: 4, pDesc: 'Stark Arya', price: 16 },
        { id: 5, pDesc: 'Targaryen Daenerys', price: 50 },
        { id: 6, pDesc: 'Melisandre', price: 150 },
        { id: 7, pDesc: 'Clifford Ferrara', price: 44 },
        { id: 8, pDesc: 'Frances Rossini', price: 36 },
        { id: 9, pDesc: 'Roxie Harvey', price: 65 },
      ];

  const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'imageUrl', headerName: 'Image', width: 80,
  renderCell:(params)=>{
  return(
  <ImageContainer>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjivcct2hLpao-OTDoENHfh_Jbe8GaT2xGzw&usqp=CAU" alt=""/>
  </ImageContainer>
  ) 
  }
  },
    {
    field: 'pDesc',
    headerName: 'Description',
    width: 130,
  },
  {
  field: 'price',
  headerName: 'Price',
  width: 80,
},
  {
        field: 'actions',
        headerName: 'Actions',
        sortable: false,
        width: 170,
        renderCell:(params)=>{
          return(
          <Actions>
            <Delete onClick={()=>handledelete(params.row.id)}>Delete</Delete>
            <EditProduct proId={params.row.id} />
            <View onClick={()=>navigate(`/product/${params.row.id}`)}>View</View>
          </Actions>
        );
       },
      },
];

const handledelete=(id)=>{
  dispatch(productsDelete(id));
};

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
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