const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    song: [],
    loading: false,
    search: ''
}
export const songSlice = createSlice({
    name: 'song',
    initialState,
    reducers: {
        searchSong: (state, { payload }) => {
            return ({ ...state, loading: false, song: payload.data, search: payload.search })
        },
        addSong: (state, { payload }) => {
            return ({ ...state, song: [state.song, ...payload] })
        },
        fetchSong: (state) => {
            return ({ ...state, loading: true })
        },
    }
})

export const { searchSong, addSong, fetchSong } = songSlice.actions
export default songSlice.reducer