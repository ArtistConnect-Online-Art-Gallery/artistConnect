import Swal from 'sweetalert2';

export const LoginSuccess = ({ message }) => {
	Swal.fire({
		icon: 'success',
		title: 'Login Success',
		text: message,
	});
};

export const FailedMessage = ({ message }) => {
	Swal.fire({
		icon: 'error',
		title: 'Oops...',
		text: message,
	});
};
