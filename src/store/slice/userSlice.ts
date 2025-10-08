import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  name: "",
  countryCode: "",
  phoneNumber: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (_, action: PayloadAction<any>) => ({ ...action.payload }),

    updateUser: (state, action: PayloadAction<Partial<any>>) => ({
      ...state,
      ...action.payload,
    }),

    clearUser: () => ({ ...initialState }),
  },
});

export const { setUser, updateUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
