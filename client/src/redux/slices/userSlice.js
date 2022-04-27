import { createSlice } from "@reduxjs/toolkit";

const initialState = { userId: 0, role: "", loading: false, error: null };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    assignRole(state, action) {
      console.log(action);
      state.role = action.payload;
    },
  },
});

export const { assignRole } = userSlice.actions;
export default userSlice.reducer;
