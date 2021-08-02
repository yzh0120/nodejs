module.exports = function(app){
	app.all('*', function(req, res, next) {	
		// if( 
		// req.headers.origin == 'http://121.229.165.87'  
		// || req.headers.origin == 'http://yinzhou.xyz' 
		// || req.headers.origin == 'http://localhost:8889'
		// || req.headers.origin == 'http://localhost:8081'
		// ){
			res.header("Access-Control-Allow-Origin", req.headers.origin);
			res.header("Access-Control-Allow-Headers", "Origin,x-requested-with , Content-Type, Accept, Authorization");
			res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
		// }
	    next();
	 });
}