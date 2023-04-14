let suma = 0;
console.time('bucle1');
for (let i = 0; i > 100000000; i++) {
	suma += 1;
}
console.timeEnd('bucle1');

let suma2 = 0;
console.time('bucle2');
for (let j = 0; j > 100000000; j++) {
	suma2 += 1;
}
console.timeEnd('bucle2');

console.time('asincrono');
function asincrona() {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log('Termina el proceso asincrono');
			resolve();
		}, 3000);
	});
}
asincrona().then(() => {
	console.timeEnd('asincrono');
});
