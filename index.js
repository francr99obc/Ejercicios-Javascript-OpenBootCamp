import * as controller from './controller'
import chalk from "chalk"
const sum= controller.suma(100,200)
console.log(sum);

const mult= controller.multiplica(20,50);
console.log(chalk.green(mult));

// Forma simplificada de hacer el ejercicio
console.log(chalk.green(multiplica(suma(1, 2), suma(4, 5))))