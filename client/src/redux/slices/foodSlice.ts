import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import api from "../api";

const initialState: MenuState = {
  items: [],
  numOfGoods: 0,
  currentPage: 1,
  pages: 1,
  isLoading: false,
  check: [],
  maxPrice: 0,
  slider: [],
};

export const setCheck = createAction<string>("menu/setCheck");
export const setSlider = createAction<number[]>("menu/setSlider");
export const setInputChange = createAction<{ index: number; value: number }>(
  "menu/setInputChange"
);
export const setCurrentPage = createAction<number>("menu/setCurrentPage");

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

export const sendCheck = createAsyncThunk(
  "menu/send-check",
  async (
    params: { check: string[]; currentPage: number },
    { rejectWithValue }
  ) => {
    try {
      const response = await api.post(
        "/filter-food",
        { check: params.check, page: params.currentPage },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      return response.data;
    } catch (error: any) {
      console.error(error);
      return rejectWithValue(error.message);
    }
  }
);

const foodSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setCheck, (state, action) => {
      const id = action.payload;
      let result = [...state.check];

      if (result.includes(id)) {
        result = result.filter((foodId) => foodId !== id);
      } else {
        result.push(id);
      }

      state.check = result;
    });

    builder.addCase(setSlider, (state, action) => {
      const newValue = action.payload;
      const newSlider = Array.isArray(newValue)
        ? newValue
        : [1, state.slider[1]];
      state.slider = newSlider;
    });

    builder.addCase(setCurrentPage, (state, action) => {
      state.currentPage = action.payload;
    });

    builder.addCase(setInputChange, (state, action) => {
      const { index, value } = action.payload;
      const newSlider = [...state.slider];

      if (index === 0 && value >= newSlider[1]) {
        newSlider[index] = newSlider[1] - 1;
      } else if (index === 1 && value <= newSlider[0]) {
        newSlider[index] = newSlider[0] + 1;
      } else {
        newSlider[index] = value;
      }

      state.slider = newSlider;
    });

    builder
      // getFood
      .addMatcher(
        (action) => action.type === getFood.pending.type,
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        (action) => action.type === getFood.fulfilled.type,
        (state, action) => {
          state.items = action.payload.data.items;
          state.numOfGoods = action.payload.data.numOfGoods;
          state.currentPage = action.payload.data.currentPage;
          state.pages = action.payload.data.pages;
          state.maxPrice = action.payload.data.maxPrice;
          state.slider = [1, action.payload.data.maxPrice];
          state.isLoading = false;
        }
      )
      .addMatcher(
        (action) => action.type === getFood.rejected.type,
        (state, action) => {
          state.isLoading = false;
        }
      )
      // getFilteredFood
      .addMatcher(
        (action) => action.type === sendCheck.fulfilled.type,
        (state, action) => {
          state.items = action.payload.data.items;
          state.numOfGoods = action.payload.data.numOfGoods;
          state.currentPage = action.payload.data.currentPage;
          state.pages = action.payload.data.pages;
          state.maxPrice = action.payload.data.maxPrice;
          state.slider = [1, action.payload.data.maxPrice];
          state.isLoading = false;
        }
      )
      .addMatcher(
        (action) => action.type === sendCheck.pending.type,
        (state) => {
          state.isLoading = true;
        }
      );
  },
});

export default foodSlice.reducer;
