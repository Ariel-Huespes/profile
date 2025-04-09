function editar(id) {
    // Obtener el elemento donde se muestra el valor
    let element = document.getElementById(id);
    let currentValue = element.innerText || element.textContent;

    // Crear un campo de entrada para editar
    let input = document.createElement("input");
    input.type = (id === "contraseña") ? "password" : "text";  // Usar 'password' para la contraseña
    input.value = currentValue;
    element.innerHTML = ''; // Limpiar el contenido actual
    element.appendChild(input);

    // Cambiar el texto del botón a "Guardar"
    let button = element.nextElementSibling;
    button.innerText = 'Guardar';
    button.setAttribute('onclick', `guardar('${id}')`);

    // Mostrar los botones de acción
    document.getElementById("conservar").style.display = "inline-block";
    document.getElementById("cancelar").style.display = "inline-block";
}

function guardar(id) {
    // Obtener el nuevo valor
    let element = document.getElementById(id);
    let input = element.querySelector("input");
    let newValue = input.value;

    // Actualizar el texto con el nuevo valor
    element.innerHTML = newValue;

    // Cambiar el botón de nuevo a "Editar"
    let button = element.nextElementSibling;
    button.innerText = 'Editar';
    button.setAttribute('onclick', `editar('${id}')`);

    // Esconder los botones de acción después de guardar
    document.getElementById("conservar").style.display = "none";
    document.getElementById("cancelar").style.display = "none";
}

function conservarCambios() {
    // Aquí podrías enviar los datos al servidor o hacer cualquier otra acción para guardar los cambios
    alert("Cambios conservados");

    // Esconder los botones de acción después de guardar
    document.getElementById("conservar").style.display = "none";
    document.getElementById("cancelar").style.display = "none";
}

function cancelarEdicion() {
    // Recargar la página o restaurar los valores originales
    location.reload();  // Recarga la página y descarta los cambios realizados
}
