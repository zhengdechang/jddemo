let cors = require('cors');
let index = require('./index.js');
let users = require('./users.js');
let test = require('./test.js');

let RoutesConfig = (app)=>{
	app.use('/', index);
	app.use('users', users);
	app.use('/test', cors());
	app.use('/test', test);
};

module.exports = RoutesConfig;
