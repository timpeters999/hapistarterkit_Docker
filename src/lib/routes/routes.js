var Routes = [
	{
		path: '/{path*}',
		method: 'GET',
		handler: {
			directory: {
				path: './lib/public',
				listing: false
			}
		},
			config:{
				auth:false
			}
	},
	{
			method: 'GET',
			path: '/',
			handler: function (request, reply) {
				var response = reply.file('./lib/templates/index.html');
			},
			config:{
				auth:false
			}
	}
];

module.exports = Routes;