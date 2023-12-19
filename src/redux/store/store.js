import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../slices/users';
import artworksReducer from '../slices/artworks';
const store = configureStore({
	reducer: {
		users: usersReducer,
		artworks: artworksReducer,
	},
});

export default store;
