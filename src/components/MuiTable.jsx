import React from "react";
import { DataGrid } from "@mui/x-data-grid";


const columns = [
  {
    field: "image",
    headerName: "",
    width: 80,
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
    field: "title",
    headerName: "Product Name",
    sortable: false,
    flex: 1,
    width: 20,
  },
  {field: "sdfsdf", headerName: "Quantity", width: 120},
  { field: "price", headerName: "Price", width: 120 },
  { field: "category", headerName: "Status", sortable: false, width: 120 },//change the thing here
  {field: "ghtyrh",headerName: "Date of order", sortable:false, width:120}
];


const DataTable = ({ products }) => {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={products}
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
