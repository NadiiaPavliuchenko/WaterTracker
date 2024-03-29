import Swal from 'sweetalert2';
// import 'sweetalert2/src/sweetalert2.scss';

export const toastSuccess = (message) => {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: message,
    showConfirmButton: false,
    timer: 1500,
  });
};

export const toastError = (message) => {
  Swal.fire({
    position: 'top-end',
    icon: 'error',
    title: message,
    showConfirmButton: false,
    timer: 1500,
  });
};
