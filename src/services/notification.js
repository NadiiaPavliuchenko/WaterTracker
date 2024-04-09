import Swal from 'sweetalert2';

export const toastSuccess = (message) => {
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: message,
    showConfirmButton: true,
    timer: 3000,
    color: '#407bff',
    background: '#d7e3ff',
    iconColor: '#407bff',
    confirmButtonColor: '#407bff',
    width: 320,
  });
};

export const toastError = (message, errorMessage) => {
  Swal.fire({
    position: 'top-end',
    icon: 'error',
    title: message,
    text: errorMessage,
    showConfirmButton: true,
    timer: 3000,
    color: '#407bff',
    background: '#d7e3ff',
    iconColor: '#ef5050',
    confirmButtonColor: '#407bff',
  });
};
