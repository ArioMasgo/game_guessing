let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let numEntrada = document.getElementById("numeroEntrada");
let mensaje = document.getElementById("mensaje");
let intento = document.getElementById("intento");
let intentos = 0;

function adivinarnumero() {
  intentos++;
  intento.textContent = intentos;
  let numeroIngresado = parseInt(numEntrada.value);
  if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
    mensaje.textContent = "Ingrese un numero en el rango del 1 al 100";
    mensaje.style.color = "red";
    return;
  }
  if (numeroIngresado === numeroAleatorio) {
    mensaje.textContent = "¡Felicidade adivinaste el numero correcto !";
    mensaje.style.color = "green";
    numEntrada.disabled = true;
  } else if (numeroIngresado < numeroAleatorio) {
    mensaje.textContent = "¡Es mayor!, el numero es mayor";
    mensaje.style.color = "red";
  } else {
    mensaje.textContent = "Es menor!, el nummero es menor";
    mensaje.style.color = "red";
  }
  document.getElementById("numeroEntrada").value = "";
}
