/* -------------------------------------------------- */
/* DATA ATTRIBUTES
/* -------------------------------------------------- */

var utilDataAttributes = function() {
	"use strict";
	
	/* -------------------------------------------------- */
	/* COLOR
	/* -------------------------------------------------- */

	var dataColor = document.querySelectorAll("[data-color]");

	for (var iColor = 0; iColor < dataColor.length; iColor++) {
		 var hexColor = dataColor[iColor].getAttribute("data-color");
		 dataColor[iColor].style.backgroundColor = hexColor;
	}


	/* -------------------------------------------------- */
	/* PAGE
	/* -------------------------------------------------- */

	var dataPage = document.querySelectorAll("[data-page]");
	
	for (var iPage = 0; iPage < dataPage.length; iPage++) {
		 var idPage = dataPage[iPage].getAttribute("data-page");
	}
	

	/* -------------------------------------------------- */
	/* IMAGE
	/* -------------------------------------------------- */

	var dataImage = document.querySelectorAll("[data-image]");

	if ( Modernizr.webp && Modernizr.webp.lossless && Modernizr.webp.alpha && Modernizr.webp.animation ) {

		console.log("WebP supported.");

		for (var iImage = 0; iImage < dataImage.length; iImage++) {
			var urlImage = dataImage[iImage].getAttribute("data-image").replace(/jpg|png/ig, "webp");
			dataImage[iImage].style.backgroundImage = "url('" + urlImage + "')";
		}

		//img.src = img.getAttribute('data-webp');

	} else {

		console.log("WebP not supported.");

		for (var iImage = 0; iImage < dataImage.length; iImage++) {
			var urlImage = dataImage[iImage].getAttribute("data-image").replace(/webp/ig, "png");
			dataImage[iImage].style.backgroundImage = "url('" + urlImage + "')";
		}

		//img.src = img.getAttribute('data-jpg');

	}
	
	
}; // END utilDataAttributes


/* -------------------------------------------------- */
/* PRINT
/* -------------------------------------------------- */

var utilPrint = function() {
	"use strict";
	
	// CACHE SELECTORS
	var print = $$(".print");
	
	
	// FUNCTIONS
    print.click(function() {

        $$(pageContent).print({
            addGlobalStyles : false,
            mediaPrint: false,
            stylesheet : null,
            rejectWindow : true,
            noPrintSelector : ".no-print",
            iframe : true,
            append : null,
            prepend : "<div class='display-block position-absolute left p4 font-header text-primary' style='top: 1em;'>AXEL</div> <div class='display-block position-absolute right p10 font-paragraph text-dark-grey' style='top: 2em;'>Last Updated: 005.31.18</div>"
        });

    });
    
	
	// HELPERS
    navbar.addClass("no-print");
    toolbar.addClass("no-print");
    footer.addClass("no-print");
    hero.addClass("no-print");


}; // END utilPrint


/* -------------------------------------------------- */
/* VISIBILITY API
/* -------------------------------------------------- */


var utilPageVisibility = function() {
	"use strict";
	
	// CACHE SELECTORS
	var pageVisibility = $$(".page-visibility"),
		pageVisibilityIgnore = $$(".page-visibility-ignore");


	// VARS
	var page = new Visibility({
		onHidden: isPageHidden,
		onVisible: isPageVisible
	});


	// FUNCTIONS / CALLBACKS
	function isPageHidden () {
		//console.log("Page is inactive.");

		TweenMax.set(pageVisibility.not(pageVisibilityIgnore), {autoAlpha: 0});

		animPauseAll();

	}


	function isPageVisible () {
		//console.log("Page is active");

		animController();

		TweenMax.staggerTo(pageVisibility.not(pageVisibilityIgnore), 0.5, {autoAlpha: 1, delay: 0.5, ease: Power2.easeInOut}, 0.12);

		TweenMax.staggerFrom($$(".profile-user").not(".active").find(".duotone-reset"), 1, {autoAlpha: 0, delay: 0, ease: Power2.easeInOut}, 0.12);
		TweenMax.staggerFrom($$(".profile-user").not(".active").find(".duotone-process"), 1, {autoAlpha: 0, delay: 0.25, ease: Power2.easeInOut}, 0.12);
		TweenMax.staggerFrom($$(".profile-info").children(), 0.5, {autoAlpha: 0, delay: 0.5, ease: Power2.easeInOut}, 0.12);

	}
	
	
}; // END utilPageVisibility


/* -------------------------------------------------- */
/* LAZY LOAD / INTERSECTION OBSERVER
/* -------------------------------------------------- */

