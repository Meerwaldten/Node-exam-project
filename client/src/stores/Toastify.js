import Toastify from 'toastify-js';

function showToastify(message){
    const toast = Toastify({
        position: 'center',
        duration: 3000,
        gravity: 'top',
        text: message,
        backgroundColor: '#FF6347'
    });
    toast.showToast();
}

export default showToastify;