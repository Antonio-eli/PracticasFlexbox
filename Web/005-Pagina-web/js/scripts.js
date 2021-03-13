const inputs = document.querySelectorAll('form .campo input');

//Listener a los inputs
inputs.forEach(input => {
    input.addEventListener('blur', validarInput);
});
inputs.forEach(input => {
    input.addEventListener('input', validarInput);
});

function validarInput(e) {
    const estado = ['valido', 'no-valido'];
    let clase;
    if (e.target.value.length === 0) {
        clase = estado[1];
    } else {
        clase = estado[0];
    }
    e.target.classList.remove(...estado);
    e.target.nextElementSibling.classList.remove(...estado);
    e.target.classList.add(clase);
    e.target.nextElementSibling.classList.add(clase);
    //Inyectar dimanicamente el div con el error
    if (clase === 'no-valido') {
        if (e.target.parentElement.nextElementSibling.classList[0] !== 'alerta') {
            //Construir un mensaje de error
            const erroDiv = document.createElement('div');
            erroDiv.appendChild(document.createTextNode('Este campo es obligatotio'));
            erroDiv.classList.add('alerta');

            //Insertar el error
            e.target.parentElement.parentElement.insertBefore(erroDiv, e.target.parentElement.nextElementSibling);
        }
    } else {
        //Limpiar el mensaje de error si existe
        if (e.target.parentElement.nextElementSibling.classList[0] === 'alerta') {
            e.target.parentElement.nextElementSibling.remove();
        }
    }
}

//Mostar y ocultar password
const mostarPasswordBtn = document.querySelector('form .campo span');
mostarPasswordBtn.addEventListener('click', e => {
    const passwordInput = document.querySelector('#password');

    if (e.target.classList.contains('mostrar')) {
        // mostrar el texto
        e.target.classList.remove('mostrar');
        // cambiar el texto
        e.target.textContent = 'Ocultar';

        // cambiamos a password
        passwordInput.type = 'text';
    } else {
        // mostrar el password
        e.target.classList.add('mostrar');
        // cambiar el texto
        e.target.textContent = 'Mostrar';
        // cambiamos a password
        passwordInput.type = 'password';
    }
});