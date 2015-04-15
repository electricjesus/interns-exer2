// https://www.npmjs.com/package/mysql
var mysql = require('mysql');
// https://www.npmjs.com/package/csv
var csv = require('csv');
// https://www.npmjs.com/package/q
var q = require('q');
// http://csv.adaltas.com/parse/examples/
var parse = require('csv-parse');

var fs = require('fs');


var parser = parse( {delimiter: ','}, function(err, data){
		  if(err) {
		  	console.log("CSV error.")
		  	process.exit(1);
		  } else {
		  	data.forEach( function(row, index){
		  		if(index)
		  		console.log(row);
		  	});
		  }
});



fs.createReadStream(__dirname+'/test.csv').pipe(parser);
