/* -------------------------------------------------- */
/* FOR REFERENCE
/* -------------------------------------------------- */

/*
var hostRootDomain = "domain.com";
var hostDomainEN = "en.domain.com";
var hostDomainES = "es.domain.com";

var currentHost = location.host;
var currentURLLocation = location.href;
var currentURLPath = location.pathname;
var currentURLHash = location.hash;
*/


/* -------------------------------------------------- */
/* FOR REFERENCE
/* -------------------------------------------------- */

var components = function() {

	//comAnimGradient();
	//comParallax();
	//comParticles();
	//comTilt();
	comEmergence();
	comModal();
	comTeam();
	comBlog();
	comAccordion();
	comSlider();
	
	utilPageVisibility();
	
	animController();

};

var core = function() {
	
	uiInit();
	uiLinkDelegation();
	uiScrollEvents();
	uiSmoothScroll();
	uiNav();
	uiButtons();
	uiRelayout();
	
	utilDataAttributes();
	utilPrint();
	utilAssetObserver();
	
	textFX3D();
	
	//hashNav();
	pages();
	
};


/* -------------------------------------------------- */
/* FUNCTIONS
/* -------------------------------------------------- */

// ENABLE / DISABLE CONTENT
var disableContent = function() {		
	"use strict";
	//console.log("Content disabled.");

	html.css({"overflow-x" : "hidden",
			  "overflow-y" : "hidden"
			});

};

var enableContent = function() {		
	"use strict";
	//console.log("Content enabled.");
	
	html.css({"overflow-x" : "hidden",
			  "overflow-y" : "scroll"
			});
};


/* -------------------------------------------------- */
/* PRELOADER
/* -------------------------------------------------- */


// ANIMATION
if ( $usePreloader ) {
	
	/* -------------------------------------------------- */
	/* DEFAULTS
	/* -------------------------------------------------- */
	
	TweenMax.set(body, {autoAlpha: 1});
	
	
	/* -------------------------------------------------- */
	/* PRELOADING START
	/* -------------------------------------------------- */
	
	var tlPreloaderStart = new TimelineMax({paused: true});
	
		tlPreloaderStart.call(disableContent)
						.to(preloader, 0.25, {display: "block", opacity: 1, ease: Power2.easeOut})
						.to([container, navPanel, navbar, toolbar], 0.5, {display: "block", autoAlpha: 1, ease: Power2.easeOut});
	
	
	/* -------------------------------------------------- */
	/* PRELOADING COMPLETE
	/* -------------------------------------------------- */
	
	var tlPreloaderEnd = new TimelineMax({paused: true});

		tlPreloaderEnd.to([container, navPanel, navbar, toolbar], 0.25, {opacity: 1, ease: Power2.easeOut})
					  .to(preloader, 0.25, {autoAlpha: 0, ease: Power2.easeOut})
					  .call(enableContent);
	

} else {
	
	enableContent();
	//preloader.remove();
	TweenMax.set([container, navPanel, navbar, toolbar], {display: "block", opacity: 1, delay: 0.75 });
	
}


/* -------------------------------------------------- */
/* PREPARE APIs / PLUGINS
/* -------------------------------------------------- */

// (document).ready() or document.ondomcontentready.
onLoad(function () {
	"use strict";
	console.log("Loading...");
    
    if ( $usePreloader ) {
        
        tlPreloaderStart.play(0).timeScale(1).delay(0);
        
    }

},


// (window).load() or document.ondomcontentloaded.
function () {
	"use strict";
	console.log("Content ready: All assets and resources loaded.");

    if ( $usePreloader ) {
        
        tlPreloaderEnd.play(0).timeScale(1).delay(1);
		
		TweenMax.delayedCall(tlPreloaderEnd.duration() + $delayInterval, components);
        
    } else {
		
		TweenMax.delayedCall($delayInterval, components);

	}
	
	
	// INIT COMPONENTS / WIDGETS / PLUGINS
	core();


});


/* -------------------------------------------------- */
/* LOCKED AND LOADED
/* -------------------------------------------------- */

function onLoad(loading, loaded) {
	"use strict";
	
	if ( document.readyState === "complete" ) {
		
		return loaded();
		
	}
	
	loading();

	if ( window.addEventListener ) {
		
		window.addEventListener("load", loaded, false);
		
	} else if ( window.attachEvent ) {
		
		window.attachEvent("onload", loaded);
		
	}
}
