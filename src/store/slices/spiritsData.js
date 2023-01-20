import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    spirits: [],
}

export const spiritsDataSlice = createSlice({
    name: 'spiritsData',
    initialState,
    reducers: {
        setSpirits: (state, action) => {
            state.spirits = action.payload;
        }
    }
})

export const { setSpirits } = spiritsDataSlice.actions;

export default spiritsDataSlice.reducer;