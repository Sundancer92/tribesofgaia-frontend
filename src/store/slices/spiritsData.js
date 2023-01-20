import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    spirits: [],
    spirit: {},
}

export const spiritsDataSlice = createSlice({
    name: 'spiritsData',
    initialState,
    reducers: {
        setSpirits: (state, action) => {
            state.spirits = action.payload;
        },
        setSpirit: (state, action) => {
            state.spirit = action.payload;
        }
    }
})

export const { setSpirits, setSpirit } = spiritsDataSlice.actions;

export default spiritsDataSlice.reducer;