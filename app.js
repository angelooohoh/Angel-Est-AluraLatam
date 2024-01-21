  // Generar dos números aleatorios entre 1 y 20
     let num1 = Math.floor(Math.random() * 20) + 1;
     let num2 = Math.floor(Math.random() * 20) + 1;

        // Generar una operación aleatoria entre suma, resta y multiplicación
        let operaciones = ["+", "-", "*"];
        let operacion = operaciones[Math.floor(Math.random() * 3)];

        // Calcular el resultado de la operación
        let resultado = 0;
        switch (operacion) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        }
        // Mostrar la operación al usuario y pedirle el resultado
        let respuesta = prompt(
            "Ingresa el resultado de la siguiente operación: " +
            num1 +
            " " +
            operacion +
            " " +
            num2
        );
    // Verificar si la respuesta es correcta
    if (respuesta == resultado) {
        // Si es correcta, mostrar un mensaje de felicitación y redirigir a la página web
        alert("¡Correcto! Has accedido a la página web.");
        window.location.href = "https://app.aluracursos.com/user/snaker-spaker0470"; // Aquí debes poner la URL de la página web a la que quieres acceder
    } else {
        // Si no es correcta, mostrar un mensaje de error y recargar la página
        alert("¡Incorrecto! Vuelve a intentarlo.");
        window.location.reload();
    }
    