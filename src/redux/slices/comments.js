import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import baseURL from '../../utils/baseURL';
import { resetErrAction, resetSuccessAction } from './globalActions/globalActions';

//initial state
const initialState = {
	loading: false,
	error: null,
	comments: [],
	comment: {},
	isAdded: false,
	isDeleted: false,
	isUpdated: false,
};

// create comment for artwork by id action
export const createCommentAction = createAsyncThunk(
	'comment/create',
	async (payload, { rejectWithValue, getState, dispatch }) => {
		try {
			const { content, id } = payload;

			//get token from localstorage
			const token = getState()?.users?.userAuth?.userInfo?.token;
			const config = {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			};

			const { data } = await axios.post(`${baseURL}/${id}`, { content }, config);
			return data;
		} catch (error) {
			console.log(error);
			return rejectWithValue(error?.response?.data);
		}
	}
);

//slice
const commentsSlice = createSlice({
	name: 'comments',
	initialState,
	extraReducers: (builder) => {
		//create
		builder.addCase(createCommentAction.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(createCommentAction.fulfilled, (state, action) => {
			state.loading = false;
			state.artwork = action.payload;
			state.isAdded = true;
		});
		builder.addCase(createCommentAction.rejected, (state, action) => {
			state.loading = false;
			state.artwork = null;
			state.isAdded = false;
			state.error = action.payload;
		});
		//Reset err
		builder.addCase(resetErrAction.pending, (state, action) => {
			state.error = null;
			state.isAdded = false;
		});
		//Reset success
		builder.addCase(resetSuccessAction.pending, (state, action) => {
			state.isAdded = false;
			state.error = null;
		});
	},
});

//generate reducer
const commentsReducer = commentsSlice.reducer;
export default commentsReducer;
