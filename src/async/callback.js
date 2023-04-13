function hola(nombre, callback) {
	setTimeout(() => {
		console.log('Hola ' + nombre);
		callback();
	}, 2000);
}

function chao(nombre, callback) {
	setTimeout(() => {
		console.log('Chao ' + nombre);
		callback();
	}, 1000);
}

console.log('Iniciando proceso');

hola('Fabian', function () {
	chao('Fabian', function () {
		console.log('Terminando proceso');
	});
});
