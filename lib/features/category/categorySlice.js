import { createSlice } from "@reduxjs/toolkit";
import { categoriesDummyData } from "@/assets/assets";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    list: categoriesDummyData,
  },
  reducers: {
    setCategory: (state, action) => {
      state.list = action.payload;
    },
    clearCategory: (state) => {
      state.list = [];
    },
  },
});

export const { setCategory, clearCategory } = categorySlice.actions;

export default categorySlice.reducer;
