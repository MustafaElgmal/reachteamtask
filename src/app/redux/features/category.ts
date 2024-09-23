import { Category } from "@/types/category.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState: Category[] = [];
export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<Category>) => {},
  },
});
export const { setCategory } = categorySlice.actions;
export default categorySlice.reducer;
