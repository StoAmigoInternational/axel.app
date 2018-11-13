/* -------------------------------------------------- */
/* MODULES
/* -------------------------------------------------- */

import es from "event-stream";
import injectFiles from "gulp-inject"; // Inject files.


/* -------------------------------------------------- */
/* HTML
/* -------------------------------------------------- */

//var jsStream = gulp.src(config.js.paths.map( function(base) { return config.paths.source + base } ), {read: false, allowEmpty: true}, {starttag: '<!-- inject:defer:{{ext}} -->'} );
//var cssStream = gulp.src(config.css.paths.map( function(base) { return config.paths.source + base } ), {read: false, allowEmpty: true} );

// TEST
export function htmlTest() {

	console.log("Compiling HTML...");

	const stylesheet = "'stylesheet'";

	// OPTIONS *Note: Leave as-is. These are the recommended values.
	const htmlminOptions = {
		  useShortDoctype: true,
		  collapseWhitespace: true,
		  minifyCSS: true,
		  minifyJS: true,
		  removeComments: true
	};


	// TASK
	return gulp.src( config.paths.source + config.html.paths )
			   .pipe(panini({
							 root: config.paths.source + config.html.root,
							 layouts: config.paths.source + config.html.layouts,
							 partials: config.paths.source + config.html.partials,
							 helpers: config.paths.source + config.html.helpers,
							 data: config.paths.source + config.html.data
							})
			   )
			   .pipe(htmlreplace({
								  base: {
										 src: "https://" + "s3-" + config.aws.region + ".amazonaws.com/" + config.aws.bucket + "/",
										 tpl: '<base href="%s">'
								  },

								  vendor: {
										   src: gulp.src( config.paths.source + config.html.vendors ),
										   tpl: "<script>%s</script>"
										  },

								  critical: {
											 src: gulp.src( config.paths.source + config.html.critical ),
											 tpl: "<style>%s</style>"
								  }

			   }, {keepUnassigned: true, keepBlockTags: true, resolvePaths: true} ))
			   //.pipe(defer())
			   .pipe(gulpif( !config.aws.upload, removeCode({removeBase: true}) ))
			   .pipe(gulpif( !config.options.serviceworker || !config.options.serviceworker && !production, removeCode({removeSW: true}) ))
			   .pipe(gulpif( !config.options.appBanner, removeCode({removeAppBanner: true}) ))
			   .pipe(noopener.overwrite())
			   .pipe(gulpif( production, htmlmin(htmlminOptions) ))
			   .pipe(gulp.dest( config.paths.build ))

			   .on("end", function () {

							console.log("Compiling on 2nd pass...");

							gulp.src( config.paths.build + "**/*.html" )

								.pipe(gulpif( !production, injectFiles(gulp.src( config.js.paths.map( function(base) { return config.paths.source + base }), {read: false, allowEmpty: true}), {relative: true}) ))

								.pipe(gulpif( !production, injectFiles(gulp.src( config.css.paths.map( function(base) { return config.paths.source + base }), {read: false, allowEmpty: true}), {relative: true}) ))

								.pipe(gulp.dest( config.paths.build ));




							return gulp.src( config.paths.source + config.html.modals, {base: config.paths.source} )
								.pipe(gulpif( production, htmlmin(htmlminOptions) ))
								.pipe(noopener.overwrite())
								.pipe(gulp.dest( config.paths.build ));

			   });

}


/* -------------------------------------------------- */
/* CONFIG FILE GENERATION
/* -------------------------------------------------- */

/* Note: These files should already come packaged with the repo.
		 Only generate these files if you've accidently delete them and are unable to recover them.
		 Unfortunately, this will not recover your previous settings.
*/

