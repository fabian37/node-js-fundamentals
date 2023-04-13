function hola(nombre) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Hola ' + nombre);
			resolve(nombre);
		}, 2000);
	});
}

function hablar(nombre) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Estoy hablando');
			reject('Hay un error');
		}, 1000);
	});
}

function chao(nombre) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Chao ' + nombre);
			resolve(nombre);
		}, 1000);
	});
}

//---
console.log('Iniciando el proceso');
hola('Fabian')
	.then(hablar)
	.then(hablar)
	.then(hablar)
	.then(hablar)
	.then(hablar)
	.then(chao)
	.catch((error) => {
		console.error('Ha habido un error');
		console.error(error);
	})
	.finally(() => console.log('Terminando el proceso'));
