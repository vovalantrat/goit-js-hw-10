import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const delayInput = document.querySelector('input[name="delay"]');
const stateRadios = document.querySelectorAll('input[name="state"]');
// const submitBtn = document.querySelector('.submit-btn');
const form = document.querySelector('.form');

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const delay = Number(delayInput.value);
    let state;
    stateRadios.forEach(radio => {
        if (radio.checked) {
            state = radio.value;
        }
    });

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === 'fulfilled') {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);
    });

    promise
        .then((delay) => {
            iziToast.success({
                title: 'Success',
                message: `✅ Fulfilled promise in ${delay}ms`,
                position: 'topRight'
            });
        })
        .catch((delay) => {
            iziToast.error({
                title: 'Error',
                message: `❌ Rejected promise in ${delay}ms`,
                position: 'topRight'
            });
        });
});