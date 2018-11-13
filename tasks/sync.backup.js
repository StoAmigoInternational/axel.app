//sync.js

import util from "util";
import DefaultRegistry from "undertaker-registry";


/* -------------------------------------------------- */
/* CONFIG FILE
/* -------------------------------------------------- */

const configFile = "config.json",
	  revFile = "rev.json",
	  serverFile = "conn.json",
	  metadataFile = "metadata.json";


/* -------------------------------------------------- */
/* SOURCE PATHS
/* -------------------------------------------------- */

const config = JSON.parse(fs.readFileSync(configFile)),
	  //server = JSON.parse(fs.readFileSync(serverFile)),
	  dir = path.resolve, // path.join
	  root = dir(__dirname);







function syncRegistry() {
  DefaultRegistry.call(this);
}

util.inherits(syncRegistry, DefaultRegistry);




syncRegistry.prototype.init = function(gulp) {



	gulp.task("mytask", function(done) {

		console.log("Performing some task...");

		return done();

	});


	gulp.task("mytask2", function(done) {

		gulp.src( config.paths.source + "lib/*.js" ) 
			.pipe(gulpif( config.js.lint, jshint() ))
			.pipe(gulpif( config.js.lint, jshint.reporter() ));

		return done();

	});









};





module.exports = new syncRegistry();