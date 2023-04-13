function serompe() {
	return 3 + z;
}
function otraFuncion() {
	serompe();
}
function funcionAsincrona() {
	setTimeout(() => {
		try {
			serompe();
			console.log('Desde la funcion asincrona');
		} catch (error) {
			console.log('Hay un error en la funcion asincrona ' + error);
		}
	}, 0);
}

try {
	// otraFuncion();
	funcionAsincrona();
} catch (error) {
	console.log('Tenemos el siguiente error: ' + error);
}

console.log('Seguimos con el siguiente código');
