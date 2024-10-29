// Función para calcular el total con interés
function calcularTotalConInteres(monto, cuotas) {
    let interes;
    
    // Condicional para determinar el interés
    if (cuotas === 1) {
        interes = 0;
    } else if (cuotas <= 3) {
        interes = 0.05;
    } else if (cuotas <= 6) {
        interes = 0.10;
    } else {
        interes = 0.15;
    }

    // Calcula el total sumando cada cuota con el interés
    let total = 0;
    for (let i = 0; i < cuotas; i++) {
        total += (monto / cuotas) * (1 + interes);
    }

    return total.toFixed(2); // Redondea el resultado a 2 decimales
}

// Interacción con el usuario
let monto = parseFloat(prompt("Ingrese el monto del producto:"));
let cuotas = parseInt(prompt("Ingrese la cantidad de cuotas (1, 3, 6, o 12):"));

if (isNaN(monto) || isNaN(cuotas) || monto <= 0 || ![1, 3, 6, 12].includes(cuotas)) {
    alert("Entrada no válida. Inténtelo de nuevo.");
} else {
    let totalConInteres = calcularTotalConInteres(monto, cuotas);
    alert(`El total a pagar en ${cuotas} cuotas es: $${totalConInteres}`);
}
