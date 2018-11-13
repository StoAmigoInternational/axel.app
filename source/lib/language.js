/* -------------------------------------------------- */
/* MODAL
/* -------------------------------------------------- */

TweenMax.set("#language-options", {autoAlpha: 0, scale: 0.9});

function languageOptions() {
	"use strict";

	TweenMax.to("#language-options", 0.5, {display: "block", autoAlpha: 1, scale: 1, ease: Back.easeInOut});
	tlOverlay.play();

}

/* -------------------------------------------------- */
/* SAMPLE
/* -------------------------------------------------- */

// Create cookie object to reference if cookie is stored.
var cookieCurrentHash = "user";
var valueCurrentHash = "value";

// Define vars for current url.
//var currentHost = window.location.host; // Ex: www.google.com
//var currentURLLocation = window.location.href; // Ex: https://google.com
//var currentURLPath = window.location.pathname; // Ex: https://google.com/example/example.html
//var currentURLHash = window.location.hash; // Ex: https://google.com/#example

// Check for cookie.
//var currentSliderItemIndexHash = window.location.hash;

var setCookieSliderItemIndexHash = function() {

    console.log("Cookie set to: " + valueCurrentHash );
    Cookies.set(cookieCurrentHash, valueCurrentHash);



};

var getCookieSliderItemIndexHash = function () {

    if (Cookies("user")) {	

        console.log("Cookie found, redirecting to: " +  sliderItemIndexDataID );
        window.location.hash = valueCurrentHash;

    } else {

        console.log("Cookie not found.");
        Cookies.set(cookieCurrentHash, valueCurrentHash);

    }

};

//getCookieSliderItemIndexHash();

/* -------------------------------------------------- */
/* LET'S GET BAKING!
/* -------------------------------------------------- */

/* For reference.
host: "stackoverflow.com",
hostname: "stackoverflow.com",
href: "http://stackoverflow.com/questions/2300771/jquery-domain-get-url",
pathname: "/questions/2300771/jquery-domain-get-url",
port: "",
protocol: "http:"

console.log("document.URL : "+document.URL);
console.log("document.location.href : "+document.location.href);
console.log("document.location.origin : "+document.location.origin);
console.log("document.location.hostname : "+document.location.hostname);
console.log("document.location.host : "+document.location.host);
console.log("document.location.pathname : "+document.location.pathname);
*/

// Create cookie vars.
var cookieLanguageEN = "english";
var	valueLanguageEN = "en";
var cookieLanguageES = "spanish";
var	valueLanguageES = "es";

// Set URL language preferences.
var hostRootDomain = "tdclasercenter.com";
var hostDomainEN = "en.tdclasercenter.com";
var hostDomainES = "es.tdclasercenter.com";

var urlEN = "http://en.tdclasercenter.com";
var urlES = "http://es.tdclasercenter.com";

var currentHost = location.host;
var currentURLLocation = location.href;
var currentURLPath = location.pathname;
var currentURLHash = location.hash;

function checkUI() {
	"use strict";
	
	// console.log(Cookies.get());
	
	// Do nothing if the URL is currently that language.
	if (location.hostname === hostDomainEN || location.hostname === hostDomainES) {	
		
		$(".panel-overlay").removeClass("background-white-frost");
		TweenMax.to("#language-options", 0.5, {display:"none", autoAlpha: 0, scale: 0.9, delay: 0.25, ease: Back.easeInOut});
		tlOverlay.reverse();
		
	}
	
	if (location.hostname === hostDomainEN) {	
		console.log(location.hostname);
		console.log(currentURLPath);
		
		$("li.button-language-english").addClass("active");
		$("#language-options div div .button-language-english").removeClass("page-transition");
	
	}
	
	if (location.hostname === hostDomainES) {	
		console.log(location.hostname);
		console.log(currentURLPath);
		
		$("li.button-language-spanish").addClass("active");
		$("#language-options div div .button-language-spanish").removeClass("page-transition");
	
	}

}





