const form = document.getElementById('form');
const btnActiveForm = document.querySelector('.boton_cita')
const btnSalidaForm = document.querySelector('.btn-salida')

btnActiveForm.addEventListener("click", () => form.classList.add("form_active"))
btnSalidaForm.addEventListener("click", () => form.classList.remove("form_active"))