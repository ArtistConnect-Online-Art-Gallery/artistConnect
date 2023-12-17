import Swal from 'sweetalert2';
import { resetErrAction } from '../redux/slices/globalActions/globalActions';
import { useDispatch } from 'react-redux';

export const SuccessLogin = ({ message }) => {
	Swal.fire({
		icon: 'success',
		title: 'Login Success',
		text: message,
	});
};

export const FailedMessage = ({ message }) => {
	const dispatch = useDispatch();

	Swal.fire({
		icon: 'error',
		title: 'Oops...',
		text: message,
	}).then(() => {
		// After the user closes the error pop-up, reset the error state
		dispatch(resetErrAction());
	});
};

export const DuplicatedUser = () => {
	const dispatch = useDispatch();

	Swal.fire({
		icon: 'error',
		title: 'Oops...',
		text: 'User already exists',
	}).then(() => {
		// After the user closes the error pop-up, reset the error state
		dispatch(resetErrAction());
	});
};