var utilAssetObserver = function() {

	/* -------------------------------------------------- */
	/* IMAGE RESIZE
	/* -------------------------------------------------- */
	
	// VARS
    var imageBackground = $(".img-bg-resize");
	
	
	// PROPERTIES
	// Set default styling and properties.
	//$imageBackground.parent().css({"height" : "600px"});
	imageBackground.parent().addClass("background-pattern");
	
	imageBackground.css({"width": "100%",
						 "height": "100%", // Safari does not render '100vh' properly.
						 "min-height": "400px",
						 //"background-position": "center center",
						 "background-repeat": "repeat",
						 //"background-size": "cover",
						 "transition-property": "background-position"});

	
	// LOOP
	var imageBackgroundResize = function () {
	
		imageBackground.each(function() {

			// Cache selectors.
			var self = $(this);

			// Get the 'background-image'.
			var background = self.css("background-image");
			
			// If the background image is anything other than 'none'.
			if (background !== "none") {
				
				// Find and replace 'url()' to get the pure image URL
				background = background.replace('url("','').replace('")','');

				// Create new 'Image' instance and set path to our background.
				var bg = new Image();
				bg.src = background;

				// We now have serveral vars availible to pass through to the plugin.
				// self = the element.
				// background = the url.
				// bg.width = image width.
				// bg.height = image height.

				//console.log(bg.width);
				//console.log(bg.height);
                   
				// Check if image has loaded and apply size and properties.
				bg.onload = function () {
   					//console.info("Background image loaded. Calculating size.");
 
					self.css({"width" : "100%",
							  "height" : bg.height,
							  //"min-height" : "400px",
							  "background-repeat" : "no-repeat"});

					
					// Recalculate 'background-image' height and resize proportionately.
					self.parent().css({"height" : bg.height / 1.25});

					
					if ( $isMobile && orientation === 0 ) {
			
						//console.log( "Orientation Mode: Portrait / " + orientation);
						self.parent().css({"height" : bg.height / 1});

						
					} else if ( $isMobile && orientation === 90 ) {
						
						//console.log( "Orientation Mode: Landscape / " + orientation);
						self.parent().css({"height" : bg.height * 1});

					}
					
					
				};

			}
			
		});
	
	};
	
	
	// RESIZE
	$$(pageContent).on("resize orientationchange", _.debounce(imageBackgroundResize, $updateInterval));

	
	/* -------------------------------------------------- */
	/* PRELOADER
	/* -------------------------------------------------- */

	//$$(".lazy").before('<div class="img-preloader"><span class="fa fa-spinner fa-pulse" aria-hidden="true"></span></div>').addClass("page-visibility");
	
	$$(".lazy").addClass("page-visibility");
	
	var removePreloaders = function() {

		$$(".loaded").prev().remove();
		$$("[data-was-processed]").prev().remove();

	};
	
	
	/* -------------------------------------------------- */
	/* INTERSECTION OBSERVER
	/* -------------------------------------------------- */
	
	// FUNCTIONS / CALLBACKS
	var lazyLog = function(eventName, element) {
		
		console.log( eventName, element.getAttribute("data-src") );
		
	};
		
	
	var lazyLoading = function(element) {		
		
		$$(element).imagesLoaded({ background: true })
		
			.always( function() {
			
				lazyLog("LOADING...", element);			
				TweenMax.set(element, {autoAlpha: 0});
			
			})
			
			.progress( function(instance, image) {
    			//var result = image.isLoaded ? 'loaded' : 'broken';
				//console.log( 'image is ' + result + ' for ' + image.img.src );
  			});
		
	};

	
	var lazySet = function(element) {
		
		$$(element).imagesLoaded({ background: true })

			.done( function() {
			
				lazyLog("SET", element);
				TweenMax.to(element, 0.5, {autoAlpha: 1, delay: 0.25, ease: Power2.easeOut});
				imageBackgroundResize();
			
			})
		
			.fail( function() {
			
				lazyLog("UNABLE TO LOAD", element);
			
			});

	};

	
	// OPTIONS
	var lazyOptions = {container: document,
					   elements_selector: ".lazy",
					   threshold: 0,
					   load_delay: 100,
					   data_src: "src",
					   data_srcset: "srcset",
					   data_sizes: "sizes",
					   class_loading: "loading",
					   class_loaded: "loaded",
					   class_error: "error",
					   callback_enter: lazyLoading,
					   callback_load: null,
					   callback_set: lazySet,
					   callback_error: null,
					   to_webp: true
	};
	
	
	// INIT
	new LazyLoad(lazyOptions);
	
	
}; // END utilIntersectionObserver
