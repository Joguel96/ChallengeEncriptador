let area = document.querySelector("#mensaje");

window.addEventListener("input", () => {
  ajustarAlturaTextArea(area);
});

window.addEventListener("resize", () => {
  ajustarAlturaTextArea(area);
});

function ajustarAlturaTextArea(textArea) {
  textArea.style.height = "auto";
  textArea.style.height = `${textArea.scrollHeight}px`;
}

function encriptar() {
    mensaje = document.getElementById("mensaje").value;
    const mensajeEncriptado = mensaje
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

        document.getElementById("resultado").innerHTML = mensajeEncriptado;
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

        document.getElementById("resultado").innerHTML = mensajeDesencriptado;
        return mensajeDesencriptado;
}

function copiar() {
    const mensaje = document.getElementById("resultado").textContent;
    navigator.clipboard.writeText(mensaje)
    .then(() => {
      console.log('resultado copiado al portapapeles: ' + mensaje);
      document.getElementById("mensaje").value = "";
    })
    .catch(err => {
      console.error('No se pudo copiar el resultado al portapapeles: ', err);
    });
}