const formulario = document.getElementById("formulario-nota");
const mensaje = document.getElementById("mensaje");
const boton = formulario.querySelector(".boton-principal");

function mostrarMensaje(texto, tipo) {
    mensaje.textContent = texto;
    mensaje.className = "mensaje " + tipo;
}

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    formulario.classList.add("validado");

    // Previene el envío si hay campos vacíos o inválidos
    if (!formulario.checkValidity()) {
        mostrarMensaje("Revisa los campos obligatorios.", "error");
        formulario.querySelector("input:invalid").focus();
        return;
    }

    boton.disabled = true;
    boton.textContent = "Guardando...";
    mostrarMensaje("Guardando tu nota...", "info");

    // Simula el tiempo de guardado en el servidor
    setTimeout(function () {
        boton.disabled = false;
        boton.textContent = "Guardar Nota";
        const titulo = document.getElementById("titulo-nota").value;
        mostrarMensaje("¡Listo! Nota «" + titulo + "» guardada correctamente.", "exito");
        
        // Limpia el formulario después de guardar con éxito
        formulario.reset();
        formulario.classList.remove("validado");
    }, 1500);
});

formulario.addEventListener("reset", function (evento) {
    // Control y libertad: Pide confirmación antes de una acción destructiva
    if (!confirm("¿Seguro que quieres borrar todos los datos de la nota?")) {
        evento.preventDefault();
        return;
    }
    formulario.classList.remove("validado");
    mostrarMensaje("Formulario limpio. Puedes empezar de nuevo.", "info");
});