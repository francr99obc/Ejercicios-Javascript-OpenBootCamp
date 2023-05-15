function factorial(n) {
    let resultado = 1;
    let i = 1;
    
    while (true) {
      resultado *= i;
      
      if (i === n) {
        break;
      }
      
      i++;
    }
    
    return resultado;
  }
  
  const factorialDe10 = factorial(10);
  console.log(factorialDe10);
  