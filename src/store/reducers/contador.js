import { createSlice } from "@reduxjs/toolkit";

const contadorSlice = createSlice({
  name: "contador",
  initialState: 0,
  reducers: {
    incrementar: (state) => state++,
  },
});

export default contadorSlice.reducer;
