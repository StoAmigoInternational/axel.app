/* -------------------------------------------------- */
/* SET COOKIES
/* -------------------------------------------------- */

var	cookiePrivacyPolicy = "privacy-policy",
	valuePrivacyPolicy = "accepted",

	cookieMessage = "message",
	valueMessage = "ok",
	
	cookieMessageTemp = "temp",
	valueMessageTemp = "ok",

	cookieExpireDate = 30,
	cookiseSecure = false;


/* -------------------------------------------------- */
/* PRIVACY / COOKIE POLICY
/* -------------------------------------------------- */

	/* -------------------------------------------------- */
	/* CONTENT
	/* -------------------------------------------------- */

	if ( $showPrivacyPolicy ) {

		var uiModalPrivacyPolicy = "";

			uiModalPrivacyPolicy += "<div id='ui-modal-privacy-policy' class='opacity-00 position-fixed display-none bottom padding-sm width-full background-charcoal no-print hide-landscape-mobile' style='z-index: 98;'>";


				uiModalPrivacyPolicy += "<div class='grid-x align-center align-middle small-up-1 medium-up-2 large-up-2 center-element width-sm'>";


					uiModalPrivacyPolicy += "<p id='ui-privacy-policy-message' class='cell medium-auto text-white padding-bottom-sm-mobile'>This website uses cookies to ensure you get the best experience. <a href='privacy-policy' class='text-primary text-accent-hover text-bold'>Read our privacy policy to learn more.</a></p>";

					uiModalPrivacyPolicy += "<a id='ui-modal-button-privacy-policy' href='#' class='cell button button-md width-full-mobile round-full text-white text-secondary-hover text-bold text-center background-secondary background-white-hover external'>Got it!</a>";


				uiModalPrivacyPolicy += "</div>";


			uiModalPrivacyPolicy += "</div>";

		// Append Content
		$$(uiModalPrivacyPolicy).appendTo(container);
		
	}


	/* -------------------------------------------------- */
	/* ACTIONS
	/* -------------------------------------------------- */

	$$("#ui-modal-button-privacy-policy").on("click", function(e) {
		//"use strict";
		e.preventDefault();

		var self = $(this);

		TweenMax.to($$("#ui-modal-privacy-policy"), 0.25, {opacity: 0, y: $(this).height() + "px", ease: Power2.easeInOut,

														onComplete:

															function() {
																
																console.log( Cookies.get(cookiePrivacyPolicy) + " cookie created for visitor.");
																Cookies.set(cookiePrivacyPolicy, valuePrivacyPolicy, { expires: cookieExpireDate, secure: cookiseSecure });

																$$("#ui-modal-privacy-policy").remove();
																
															},

														});

	});






/* -------------------------------------------------- */
/* POP UP MESSAGE
/* -------------------------------------------------- */

	/* -------------------------------------------------- */
	/* CONTENT
	/* -------------------------------------------------- */

	if ( $showModalMessage ) {

		var uiModalMessage = "";

			uiModalMessage += "<div id='ui-modal-message' class='opacity-00 position-fixed top left display-none fullscreen no-print' style='z-index: 99;'>";


				uiModalMessage += "<div id='ui-modal-message-background' class='ui-modal-close-temp position-absolute top left fullscreen background-black-75 no-pointer z-auto no-print'></div>";


				uiModalMessage += "<div class='opacity-00 grid-x align-center align-middle position-absolute center-vh padding-tb-xs padding-lr-sm round-md width-xs text-center background-one-off background-center background-auto box-shadow-xl z-auto' data-image='assets/modal-blockchain.png'>";


					//uiModalMessage += "<div class='ui-close ui-modal-close-temp light margin-sm z-01'><span></span><span></span></div>";


					uiModalMessage += "<p class='cell p9 text-white text-bold'>Welcome to the official homepage of</p>";


					uiModalMessage += "<img src='assets/logo.png' alt='AXEL' width='400' height='200' class='img-md center-element'/>";


					uiModalMessage += "<p class='cell p10 text-white text-bold'>(formerly StoAmigo)</p>";


					uiModalMessage += "<p class='cell p9 text-white text-bold text-center'>Came to read about our blockchain project?<br></a></p>";


					uiModalMessage += "<a id='ui-modal-message-button' href='https://axeltoken.com' target='_blank' rel='noopener' class='cell ui-modal-close-perm margin-tb-md button width-xxs round-full p9 text-one-off text-white-hover text-bold text-center background-white background-charcoal-hover external'>Visit the AXEL Token website</a>";


					uiModalMessage += "<div id='ui-modal-message-disable' class='cell ui-modal-close-perm margin-bottom-sm width-full p10 text-bold text-white text-light-grey-hover cursor-pointer'>Don't show this message again.</div>";


				uiModalMessage += "</div>";


			uiModalMessage += "</div>";

		// Append Content
		$$(uiModalMessage).appendTo(container);


		if ( $isSafari || $isEdge ) {

			$$("#ui-modal-message-background").addClass("background-frost-md");

		} else {

			//$$("#ui-modal-message-background").addClass("background-black-75");

		}

		TweenMax.delayedCall($delayInterval + 1, function() { $$("#ui-modal-message-background").removeClass("no-pointer"); } );
		
	}


	/* -------------------------------------------------- */
	/* ACTIONS
	/* -------------------------------------------------- */

	$$(".ui-modal-close-temp").on("click", function(e) {
		//"use strict";
		//e.preventDefault();

		var self = $(this);

		TweenMax.to($$("#ui-modal-message").find(".grid-x"), 0.5, {opacity: 0, scale: 0.9, ease: Back.easeInOut,

																   
														onStart:

															function() {
																
																$$("#ui-modal-message-background").addClass("no-pointer");
																TweenMax.to($$("#ui-modal-message-background"), 1, {display: "none", opacity: 0, ease: Power4.easeOut});
																
															},
																   
																   
																   
														onComplete:

															function() {
																
																console.log( Cookies.get(cookieMessageTemp) + " temporary cookie created for visitor. Will expire in 24 hours.");
																Cookies.set(cookieMessageTemp, valueMessageTemp, { expires: 1, secure: cookiseSecure });

																$$("#ui-modal-message").remove();
																
															},

														});

	});


	$$(".ui-modal-close-perm").on("click", function(e) {
		//"use strict";
		//e.preventDefault();

		var self = $(this);

		TweenMax.to($$("#ui-modal-message").find(".grid-x"), 0.5, {opacity: 0, scale: 0.9, ease: Back.easeInOut,

																   
														onStart:

															function() {
																
																$$("#ui-modal-message-background").addClass("no-pointer");
																TweenMax.to($$("#ui-modal-message-background"), 1, {display: "none", opacity: 0, ease: Power4.easeOut});
																
															},
																   
																   
																   
														onComplete:

															function() {
																
																console.log( Cookies.get(cookieMessage) + " cookie created for visitor.");
																Cookies.set(cookieMessage, valueMessage, { expires: cookieExpireDate, secure: cookiseSecure });
																Cookies.remove(cookieMessageTemp);

																$$("#ui-modal-message").remove();
																
															},

														});

	});





