// Ejercicio bucle for

function factorial(n) {
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
      resultado *= i;
    }
    return resultado;
  }
  
  const factorialDe10 = factorial(10);
  console.log(factorialDe10);
  