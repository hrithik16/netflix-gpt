import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    removeUser: (state, action) => initialState,
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
