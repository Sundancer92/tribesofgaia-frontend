import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userName: null,
    userToken: null,
}

export const userDataSlice = createSlice({
    name: "userData",
    initialState,
    reducers:{
        setUserDataName: (state, action) => {
            state.userName = action.payload;
        },
        setUserDataToken: (state, action) => {
            state.userToken = action.payload;
        },
        cleanUserData: (state, action) => {
            state.userName = null;
            state.userToken = null;
        }
    }
})

export const {setUserDataName, setUserDataToken, cleanUserData } = userDataSlice.actions;

export default userDataSlice.reducer;