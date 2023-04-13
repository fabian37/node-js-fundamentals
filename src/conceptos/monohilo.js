console.log('Primer console log');

let i = 0;
setInterval(() => {
	console.log(i);
	i++;
	if (i > 4) {
		throw new Error('Error es mayor a 4');
	}
	if (i > 5) {
		console.log('Soy el 5');
	}
}, 1000);

console.log('Último console log');
