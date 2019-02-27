const express 					= require('express');
const next 						= require('next');
// store the base path
global.__base 					= __dirname;
// Configurations
const configuration 			= require(`${global.__base}/config`);
const { port, name, appDomain } = configuration;

// Next app
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
	const server = express();
    
    // use Next router instead
	server.get('*', (req, res) => {
	    return handle(req, res)
	});
    
	server.listen(port, (err) => {
		if (err) throw err;
		console.log(`The ${name} listening at ${appDomain}`);
  	});
}).catch(ex => {
	console.error(ex.stack);
	process.exit(1);
})
