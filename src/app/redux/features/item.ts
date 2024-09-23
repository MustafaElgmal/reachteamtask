import { Item } from "@/types/item.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState: Item[] = [];
export const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    setItem: (state, action: PayloadAction<Item>) => {},
  },
});
export const { setItem } = itemSlice.actions;
export default itemSlice.reducer;
