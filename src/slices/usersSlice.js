import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url, setHeaders } from "./api";
import { toast } from "react-toastify";

const initialState = {
  items: [],
  status: null,
  deleteStatus:null,
};

export const usersFetch = createAsyncThunk(
    "users/usersFetch",
    async () => {
      try {
        const response = await axios.get(`${url}/users`);
        return response.data;
      } catch (error) {
        console.log(error);
      }
    }
  );
  
  export const usersDelete = createAsyncThunk(
    "users/usersDelete",
    async (id) => {
      try {
        const response = await axios.delete(
          `${url}/users/${id}`,
          setHeaders()
        );
  
        return response.data;
      } catch (error) {
        console.log(error);
        toast.error(error.response?.data);
      }
    }
  );
  const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: {
      [usersFetch.pending]: (state, action) => {
        state.status = "pending";
      },
      [usersFetch.fulfilled]: (state, action) => {
        state.items = action.payload;
        state.status = "success";
      },
      [usersFetch.rejected]: (state, action) => {
        state.status = "rejected";
      },
      [usersDelete.pending]: (state, action) => {
        state.createStatus = "pending";
      },
      [usersDelete.fulfilled]: (state, action) => {
      // const newList=state.items.filter((item)=>item._id!==action.payload._id);
      // state.items = newList;
      state.deleteStatus = "success";
      toast.error("User Deleted!",{
        position:"bottom-left",
      })
      },
      [usersDelete.rejected]: (state, action) => {
        state.deleteStatus = "rejected";
      },
    },
  });

  export default usersSlice.reducer;