// Delete old cookie and create new cookie for English.
function setLanguageEN() {
	
	Cookies.remove(cookieLanguageES, {domain: hostRootDomain});
	Cookies.set(cookieLanguageEN, valueLanguageEN, {expires: 28, domain: hostRootDomain});

	// window.location.href = urlEN + currentURLPath;
	checkUI();	

}

// Delete old cookie and create new cookie for Spanish.
function setLanguageES() {
	
	Cookies.remove(cookieLanguageEN, {domain: hostRootDomain});
	Cookies.set(cookieLanguageES, valueLanguageES, {expires: 28, domain: hostRootDomain});

	// window.location.href = urlES + currentURLPath;
	checkUI();

}





// Check if cookie exists and do your thang chicken wang.
function checkLanguagePreference() {
	
	console.log(Cookies.get());

	if (location.hostname === hostDomainES && Cookies("english")) {	
		window.location.href = urlEN + currentURLPath;
	}

	if (location.hostname === hostDomainEN && Cookies("spanish")) {	
		window.location.href = urlES + currentURLPath;
	}
	
	
	
	
	
	if (Cookies("english")) {
		console.log("Cookie found. Loading English language preference...");

		switchLanguageStringToEN();
		// window.location.href = urlES + currentURLPath;
		
		checkUI();
	}
	
	else if (Cookies("spanish")) {
		console.log("Cookie found. Loading Spanish language preference...");

		switchLanguageStringToES();
		// window.location.href = urlES + currentURLPath;
		
		checkUI();
	}

	// If cookie not found show language options.
	else {
		console.log("Cookie not found. Show language options.");
		
		switchLanguageStringToEN();
		TweenMax.delayedCall(0, languageOptions);
	}	
	
}

// Run logic for cookie lookup and take necessary actions.
// checkLanguagePreference();

/* -------------------------------------------------- */
/* BUTTONS: MODAL
/* -------------------------------------------------- */

// ENGLISH
$("#language-options div div .button-language-english a").on("click", function(e) {
	"use strict";
	e.preventDefault();

	var currenthref = $(this).attr("href");	

	if (location.hostname === hostDomainES) {	
		$("#language-options div div .button-language-english a").attr("href", currenthref + currentURLPath);
	}
	
	setLanguageEN();
	
	// return false;
});

// SPANISH
$("#language-options div div .button-language-spanish a").on("click", function(e) {
	"use strict";
	e.preventDefault();

	var currenthref = $(this).attr("href");	

	if (location.hostname === hostDomainEN) {	
		$("#language-options div div .button-language-spanish a").attr("href", currenthref + currentURLPath);
	}
	
	setLanguageES();
	
	// return false;
});

/* -------------------------------------------------- */
/* BUTTONS: SITE WIDE
/* -------------------------------------------------- */

// ENGLISH
$("li.button-language-english a").on("click", function(e) {
	"use strict";
	e.preventDefault();

	var currenthref = $(this).attr("href");	
	$(this).attr("href", currenthref + currentURLPath + currentURLHash);
	setLanguageEN();
	
	// return false;
});

// SPANISH
$("li.button-language-spanish a").on("click", function(e) {
	"use strict";
	e.preventDefault();
	
	console.log($(this).attr("href"));
	
	var currenthref = $(this).attr("href");	
	$(this).attr("href", currenthref + currentURLPath + currentURLHash);
	setLanguageES();
	
	// return false;
});

/* -------------------------------------------------- */
/* URL COMMANDS
/* -------------------------------------------------- */

if (window.location.href.indexOf("?options") > -1) {
	console.log("URL command entered: Clearing language settings.");
	
	TweenMax.delayedCall(0, languageOptions);	
	clearCookies();
} 

if (window.location.href.indexOf("?en") > -1) {
	console.log("URL command entered: Directing to English version.");
	
	Cookies.remove(cookieLanguageES, {domain: hostRootDomain});
	window.location.href = urlEN + currentURLPath;
} 

if (window.location.href.indexOf("?es") > -1) {
	console.log("URL command entered: Directing to Spanish version.");
	
	Cookies.remove(cookieLanguageEN, {domain: hostRootDomain});
	window.location.href = urlES + currentURLPath;
} 
