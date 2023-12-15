import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import baseURL from '../../utils/baseURL';

//initial user state
const initialState = {
	users: [],
	user: {},
	loading: false,
	error: null,
	profile: {},
	userAuth: {
		loading: false,
		error: null,
		userInfo: {},
	},
};

//login action
export const loginUserAction = createAsyncThunk(
	'users/login',
	//access data from payload and handle error from backend
	async ({ email, password }, { rejectWithValue, getState, dispatch }) => {
		try {
			//make the http request
			const { data } = await axios.post(`${baseURL}/users/login`, {
				email,
				password,
			});
			return data;
		} catch (error) {
			console.log(error);
			return rejectWithValue(error?.response?.data);
		}
	}
);

//users slice
const usersSlice = createSlice({
	name: 'users',
	initialState,
	extraReducers: (builder) => {
		//handle actions
		// 3 states: pending, fulfilled, rejected
		builder.addCase(loginUserAction.pending, (state, action) => {
			state.userAuth.loading = true;
		});
		builder.addCase(loginUserAction.fulfilled, (state, action) => {
			state.userAuth.userInfo = action.payload;
			//after loading, change the loading state to false
			state.userAuth.loading = false;
		});
		builder.addCase(loginUserAction.rejected, (state, action) => {
			state.userAuth.error = action.payload;
			state.userAuth.loading = false;
		});
	},
});

//generate reducer
const usersReducer = usersSlice.reducer;

export default usersReducer;
