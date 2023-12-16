import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import baseURL from '../../utils/baseURL';
import { resetErrAction } from './globalActions/globalActions';

const initialState = {
	loading: false,
	error: null,
	users: [],
	user: null,
	profile: {},
	userAuth: {
		loading: false,
		error: null,
		userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null,
	},
};

export const loginUserAction = createAsyncThunk(
	'users/login',
	async ({ email, password }, { rejectWithValue, getState, dispatch }) => {
		try {
			//make the http request
			const { data } = await axios.post(`${baseURL}/users/login`, {
				email,
				password,
			});
			//save the user into localstorage
			localStorage.setItem('userInfo', JSON.stringify(data));
			return data;
		} catch (error) {
			console.log(error);
			return rejectWithValue(error?.response?.data);
		}
	}
);
//register action
export const registerUserAction = createAsyncThunk(
	'users/register',
	async ({ email, password, username }, { rejectWithValue, getState, dispatch }) => {
		try {
			//make the http request
			const { data } = await axios.post(`${baseURL}/users/register`, {
				email,
				password,
				username,
			});
			return data;
		} catch (error) {
			console.log(error);
			return rejectWithValue(error?.response?.data);
		}
	}
);

//sign out  action
export const signoutAction = createAsyncThunk(
	'users/logout',
	async (payload, { rejectWithValue, getState, dispatch }) => {
		//get token
		localStorage.removeItem('userInfo');
		return true;
	}
);

//users slice
const usersSlice = createSlice({
	name: 'users',
	initialState,
	extraReducers: (builder) => {
		//login actions
		// 3 states: pending, fulfilled, rejected
		builder.addCase(loginUserAction.pending, (state, action) => {
			state.userAuth.loading = true;
		});
		builder.addCase(loginUserAction.fulfilled, (state, action) => {
			state.userAuth.userInfo = action.payload;
			state.userAuth.loading = false;
		});
		builder.addCase(loginUserAction.rejected, (state, action) => {
			state.userAuth.error = action.payload;
			state.userAuth.loading = false;
		});
		//register actions
		builder.addCase(registerUserAction.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(registerUserAction.fulfilled, (state, action) => {
			state.user = action.payload;
			state.loading = false;
		});
		builder.addCase(registerUserAction.rejected, (state, action) => {
			state.error = action.payload;
			state.loading = false;
		});
		//reset error action
		builder.addCase(resetErrAction.pending, (state) => {
			state.error = null;
			state.userAuth.error = null;
		});

		//logout
		builder.addCase(signoutAction.fulfilled, (state, action) => {
			state.userAuth.userInfo = null;
		});
	},
});

//generate reducer
const usersReducer = usersSlice.reducer;

export default usersReducer;
