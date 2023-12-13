import { createSlice }from '@reduxjs/toolkit'

const MovieSlice = createSlice({
    name:"movie",
    initialState : {
        nowPlaying : null,
        trailer : null
    },
    reducers: 
        {
        addMoviesList :  (state,action) =>  { state.nowPlaying = action.payload},
        
        
            addTrailer :  (state,action) =>  { state.trailer = action.payload}
        },
    
})


export const {addMoviesList , addTrailer} = MovieSlice.actions


export default MovieSlice.reducer