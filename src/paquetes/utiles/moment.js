//Ya no es recomendable utilizar moment, se recomiendan otras alternativas como day-fns, dayjs, luxor o la API de internacionalizacion de javascript

const moment = require('moment');

// console.log(moment);

let ahora = moment();
console.log(ahora.format('YYYY/MM/DD - HH:mm'));
