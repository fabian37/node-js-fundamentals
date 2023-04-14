const bcrypt = require('bcrypt');

// console.log(bcrypt);
let password = 'Fabian123!';

bcrypt.hash(password, 4, (err, encrypted) => {
	console.log(encrypted);
	bcrypt.compare('Fabian123!', encrypted, (err, same) => {
		console.log(same);
	});
});
