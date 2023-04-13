
function encriptar() {
    mensaje = document.getElementById("mensaje").value;
    const mensajeEncriptado = mensaje
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

        document.getElementById("texto").innerHTML = mensajeEncriptado;
        return mensajeEncriptado;
}

function desencriptar() {
    mensaje = document.getElementById("mensaje").value;
    const mensajeDesencriptado = mensaje
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

        document.getElementById("texto").innerHTML = mensajeDesencriptado;
        return mensajeDesencriptado;
}

function copiar() {
    const mensaje = document.getElementById("texto").textContent;
    navigator.clipboard.writeText(mensaje)
    .then(() => {
      console.log('Texto copiado al portapapeles: ' + mensaje);
      document.getElementById("mensaje").value = "";
    })
    .catch(err => {
      console.error('No se pudo copiar el texto al portapapeles: ', err);
    });
}