/* -------------------------------------------------- */
/* RUN CHECK
/* -------------------------------------------------- */

var cookieCheck = function() {
	"use strict";

	
	/* -------------------------------------------------- */
	/* PRIVACY / COOKIE POLICY
	/* -------------------------------------------------- */
	
	if ( $showPrivacyPolicy && Cookies(cookiePrivacyPolicy) ) {	

		console.log( Cookies.get(cookiePrivacyPolicy) + " cookie found! Visitor has already accepted Privacy and Cookie Policy.");

		$$("#ui-modal-privacy-policy").remove();

	} else if ( $showPrivacyPolicy ) {

		console.log("First visit. User has not accepted Privacy / Cookie Policy yet.");

		TweenMax.to($$("#ui-modal-privacy-policy"), 0.5, {display: "block", y: 0, opacity: 1, ease: Power4.easeOut});

	} else if ( !$showPrivacyPolicy ) {
			   
		// Do nothing.
			   
	}

	
	/* -------------------------------------------------- */
	/* POPUP MESSAGE (PERMANENT)
	/* -------------------------------------------------- */
	
	if ( $showModalMessage && Cookies(cookieMessage) ) {	

		console.log( Cookies.get(cookieMessage) + " cookie found! Bypass popup message.");

		$$("#ui-modal-message").remove();

	} else if ( $showModalMessage ) {

		console.log("First visit. Show popup message.");
		
		//TweenMax.set($$("#ui-modal-message").find(".grid-x"), {scale: 0.9});
		TweenMax.to($$("#ui-modal-message"), 0.5, {display: "block", opacity: 1, delay: 0, ease: Power4.easeOut});
		TweenMax.to($$("#ui-modal-message").find(".grid-x"), 0.5, {display: "block", opacity: 1, scale: 1, delay: 1, ease: Back.easeInOut});

	} else if ( !$showModalMessage ) {
			   
		// Do nothing.
			   
	}
	

	/* -------------------------------------------------- */
	/* POPUP MESSAGE (TEMPORARY)
	/* -------------------------------------------------- */
	
	if ( $showModalMessage && Cookies(cookieMessageTemp) ) {	

		console.log( Cookies.get(cookieMessageTemp) + " cookie found! Bypass popup message.");

		$$("#ui-modal-message").remove();

	} else if ( $showModalMessage ) {

		console.log("First visit. Show popup message.");
		
		//TweenMax.set($$("#ui-modal-message").find(".grid-x"), {scale: 0.9});
		TweenMax.to($$("#ui-modal-message"), 0.5, {display: "block", opacity: 1, delay: 0, ease: Power4.easeOut});
		TweenMax.to($$("#ui-modal-message").find(".grid-x"), 0.5, {display: "block", opacity: 1, scale: 1, delay: 1, ease: Back.easeInOut});

	} else if ( !$showModalMessage ) {
			   
		// Do nothing.
			   
	}



};

cookieCheck();


/* -------------------------------------------------- */
/* DEBUG / URL COMMANDS
/* -------------------------------------------------- */

if ( window.location.hash === "#delete" ) {
	
	console.log( Cookie.get(cookiePrivacyPolilcy) + " deleted.");
	Cookies.remove(cookiePrivacyPolicy);
	
	console.log( Cookie.get(cookieMessage) + " deleted.");
	Cookies.remove(cookieMessage);
	
	console.log( Cookie.get(cookieMessageTemp) + " deleted.");
	Cookies.remove(cookieMessageTemp);
	
}
