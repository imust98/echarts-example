var path = require('path');
module.exports = {
	devtool:'source-map',
	entry:{
		main:'./index'
	},
	output:{
		path:path.join(__dirname,'./dist'),
		filename:'bundle.js'
	}
}