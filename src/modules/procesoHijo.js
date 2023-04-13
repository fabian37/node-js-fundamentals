const { exec, spawn } = require('child_process');

const procesos = ['ls -la', 'node src/modules/consola.js'];

// exec(procesos[1], (error, stdout, stderr) => {
// 	if (error) {
// 		console.log(error);
// 		return false;
// 	} else {
// 		console.log(stdout);
// 	}
// });

// let proceso = spawn('ls', ['-la']);
// console.log(proceso.pid);
// console.log(proceso.connected);
// // console.log(proceso);
// proceso.stdout.on('data', (datos) => {
// 	console.log('Está muerto?');
// 	console.log(proceso.killed);
// 	console.log(datos.toString());
// });

// proceso.on('exit', () => {
// 	console.log('El proceso terminó');
// });

exec('start chrome');
