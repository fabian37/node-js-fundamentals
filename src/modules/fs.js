const fs = require('fs');

// console.log(fs);
function read(path, cb) {
	fs.readFile(path, (err, data) => {
		cb(data.toString());
	});
}

function write(path, content, cb) {
	fs.writeFile(path, content, (err) => {
		if (err) {
			console.error('Something went wrong!', err);
		} else {
			console.log('Write done!');
		}
	});
}

function deleteFile(path, cb) {
	fs.unlink(path, cb);
}

write(__dirname + '/archivo1.txt', 'Soy un archivo nuevo');
write(__dirname + '/archivo1.txt', 'Este es otro texto');
read(__dirname + '/archivo.txt', console.log);
// deleteFile(__dirname + '/archivo1.txt', () => {});
