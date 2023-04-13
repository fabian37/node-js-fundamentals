function hola(nombre, callback) {
	setTimeout(() => {
		console.log('Hola ' + nombre);
		callback(nombre);
	}, 2000);
}

function hablar(callbackHablar) {
	setTimeout(() => {
		console.log('Estoy hablando');
		callbackHablar();
	}, 1000);
}

function chao(nombre, callback) {
	setTimeout(() => {
		console.log('Chao ' + nombre);
		callback(nombre);
	}, 1000);
}

function conversacion(nombre, veces, callback) {
	if (veces > 0) {
		hablar(() => {
			conversacion(nombre, --veces, callback);
		});
	} else {
		chao(nombre, callback);
	}
}

console.log('Iniciando proceso');
hola('Fabian', (nombre) => {
	conversacion(nombre, 3, () => {
		console.log('Proceso terminado');
	});
});

// hola('Fabian', function () {
// 	hablar(() => {
// 		hablar(() => {
// 			hablar(() => {
// 				chao('Fabian', function () {
// 					console.log('Terminando proceso');
// 				});
// 			});
// 		});
// 	});
// });
