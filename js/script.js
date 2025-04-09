let valoresOriginales = {};

function activarEdicion() {
    document.getElementById('botones-edicion').style.display = 'flex';
    document.getElementById('editar').style.display = 'none';

    // Guardar los valores originales
    valoresOriginales = {
        nombre: document.getElementById('nombre').value,
        usuario: document.getElementById('usuario').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };

    // Habilitar inputs
    document.getElementById('nombre').disabled = false;
    document.getElementById('usuario').disabled = false;
    document.getElementById('email').disabled = false;
    document.getElementById('password').disabled = false;
}

function conservarCambios() {
    document.getElementById('botones-edicion').style.display = 'none';
    document.getElementById('editar').style.display = 'inline-block';

    document.getElementById('nombre').disabled = true;
    document.getElementById('usuario').disabled = true;
    document.getElementById('email').disabled = true;
    document.getElementById('password').disabled = true;

    // Mostrar mensaje de confirmación
    const mensaje = document.getElementById('mensaje-confirmacion');
    mensaje.style.display = 'block';

    // Ocultarlo luego de unos segundos
    setTimeout(() => {
        mensaje.style.display = 'none';
    }, 3000);
}
function cancelarEdicion() {
    document.getElementById('botones-edicion').style.display = 'none';
    document.getElementById('editar').style.display = 'inline-block';

    // Restaurar los valores originales
    document.getElementById('nombre').value = valoresOriginales.nombre;
    document.getElementById('usuario').value = valoresOriginales.usuario;
    document.getElementById('email').value = valoresOriginales.email;
    document.getElementById('password').value = valoresOriginales.password;

    // Deshabilitar inputs
    document.getElementById('nombre').disabled = true;
    document.getElementById('usuario').disabled = true;
    document.getElementById('email').disabled = true;
    document.getElementById('password').disabled = true;
}


//


const navcenter = document.getElementById("nav-center")
const navcentermobile = document.getElementById("nav-center-mobile")
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobilenav');
const closeButton = document.getElementById('close-menu')
const options = document.querySelectorAll('#menu-option-mobile')

console.log(options)
burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    closeButton.classList.toggle('active');
});

closeButton.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    closeButton.classList.remove('active')
})

options.forEach((option) => {
    option.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        closeButton.classList.remove('active')
    })
})
