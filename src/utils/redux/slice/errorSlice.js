const { createSlice } = require("@reduxjs/toolkit");


const initialState = {
    error: false,
    message: ''
}


export const errorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        setError: (state, { payload }) => {
            return ({ ...state, error: true, message: payload.message })
        }
    }
})

export const {setError} = errorSlice.actions
export default errorSlice.reducer