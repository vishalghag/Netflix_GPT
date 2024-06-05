import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trendingMovies: null,
    topRated: null,
    upComing: null,
    recentlyViewedVideos: [], // Change this to an array
    likedMovies: JSON.parse(localStorage.getItem("likedMovies")) || [],
    trailer: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRated = action.payload;
    },
    addUpComingMovies: (state, action) => {
      state.upComing = action.payload;
    },
    addRecentlyViewedVideo: (state, action) => {
      // Prepend the new movie to the array to keep the most recent first
      state.recentlyViewedVideos = [
        action.payload,
        ...state.recentlyViewedVideos,
      ].slice(0, 10); // Limit to 10 recent movies
    },
    addLikedMovies: (state, action) => {
      const movieId = action.payload;
      if (state.likedMovies.includes(movieId)) {
        state.likedMovies = state.likedMovies.filter((id) => id !== movieId);
      } else {
        state.likedMovies = [movieId, ...state.likedMovies];
      }
      localStorage.setItem("likedMovies", JSON.stringify(state.likedMovies));
    },
    addTrailer: (state, action) => {
      state.trailer = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailer,
  addTrendingMovies,
  addTopRatedMovies,
  addUpComingMovies,
  addRecentlyViewedVideo,
  addLikedMovies,
} = movieSlice.actions;

export default movieSlice.reducer;
