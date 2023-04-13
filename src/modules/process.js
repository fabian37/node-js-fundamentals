const process = require('process');

process.on('beforeExit', () => {
	console.log('El proceso va a terminar');
});
process.on('exit', () => {
	console.log('El proceso acabó');
	setTimeout(() => {
		console.log('Esto no se va a ver nunca');
	}, 0);
});

setTimeout(() => {
	console.log('Si se va a ver');
}, 0);

process.on('uncaughtException', (error, origin) => {
	console.log('Se nos ha olvidado capturar un error');
	// console.error(error);
	setTimeout(() => {
		console.log('Esto viene desde las excepciones');
	}, 0);
});
funcionQueNoExiste();
console.log('Si el error no se recoje no sale');
