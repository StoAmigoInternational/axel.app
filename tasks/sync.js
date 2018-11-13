//sync.js

/* -------------------------------------------------- */
/* MODULES
/* -------------------------------------------------- */
/* -------------------------------------------------- */
/* CONFIG FILE
/* -------------------------------------------------- */

const configFile = "config.json",
	  revFile = "rev.json",
	  serverFile = "conn.json",
	  metadataFile = "metadata.json";


// CORE
import gulp from "gulp"; // Core Gulp module.
import fs from "fs";
import path from "path"; // Resolves pathing issues.



/* -------------------------------------------------- */
/* SOURCE PATHS
/* -------------------------------------------------- */

const config = JSON.parse(fs.readFileSync(configFile)),
	  //server = JSON.parse(fs.readFileSync(serverFile)),
	  dir = path.resolve, // path.join
	  root = dir(__dirname);


/* -------------------------------------------------- */
/* CONFIG FILE
/* -------------------------------------------------- */







	function task1(done) {

		console.log("Performing some task...");

		done();

	}



// JS
function task2() {

	return gulp.src( config.paths.source + "lib/*.js" ) 
			   .pipe(gulpif( config.js.lint, jshint() ))
			   .pipe(gulpif( config.js.lint, jshint.reporter() ));

}


gulp.task("testing", gulp.series(task2));

