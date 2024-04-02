import Swal from 'sweetalert2';
// import 'sweetalert2/src/sweetalert2.scss';

export const toastSuccess = (message) => {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: message,
    showConfirmButton: true,
    timer: 3000,
  });
};

export const toastError = (message, errorMessage) => {
  Swal.fire({
    position: 'top-end',
    icon: 'error',
    title: message,
    text: errorMessage, // Используем расшифрованное сообщение об ошибке
    showConfirmButton: false,
    timer: 1500,
  });
};
