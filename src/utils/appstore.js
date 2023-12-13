import {configureStore} from '@reduxjs/toolkit'
import userReducer from './userSlice'
import MovieReducer from './movieSlice'

const appstore = configureStore({
    reducer : {
        user : userReducer,
        movie: MovieReducer
    }
})

export default appstore