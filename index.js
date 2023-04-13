//archivo de pruebas

console.log('Prueba');

let i = 0;

setInterval(() => {
	console.log(i);
	i++;
	if (i > 5) {
		throw new Error('Esto es un error');
	}
	if (i > 6) {
		console.log('Final');
	}
}, 1000);
