/* -------------------------------------------------- */
/* WEBFONT LOADER API
/* -------------------------------------------------- */

	/* *Note: Loading fonts locally will cause a significant decrease in page speed. Always use Google's CDN or other CDN for loading fonts.
	   Loading fonts from Google will always degrade PSI score (Page Speed Insights). Use Web Font Loader library to prevent render-blocking CSS.
	   
	
	*/

	/* -------------------------------------------------- */
	/* CREATE SESSION STORAGE
	/* -------------------------------------------------- */

	/*
	(function() {
		"use strict";
		
		if (sessionStorage.fonts) {

			console.log("Fonts installed.");
			document.documentElement.classList.add("wf-active");

		} else {

			console.log("No fonts installed.");

		}

	})();
	*/


	/* -------------------------------------------------- */
	/* LOAD FONTS
	/* -------------------------------------------------- */

	WebFontConfig = {
		
		google: {
			families: ["Comfortaa", "Roboto:500"]
		}
		
	};
	

	/* -------------------------------------------------- */
	/* CREATE SCRIPT
	/* -------------------------------------------------- */

	(function(d) {
		"use strict";
		
		var wf = d.createElement("script"), s = d.scripts[0];

			wf.src = "https://cdnjs.cloudflare.com/ajax/libs/webfont/1.6.28/webfontloader.js";
			wf.async = "true";

			s.parentNode.insertBefore(wf, s);

	})(document);
