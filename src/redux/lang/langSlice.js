import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
  name: "lang",
  initialState: "en",
  reducers: {
    changeLang(state, { payload }) {
      return payload;
    },
  },
});

export const { changeLang } = langSlice.actions;
export default langSlice.reducer;
