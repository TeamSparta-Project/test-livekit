import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/utils/store/config/configStore";

// Define a type for the slice state
interface user {
  room: string;
  name: string;
}

// Define the initial state using that type
const initialState: user = {
  room: "",
  name: "",
};

export const infoSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    roomByAmount: (state, action: PayloadAction<user["room"]>) => {
      state.room += action.payload;
    },
    nameByAmount: (state, action: PayloadAction<user["name"]>) => {
      state.name += action.payload;
    },
  },
});

export const { roomByAmount, nameByAmount } = infoSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectRoom = (state: RootState) => state.info.room;
export const selectName = (state: RootState) => state.info.name;

export default infoSlice.reducer;
