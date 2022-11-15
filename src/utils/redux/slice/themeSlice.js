import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mainColor: '#712bda',
    secondColor:'#a45deb'
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme: (state, { payload }) => {
            return state.color = payload
        }
    }
})

export const { changeTheme } = themeSlice.actions
export default themeSlice.reducer