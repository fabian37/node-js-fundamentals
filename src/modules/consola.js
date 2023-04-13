console.log('Hola');
console.info('Hola');
console.error('Hola en rojo');
console.warn('Warning o advertencia');
console.table([
	{ a: 21, b: 'Text' },
	{ a: 15, b: 'Text 2' },
	{ a: 54, b: 'Text 3' },
]);
console.group('Conversacion:');
console.log('- Hola');
console.log('- Cómo estás?');
console.groupEnd('Conversacion');
console.log('Otro console log');
console.count('segundos');
console.count('segundos');
console.count('segundos');
console.count('segundos');
console.countReset('segundos');
console.count('segundos');
