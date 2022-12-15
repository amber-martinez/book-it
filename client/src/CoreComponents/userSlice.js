import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        account: {}
    },
    reducers: {
        displayUser: (state, action) => {
            state.account = action.payload
        }
    }
})

const { displayUser } = userSlice.actions;

export { displayUser };
export default userSlice.reducer