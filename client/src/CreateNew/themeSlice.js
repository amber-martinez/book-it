import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        newPrimColor: '#ecebe5',
        newSecColor: '#5b583d',
        newBulletIcon: '◇',
        themeID: 2
    },
    reducers: {
        changePrimColor: (state, action) => {
            state.newPrimColor = action.payload
        },
        changeSecColor: (state, action) => {
            state.newSecColor = action.payload
        },
        changeBulletIcon: (state, action) => {
            state.newBulletIcon = action.payload
        },
        changeThemeID: (state, action) => {
            state.themeID = action.payload
        }
    }
})

const { changePrimColor, changeSecColor, changeBulletIcon, changeThemeID } = themeSlice.actions;

export { changePrimColor, changeSecColor, changeBulletIcon, changeThemeID };
export default themeSlice.reducer