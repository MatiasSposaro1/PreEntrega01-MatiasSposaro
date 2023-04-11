let randomNumber = Math.floor(Math.random() * 100) + 1; // Genera un número aleatorio entre 1 y 100
let guessInput = document.getElementById("guess-input"); // Campo de entrada para adivinar el número
let result = document.getElementById("result"); // Elemento para mostrar el resultado del juego

function guessNumber() {
  let guess = parseInt(guessInput.value); // Obtener la respuesta del usuario como un número entero

  // Validar que la respuesta sea un número válido entre 1 y 100
  if (isNaN(guess) || guess < 1 || guess > 100) {
    result.innerText = "Por favor, ingresa un número válido entre 1 y 100.";
  } else if (guess === randomNumber) { // Si la respuesta es correcta, mostrar un mensaje de felicitación
    result.innerText = "¡Felicidades! Adivinaste el número correcto.";
  } else if (guess < randomNumber) { // Si la respuesta es demasiado baja, indicar que se necesita un número mayor
    result.innerText = "El número es demasiado bajo. Intenta con un número más grande.";
  } else { // Si la respuesta es demasiado alta, indicar que se necesita un número menor
    result.innerText = "El número es demasiado alto. Intenta con un número más pequeño.";
  }
}