// CONFIG
export function generateConfig() {

	// Create data objects to write to JSON file.
	let json = {

		"options": {
			"site": "https://company.com",
			"production": true,
			"versioning": true,
			"serviceworker": true,
			"appBanner": true,
			"sourcemaps": false,
			"jsAttribute": "defer",
			"previewURL": "index.html"
		},

		"paths": {
			"source": "source/",
			"build": "build/"
		},

		"ga": {
			"track": true,
			"url": "company.com",
			"uid": "UA-92957315-1",
			"anonymizeIp": true,
			"bounceTime": "",
			"demographics": true,
			"linkAttribution": false,
			"minify": true,
			"nonceTag": false,
			"require": "urlChangeTracker",
			"sendPageView": true,
			"tagPlacement": "head"
		},

		"optimizations": {
			"autoprefix": true,
			"support": ["last 2 versions", "ie >= 9", "android >= 4.4", "ios >= 7"],
			"flexbox": true,
			"grid" : true
		},

		"images": {
			"paths": "images/",
			"optimizationLevel": 5,
			"interlaced": true,
			"progressive": true,
			"svgViewbox": true,
			"svgCleanup": false,
			"webp": true
		},

		"html": {
			"paths": "_pages/**/*.{html,hbs,handlebars}",

			"root": "_pages/",
			"layouts": "_layouts/",
			"partials": "_partials/",
			"helpers": "_helpers/",
			"data": "_data/",
			"modals": "modals/**/*.{html,hbs,handlebars}",

			"vendors": "_vendors/vendor.js",
			"critical": "css/critical.css"
		},

		"js": {
			"bundle": "app.js",
			"lint": true,

			"paths": ["lib/sample.js"]

		},

		"css": {
			"bundle": "app.css",
			"lint": false,

			"paths": ["css/sample.css"]

		},

		"sync": {
			"notify": true,

			"browsers": ["chrome"],
			"host": "",
			"https": false,
			"localOnly": false,
			"online": true,
			"port": "3000",

			"cors": true,
			"open": "external",
			"tunnel": "my-private-site",
			"xip": false,

			"codeSync": true,
			"injectChanges": true,
			"watch": true,

			"ghostMode": true,

			"reloadDebounce": 0,
			"reloadDelay": 1000,
			"reloadThrottle": 0,

			"scrollElements": [],
			"scrollElementMapping": [],
			"scrollProportionally": true,
			"scrollRestoreTechnique": "window.name",
			"scrollThrottle": 0,

			"logConnections": true,
			"logFileChanges": false,
			"logLevel": "info",
			"timestamps": true
		}

	}, data = JSON.stringify(json, null, "\t");


	// Check if configuration file exists.
	if ( fs.existsSync(configFile) ) {

		console.log("There's already an existing " + configFile + " file.");

		return gulp.src( configFile )
				   .pipe(open());

	} else {

		//console.log("Cound not find an existing " + configFile + " file. One will be created for you.\nFile generated and saved to: " + root);

		fs.writeFile(configFile, data, "utf8", function() {

			console.log(configFile + " file generated. Use this file for your production and build settings.");

			return gulp.src( configFile )
					   .pipe(open());

		});

	}

	//return done();

}


// METADATA
export function generateMetadata(done) {

	// Create data objects to write to JSON file.
	let json = {
	
		"/": {
			"name": "Company",
			"short_name": "Company",
			"url": "https://company.com/",
			"start_url": "index.html",
			"display": "standalone",
			"description": "The meta description is a snippet of up to about 155 characters – a tag in HTML – which summarizes a page's content. Search engines show the meta description in search results mostly when the searched-for phrase is within the description, so optimizing the meta description is crucial for on-page SEO.",

			"favicon-16": "assets/icons/favicon-16x16.png",
			"favicon-32": "assets/icons/favicon-32x32.png",
			"safari-pinned-tab": "assets/icons/safari-pinned-tab.svg",

			"image-icon-150": "assets/icons/mstile-150x150.png",
			"image-icon-180": "assets/icons/apple-touch-icon.png",
			"image-icon-192": "assets/icons/android-chrome-192x192.png",
			"image-icon-512": "assets/icons/android-chrome-512x512.png",

			"image-profile": "assets/social/profile.png",
			"image-cover": "assets/social/social.png",

			"theme": "#fff",
			"background": "#fff",

			"twitter": "@company",

			"og-locale": "en_US",
			"og-locale-alt": "",
			"og-type": "website",
			"og-image-width": 1200,
			"og-image-height": 630,

			"handheld-friendly": true,
			"web-app-capable": "no",

			"itunes-app-id": "000000000",
			"play-app-id": "com.company.app"
		}
	

	}, data = JSON.stringify(json, null, "\t");


	// Check if configuration file exists.
	if ( fs.existsSync(metadataFile) ) {

		console.log("There's already an existing " + metadataFile + " file.");

		return gulp.src( metadataFile )
				   .pipe(open());

	} else {

		console.log("Cound not find an existing " + metadataFile + " file. One will be created for you.\nFile generated and saved to: " + root);

		fs.writeFile(metadataFile, data, "utf8", function() {

			console.log(metadataFile + " file generated. Use this file for your server info.");

			return gulp.src( metadataFile )
					   .pipe(open());

		});

	}

	return done();

}


/* -------------------------------------------------- */
/* ACTIONS
/* -------------------------------------------------- */

// VERSION
function ver(done) {

	console.log("//////////////////////////////");
	console.log("//////// BUILD ENGINE ////////");
	console.log("////////   VER. 1.0   ////////");
	console.log("//////////////////////////////");
	
	return done();

}


// COMPLETED
function completed(done) {

	console.log("///////////////////////////////");
	console.log("////// TASK(S) COMPLETED //////");
	console.log("///////////////////////////////");

	return done();

}
