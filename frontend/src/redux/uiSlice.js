import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isActive: '',
}

export const userSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        setActive: (state, action) => {
            console.log('clicked', action.payload);
            state.isActive = action.payload;
        }
    }
})

export const { setActive } = userSlice.actions;
export default userSlice.reducer;