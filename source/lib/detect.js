/* -------------------------------------------------- */
/* FEATURE DETECTION (MODERNIZR)
/* -------------------------------------------------- */

/*
var hasBackdropFilter = Modernizr.backdropfilter,
	hasCSSFilters = Modernizr.cssfilters,
	hasCSSGrid = Modernizr.cssgrid,
	hasCSSGridLegacy = Modernizr.cssgridlegacy,
	hasCSSPointerEvents = Modernizr.csspointerevents,
	hasCSSvhUnit = Modernizr.cssvhunit,
	hasCSSvmaxUnit = Modernizr.cssvmaxunit,
	hasCSSvminUnit = Modernizr.cssvminunit,
	hasCSSvwUnit = Modernizr.cssvwunit,
	hasForceTouch = Modernizr.forcetouch,
	hasFullscreen = Modernizr.fullscreen,
	hasHover = Modernizr.hovermq,
	hasJPEG2000 = Modernizr.jpeg2000,
	hasJPEGXR = Modernizr.jpegxr,
	hasDeviceMotion = Modernizr.devicemotion,
	hasDeviceOrientation = Modernizr.deviceorientation,
	hasObjectFit = Modernizr.objectfit,
	hasPassiveEventListeners = Modernizr.passiveeventlisteners,
	hasPicture = Modernizr.picture,
	hasPointerEvents = Modernizr.pointerevents,
	hasPointerMQ = Modernizr.pointermq,
	hasScrollSnapPoints = Modernizr.scrollsnappoints,
	hasSMIL = Modernizr.smil,
	hasSRCSizes = Modernizr.sizes,
	hasSRCSet = Modernizr.srcset,
	hasTouch = Modernizr.touchevents,
	hasWebP = Modernizr.webp,
	hasWillChange = Modernizr.willchange;
*/

var $hasTouch = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
	//$hasTouch = Modernizr.touchevents; // Unreliable. Use above method instead.


/* -------------------------------------------------- */
/* CACHE SELECTORS
/* -------------------------------------------------- */

var isiOS = $$(".is-ios"),
	isAndroid = $$(".is-android"),
	isMobile = $$(".is-mobile"),
	//isTablet = $$(".is-tablet"),
	isDesktop = $$(".is-desktop");


/* -------------------------------------------------- */
/* SCREEN / DEVICE
/* -------------------------------------------------- */

var $isSmallScreen = Modernizr.mq("(min-width: 0) and (max-width: 640px)"),
	$isMediumScreen = Modernizr.mq("(min-width: 641px) and (max-width: 1024px)"),
	$isLargeScreen = Modernizr.mq("(min-width: 1025px)"), // Anything above this number will be considered large screen.
	
	$isAndroid = navigator.userAgent.toLowerCase().indexOf("android") > -1,
	$isiPhone = navigator.userAgent.toLowerCase().indexOf("iphone") > -1,
	$isiPad = navigator.userAgent.toLowerCase().indexOf("ipad") > -1,
	$isiPod = navigator.userAgent.toLowerCase().indexOf("ipod") > -1,
	
	$isMobile = $isAndroid || $isiPhone || $isiPad || $isiPod,
	
	$isPortrait = window.innerWidth < window.innerHeight,
	$isLandscape = window.innerWidth > window.innerHeight,
	
	//$orientationPortrait = $isMobile && orientation === 0,
	//$orientationLandscape = $isMobile && orientation === 90,
	
	$isDesktop = !$isMobile,
	$isTouchScreen = $hasTouch && isDesktop; // Detects any touch-enabled device that is not a mobile device.


/* -------------------------------------------------- */
/* DEVICES
/* -------------------------------------------------- */

	/* -------------------------------------------------- */
	/* SMALL SCREEN
	/* -------------------------------------------------- */

	if ( $isSmallScreen ) {
		
		console.log("Viewing on small screen: " + $$(pageContent).width() + "px" );

	}


	/* -------------------------------------------------- */
	/* MEDIUM SCREEN
	/* -------------------------------------------------- */

	if ( $isMediumScreen ) {
		
		console.log("Viewing on medium screen: " + $$(pageContent).width() + "px" );

	}


	/* -------------------------------------------------- */
	/* LARGE SCREEN
	/* -------------------------------------------------- */

	if ( $isLargeScreen ) {
		
		console.log("Viewing on large screen: " + $$(pageContent).width() + "px" );

	}


	/* -------------------------------------------------- */
	/* ANDROID
	/* -------------------------------------------------- */

	if ( $isAndroid ) {
		
		console.log("Android device detected.");
		
		isiOS.remove();
		isDesktop.remove();

	}


	/* -------------------------------------------------- */
	/* APPLE
	/* -------------------------------------------------- */

	if ( $isiPhone || $isiPad || $isiPod ) {
		
		console.log("iOS device detected.");
		
		isAndroid.remove();
		isDesktop.remove();
		
	}


	/* -------------------------------------------------- */
	/* MOBILE
	/* -------------------------------------------------- */

	if ( $isMobile ) {
		
		console.log("Viewing on mobile device.");
		
		isDesktop.remove();
		
	} else {
		
		isMobile.remove();
		
	}


	/* -------------------------------------------------- */
	/* DESKTOP
	/* -------------------------------------------------- */

	if ( $isDesktop ) {
		
		console.log("Viewing on desktop / laptop.");
		
		isMobile.remove();
		
	} else {
		
		isDesktop.remove();
		
	}


