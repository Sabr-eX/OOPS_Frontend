import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { margin } from "@mui/system";


const columns = [
  {
    field: "image",
    headerName: "",
    width: 200,
    sortable: false,
    renderCell: (params) => (
      <img
        src={params.value}
        height="30"
        width="30"
        style={{ marginLeft: "10px" }}
        alt="product"
      />
    ),
  },
  // {
  //   field: "title",
  //   headerName: "Product Name",
  //   sortable: false,
  //   flex: 1,
  //   width:20,
  // },
  {
    field: "productName",
    headerName: "Product Name",
    sortable: false,
    // flex: 1,
    width: 300,
  },
  { field: "quantity", headerName: "Quantity", width: 120 },
  { field: "totalPrice", headerName: "Price", width: 120 },
  { field: "status", headerName: "Status", sortable: false, width: 120 },//change the thing here
  {field: "deliverin", headerName: "Delivery Time", sortable: false, width: 200 },
  { field: "orderDate", headerName: "Date of Order", sortable: false, width: 200 }
   
  
];

const transformData = (products) => {
  products.map((product) => {
    product.productName = product?.products?.name;
    product.orderDate = new Date(product?.orderDate);
    product.image = product?.products?.image;
    product.deliverin = product?.products?.delivery+" days"
  })

  return products;

}
const DataTable = ({ products }) => {
  let newProducts = transformData(products);
  console.log(newProducts);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={newProducts}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableColumnMenu
        disableSelectionOnClick
      />
    </div>
  );
};

export default DataTable;
