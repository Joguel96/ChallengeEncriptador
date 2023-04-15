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
    let  mensajeEncriptado;

    mensaje ? (() => {
      mensajeEncriptado = mensaje
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
      
      document.getElementById("resultado").innerHTML = mensajeEncriptado;
      document.getElementById("mensaje").value = "";

    }) () : (() => {
      notifica("No existe ningun mensaje");

    })();
    return mensajeEncriptado;

}

function desencriptar() {
    mensaje = document.getElementById("mensaje").value;
    let mensajeDesencriptado;

    mensaje ? (() => { 

      mensajeDesencriptado = mensaje
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
      
      document.getElementById("resultado").innerHTML = mensajeDesencriptado;
      document.getElementById("mensaje").value = "";
    }) () : (() => {
      notifica("No existe ningun mensaje");

    })();
        return mensajeDesencriptado;
}

function copiar() {
    const mensaje = document.getElementById("resultado").textContent;
    navigator.clipboard.writeText(mensaje)
    .then(() => {
      document.getElementById("resultado").textContent = "";
      mensaje ? notifica("Se copio el texto") : sinRespuesta("hola mundo sin respuesta");
    })
    .catch(err => {
      console.error('No se pudo copiar el resultado al portapapeles: ', err);
    });
}


function notifica(mensaje) {
  const contenedorNotificacion = document.getElementById("contenedor-notificacion");
  const notificacion = document.getElementById("notificacion");
  notificacion.innerHTML = mensaje;
  contenedorNotificacion.style.display = "block";
  contenedorNotificacion.style.animation = "slide-down 0.5s ease-in-out forwards";

  setTimeout(function() {
    contenedorNotificacion.style.animation = "fade-out 0.5s ease-in-out forwards";

    setTimeout(function() {
      contenedorNotificacion.style.display = "none";
    }, 500);
  }, 1500);
}

  function sinRespuesta(mensaje){
    console.log(mensaje)
  }