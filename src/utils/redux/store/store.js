import { combineReducers, configureStore } from "@reduxjs/toolkit";
import themeSlice from "@-utils/redux/slice/themeSlice";
import songSlice from "../slice/songSlice";
import errorSlice from "../slice/errorSlice";


const rootReducer = combineReducers({
    theme: themeSlice,
    song: songSlice,
    error: errorSlice
})

const store = configureStore({
    reducer: rootReducer
})

export default store