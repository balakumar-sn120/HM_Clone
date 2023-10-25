import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
  name: "categories",
  initialState: [],
  reducers: {
    addCategories: (state, action) => {
      return state.concat(action.payload);
    },
  },
});

export const { addCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
