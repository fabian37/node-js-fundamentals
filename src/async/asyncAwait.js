async function hola(nombre) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Hola ' + nombre);
			resolve(nombre);
		}, 3000);
	});
}

async function hablar() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Estoy hablando');
			resolve('Hay un error');
		}, 2000);
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
async function main() {
	await hola('Fabian');
	await hablar();
	await chao('Fabian');
}

console.log('Primer clg');
main();
console.log('Segundo clg');
