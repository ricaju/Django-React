const webpack = require('webpack');
const WebpackServer = require('webpack-dev-server');
const config = require('./webpack.config.js');

new WebpackServer(webpack(config), {
	publicPath: config.output.publicPath,
 	hot: true,
	inline: true,
	historyApiFallback: true
}).listen(3000, '0.0.0.0', function (err, result){
	if (err){
		console.log(err)
	}
	console.log('server radi i sluša localhost:3000')
});
