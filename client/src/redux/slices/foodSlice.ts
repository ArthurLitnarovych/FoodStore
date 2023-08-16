import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";
import { Response } from "express";

const initialState: MenuState = {
  items: [],
  numOfGoods: 0,
  currentPage: 1,
  pages: 1,
};

export const getFood = createAsyncThunk(
  "menu/fetchFood",
  async (params: { currentPage: number }, { rejectWithValue }) => {
    try {
      const { data } = await api.get(`food?page=${params.currentPage}`);

      return data;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

const foodSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      (action) => action.type === getFood.fulfilled.type,
      (state, action) => {
        state.items = action.payload.data.items;
        state.numOfGoods = action.payload.data.numOfGoods;
        state.currentPage = action.payload.data.currentPage;
        state.pages = action.payload.pages;
      }
    );
  },
});

export default foodSlice.reducer;
