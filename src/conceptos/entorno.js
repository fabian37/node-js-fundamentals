// require('dotenv').config();
import * as dotenv from 'dotenv';
dotenv.config();

let nombre = process.env.NOMBRE || 'Fabian';
let edad = process.env.EDAD || 22;

console.log(`Hola mi nombre es ${nombre} y tengo ${edad} de edad`);

/* 
  *Variables de entorno pasadas en la terminal (BASH)
  *NOMBRE=Fabian EDAD=22 node ubicaciondelarchivo

  *En powershell
  *$env:NOMBRE="Fabian";
  *node ubicaciondelarchivo

  !dotenv
  npm install dotenv --save
  !Con dotenv (commonjs)
  !require('dotenv').config();
  !Con dotenv (modules ES)
  !import * as dotenv from 'dotenv';
  !dotenv.config();
*/