/* -------------------------------------------------- */
/* DETECT TOUCH
/* -------------------------------------------------- */

if ( $hasTouch ) {
	
	console.log("This device is touch enabled and will disable all :hover states.");

	try {

		// Prevent exception on browsers not supporting DOM 'styleSheet' properly.
		for (var si in document.styleSheets) {
			var styleSheet = document.styleSheets[si];
			if (!styleSheet.rules) continue;

			for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
				if (!styleSheet.rules[ri].selectorText) continue;
				if (styleSheet.rules[ri].selectorText.match(":hover")) {
					
					styleSheet.deleteRule(ri);

				}
			}
		}

	}

	catch (ex) {

	}

}


/* -------------------------------------------------- */
/* BROWSER
/* -------------------------------------------------- */

	var browserDetect = {
		init: function() {
			"use strict";

			this.browser = this.searchString(this.dataBrowser) || "Other";
			this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "Unknown";
		},
		searchString: function(data) {
			"use strict";

			for (var i = 0; i < data.length; i++) {
				var dataString = data[i].string;
				this.versionSearchString = data[i].subString;

				if (dataString.indexOf(data[i].subString) !== -1) {
					return data[i].identity;
				}
			}
		},
		searchVersion: function(dataString) {
			"use strict";

			var index = dataString.indexOf(this.versionSearchString);
			if (index === -1) {
				return;
			}

			var rv = dataString.indexOf("rv:");
			if (this.versionSearchString === "Trident" && rv !== -1) {
				return parseFloat(dataString.substring(rv + 3));
			} else {
				return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
			}
		},

		dataBrowser: [{
				string: navigator.userAgent,
				subString: "Edge",
				identity: "MS Edge"
			}, {
				string: navigator.userAgent,
				subString: "MSIE",
				identity: "Explorer"
			}, {
				string: navigator.userAgent,
				subString: "Trident",
				identity: "Explorer"
			}, {
				string: navigator.userAgent,
				subString: "Firefox",
				identity: "Firefox"
			}, {
				string: navigator.userAgent,
				subString: "Opera",
				identity: "Opera"
			}, {
				string: navigator.userAgent,
				subString: "OPR",
				identity: "Opera"
			},

			{
				string: navigator.userAgent,
				subString: "Chrome",
				identity: "Chrome"
			}, {
				string: navigator.userAgent,
				subString: "Safari",
				identity: "Safari"
			}
		]
	};

	browserDetect.init();

	var $isChrome = browserDetect.browser === "Chrome",
		$isExplorer = browserDetect.browser === "Explorer",
		$isEdge = browserDetect.browser === "MS Edge",
		$isFirefox = browserDetect.browser === "Fireforx",
		$isOpera = browserDetect.browser === "Opera",
		$isSafari = browserDetect.browser === "Safari";

	console.log("You are using " + browserDetect.browser + " with version " + browserDetect.version);


	/* -------------------------------------------------- */
	/* CHROME
	/* -------------------------------------------------- */

	if ( $isChrome ) {

	}


	/* -------------------------------------------------- */
	/* EDGE / EXPLORER
	/* -------------------------------------------------- */

	if ( $isExplorer || $isEdge ) {

		// Create elements for IE (8 and earlier), cause IE sucks.
		/*
		document.createElement("header");
		document.createElement("nav");
		document.createElement("main");
		document.createElement("footer");
		document.createElement("section");
		document.createElement("article");
		document.createElement("figure");
		document.createElement("figcaption");
		document.createElement("aside");
		*/

		//$$("[class*='drop-shadow-']").addClass("box-shadow-xl");
		$$("svg.top-offset").removeClass("drop-shadow-md");
	}


	/* -------------------------------------------------- */
	/* EXPLORER
	/* -------------------------------------------------- */

	if ( $isExplorer ) {
		console.log("///////////////////////////////////////////////////////////////");
		console.log("Unable to render this app! This project needs to be compiled.");
		console.log("In your CLI:");
		console.log("cd THIS APP'S FOLDER LOCATION");
		console.log("gulp build");
		console.log("Once compiled check '/build' folder to view this app.");
		console.log("///////////////////////////////////////////////////////////////");	}


	/* -------------------------------------------------- */
	/* FIREFOX
	/* -------------------------------------------------- */

	if ( $isFirefox ) {

	}


	/* -------------------------------------------------- */
	/* OPERA
	/* -------------------------------------------------- */

	if ( $isOpera ) {

	}


	/* -------------------------------------------------- */
	/* SAFARI
	/* -------------------------------------------------- */

	if ( $isSafari ) {

	}
