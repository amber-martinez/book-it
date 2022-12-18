import { createSlice } from "@reduxjs/toolkit";

const viewSlice = createSlice({
    name: 'view',
    initialState: {
        viewMode: 'light',
        emoji: false,
        icon: false
    },
    reducers: {
        toggleViewMode: (state, action) => {
            state.viewMode = action.payload
        },
        setEmoji: (state) => {
            state.emoji = !state.emoji
        },
        setIcon: (state) => {
            state.icon = !state.icon
        }
    }
})

const { toggleViewMode, setEmoji, setIcon } = viewSlice.actions;

export { toggleViewMode, setEmoji, setIcon };
export default viewSlice.reducer