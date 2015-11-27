var Hapi = require('hapi');

// Change working directory for Docker/Linux
//it just forces the working directory to be the working directory of app.js.
//might be overkill
process.chdir(__dirname);

//crank up the server; you can pass in port number during Docker Run command
//and access it like:  server.connection({ port: process.env.PORT });
var server = new Hapi.Server();
server.connection({ port: 1200 });

//i'm just used to using vision:  https://www.npmjs.com/package/vision
server.register(require('vision'), function (err) {
    if (err) {
        console.log("Failed to load vision.");
    }
	
	server.views({
		engines:{
			html: require('handlebars')
		},
		path: './templates'
	})
});

//you can use hapi without this:  https://www.npmjs.com/package/inert
server.register(require('inert'), function (err) {
    if (err) {
        throw err;
    }
	server.route(require('./lib/routes/routes'));

	server.start(function(){
		console.log('listening on ' + server.info.uri);
	});
});
