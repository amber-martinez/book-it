import { createSlice } from "@reduxjs/toolkit";

const viewSlice = createSlice({
    name: 'view',
    initialState: {
        viewMode: 'light',
        emoji: false
    },
    reducers: {
        toggleViewMode: (state, action) => {
            state.viewMode = action.payload
        },
        setEmoji: (state) => {
            state.emoji = !state.emoji
        }
    }
})

const { toggleViewMode, setEmoji } = viewSlice.actions;

export { toggleViewMode, setEmoji };
export default viewSlice.reducer