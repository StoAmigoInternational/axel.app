/* -------------------------------------------------- */
/* SET-UP
/* -------------------------------------------------- */

var pages = function() {
	"use strict";

	// > = greatar than
	// < = less than
	
	
	/* -------------------------------------------------- */
	/* CACHE SELECTORS
	/* -------------------------------------------------- */
	
	//var pageHome = $(".page").data("page") === "home",

		//$pageSharing = $(".page").data("page") === "sharing",
		//$pageAccess = $(".page").data("page") === "access",
		//$pageSecurity = $(".page").data("page") === "security",
		//$pageTransfer = $(".page").data("page") === "transfer",
		//$pageStreaming = $(".page").data("page") === "streaming",
		//$pageIntegration = $(".page").data("page") === "integration",

		//$pagePlans = $(".page").data("page") === "plans",
		//$pageDownload = $(".page").data("page") === "download",

		//$pageAbout = $(".page").data("page") === "about",
		//$pageTeam = $(".page").data("page") === "team",
		//$pageCareers = $(".page").data("page") === "careers",
		//$pageContact = $(".page").data("page") === "contact",

		//$pagePrivacyPolicy = $(".page").data("page") === "privacy-policy",
		//$pageEULA = $(".page").data("page") === "eula",
	
	
	var page = $$(".page").data("page"),
		
		linkHome = $$(".link-home"),

		linkSharing = $$(".link-sharing"),
		linkAccess = $$(".link-access"),
		linkSecurity = $$(".link-security"),
		linkTransfer = $$(".link-transfer"),
		linkStreaming = $$(".link-streaming"),
		linkIntegration = $$(".link-integration"),

		linkPlans = $$(".link-plans"),
		linkDownload = $$(".link-download"),

		linkAbout = $$(".link-about"),
		linkTeam = $$(".link-team"),
		linkPress = $$(".link-press"),
		linkCareers = $$(".link-careers"),
		linkContact = $$(".link-contact"),
		
		linkFAQ = $$(".link-faq"),

		linkPrivacyPolicy = $$(".link-privacy-policy"),
		linkEULA = $$(".link-eula");
	
	
	/* -------------------------------------------------- */
	/* HOME
	/* -------------------------------------------------- */

	if ( page === "home" ) {
		console.log("Home Page");
		
		linkHome.addClass("active");
		//navbar.addClass("dark");
		
		
		/* -------------------------------------------------- */
		/* HERO HEADER INTRO
		/* -------------------------------------------------- */

        var introParent = $$("#welcome"),
			introHeader = $$("#welcome header");
        
		
        // SET-UP
        var heroHeaderSplitText = new SplitText(introHeader.find("h1"), {type: "words, chars, lines"}), 
            $heroHeaderSplitText = heroHeaderSplitText.chars;

        var heroParagraphSplitText = new SplitText(introHeader.find("p"), {type: "words, chars, lines"}), 
            $heroParagraphSplitText = heroParagraphSplitText.words;

		
        // ANIMATION
        var tlHeroHeader = new TimelineMax({paused: true});
			tlHeroHeader.staggerFrom($heroHeaderSplitText, 0.75, {autoAlpha: 0, y: 10, ease: Power4.easeInOut}, 0.04, "start-=0")
						.staggerFrom($heroParagraphSplitText, 0.75, {autoAlpha: 0, y: 10, ease: Power4.easeInOut}, 0.12, "-=1")


						.from(introHeader.find(".button"), 0.75, {autoAlpha: 0, ease: Power4.easeOut}, "-=1")
						.fromTo(introHeader.find("form"), 0.75, {autoAlpha: 0, ease: Power4.easeOut}, {autoAlpha: 1, ease: Power4.easeOut}, "-=0.75")
						.fromTo(introParent.find(".anim-perspective-scroll"), 1, {autoAlpha: 0, ease: Power4.easeOut}, {autoAlpha: 0.5, ease: Power4.easeOut}, "end-=0");
        
		
		if ( !hero.hasClass("sticky") ) {
			
			tlHeroHeader.play().timeScale(1).delay($delayInterval);
            
		} else {
			
			tlHeroHeader.seek("end", false);
			
        }
		
	}

	
	
	
	
	/* -------------------------------------------------- */
	/* SHARING
	/* -------------------------------------------------- */

	else if ( page === "sharing" ) {
		console.log("Sharing Page");
		
		linkSharing.addClass("active");
		//navbar.addClass("dark");
		

		
	}
    
	
	
	
	
    /* -------------------------------------------------- */
	/* ACCESS
	/* -------------------------------------------------- */

	else if ( page === "access" ) {
		console.log("Access Page");
		
		linkAccess.addClass("active");
		//navbar.addClass("dark");
		

		
	}
    
	
	
	
	
    /* -------------------------------------------------- */
	/* SECURITY
	/* -------------------------------------------------- */

	else if ( page === "security" ) {
		console.log("Security Page");
		
		linkSecurity.addClass("active");
		//navbar.addClass("dark");
		

		
	}
    
	
	
	
	
    /* -------------------------------------------------- */
	/* TRANSFER
	/* -------------------------------------------------- */

	else if ( page === "transfer" ) {
		console.log("Transfer Page");
		
		linkTransfer.addClass("active");
		//navbar.addClass("dark");
		

		
	}
    
	
	
	
	
    /* -------------------------------------------------- */
	/* STREAMING
	/* -------------------------------------------------- */

	else if ( page === "streaming" ) {
		console.log("Streaming Page");
		
		linkStreaming.addClass("active");
		//navbar.addClass("dark");
		

		
	}
    
	
	
	
	
    /* -------------------------------------------------- */
	/* INTEGRATION
	/* -------------------------------------------------- */

	else if ( page === "integration" ) {
		console.log("Integration Page");
		
		linkIntegration.addClass("active");
		//navbar.addClass("dark");
		

		
	}

	
	
	
	
    /* -------------------------------------------------- */
	/* PLANS / PRICING
	/* -------------------------------------------------- */

	else if ( page === "plans" ) {
		console.log("Plans Page");
		
		linkPlans.addClass("active");
		//navbar.addClass("dark");
		

		
	}
    
	
	
	
	
    /* -------------------------------------------------- */
	/* DOWNLOAD
	/* -------------------------------------------------- */

	else if ( page === "download" ) {
		console.log("Download Page");
		
		linkDownload.addClass("active");
		//navbar.addClass("dark");
		
		
		/*
		if ( $isMobile || $hasTouch && $isSmallScreen ) {
			$(".stripe-cap").removeClass("hide");
		}
		
		if ( $hasTouch && !$isMobile ) {
			$("#mobile-apps").removeClass("padding-none").css({"padding-bottom" : "0"});
			$("#mobile-apps").find(".grid-x").css({"padding" : "1rem 0 0 0"});
			$(".stripe-cap").removeClass("hide");
			
		}	
		*/

		
		if ( $hasTouch && isDesktop ) {
			
			console.log("Laptop with touch-capability. Showing DESKTOP APP DOWNLOAD.");
			
			$("#mobile-apps").removeClass("padding-none").css({"padding-bottom" : "0"});
			$("#mobile-apps").find(".grid-x").css({"padding" : "1rem 0 0 0"});
			$(".stripe-cap").addClass("hide");
			
		}	
		
		
		if ( $isMobile ) {
			
			//console.log("Mobile device detected. Showing MOBILE APP DOWNLOAD.");
			
			$(".stripe-cap").removeClass("hide");
			$("#mobile-apps").removeClass("padding-none").css({"padding-bottom" : "0"});
			$("#mobile-apps").find(".grid-x").css({"padding" : "8rem 0 0 0"});
			
			
			// Append preloader.
			$("#mobile-apps .grid-x .cell:not(.dzsparallaxer)").append('<div class="device-preloader position-absolute center-vh padding-xs round-sm width-xxxs p10 text-charcoal text-center background-white bring-to-front"><span class="fa fa-spinner fa-pulse margin-right-xs" aria-hidden="true"></span>Checking device...</div>');
			
			TweenMax.set( "#mobile-apps .grid-x .cell:not(.dzsparallaxer) svg", {opacity: 0, scale: 0.9});
			TweenMax.set( "#mobile-apps .grid-x .cell:not(.dzsparallaxer) h2", {opacity: 0});
			TweenMax.set( "#mobile-apps .grid-x .cell:not(.dzsparallaxer) p", {opacity: 0});
			TweenMax.set( "#mobile-apps .grid-x .cell:not(.dzsparallaxer) .button-group", {opacity: 0, scale: 0.9});

			TweenMax.set( "#mobile-apps .grid-x .cell.dzsparallaxer img", {opacity: 0, scale: 0.9});
			
            // Note: Check, might be a bug preventing download button from aligning properly, because of the delay being called. 
			TweenMax.to( $("#mobile-apps").find(".grid-x"), 0.5, {opacity: 1, ease: Power4.easeOut, delay: $delayInterval + 2,
																  
																  onStart: function() {
																	  
																		TweenMax.to(".device-preloader", 0.75, {opacity: 0, scale: 0.9, ease: Back.easeInOut});
																		TweenMax.to( "#mobile-apps .grid-x .cell:not(.dzsparallaxer) svg", 0.75, {opacity: 1, scale: 1, ease: Back.easeInOut});
																		TweenMax.to( "#mobile-apps .grid-x .cell:not(.dzsparallaxer) h2", 0.75, {opacity: 1, ease: Back.easeInOut});
																		TweenMax.to( "#mobile-apps .grid-x .cell:not(.dzsparallaxer) p", 0.75, {opacity: 1, ease: Back.easeInOut});
																		TweenMax.to( "#mobile-apps .grid-x .cell:not(.dzsparallaxer) .button-group", 0.75, {opacity: 1, scale: 1, ease: Back.easeInOut});

																		TweenMax.to( "#mobile-apps .grid-x .cell.dzsparallaxer img", 0.75, {opacity: 1, scale: 1, delay: 0.25, ease: Back.easeInOut});
																	  
																  },
																  
																  onComplete: function() {
																	  
																		$(".device-preloader").remove();
																	 
																  } });
			
		}
		

		
	}

	
	
	
	
    /* -------------------------------------------------- */
	/* ABOUT
	/* -------------------------------------------------- */

	else if ( page === "about" ) {
		console.log("About Page");

		linkAbout.addClass("active");
		//navbar.addClass("dark");
        
		var checkSectionHash = function() {
            
			if ( $("#team").hasClass("emergence-visible") ) {

				console.log("Team Section");
                
                linkAbout.removeClass("active");
				linkTeam.addClass("active");

			} else {

				console.log("About Section");

				linkAbout.addClass("active");
                linkTeam.removeClass("active");

			}
            
        };
		
		$$(pageContent).on("scrollstop", checkSectionHash);
		
	}
    
	
	
	
	
    /* -------------------------------------------------- */
	/* TEAM
	/* -------------------------------------------------- */

	else if ( page === "team" ) {
		console.log("Team Page");
		
		linkTeam.addClass("active");
		//navbar.addClass("dark");

		
	}
       
	
		
	
	
    /* -------------------------------------------------- */
	/* PRESS
	/* -------------------------------------------------- */

	else if ( page === "press" ) {
		console.log("Press Page");
		
		linkPress.addClass("active");
		navbar.addClass("dark");
		
		
		
	}
	
	
	
	
	
    /* -------------------------------------------------- */
	/* CAREERS
	/* -------------------------------------------------- */

	else if ( page === "careers" ) {
		console.log("Careers Page");
		
		linkCareers.addClass("active");
		navbar.addClass("dark");
		
		
		$$("#widget-job-board").before('<div id="preloader-default" class="padding-tb-xs"><span class="fa fa-spinner fa-pulse margin-right-xs" aria-hidden="true"></span>Looking for open positions...</div>');
		
		
		TweenMax.to($$("#preloader-default"), 0.75, {opacity: 1, delay: 0, ease: Power2.easeOut,
													 
													onComplete:
													
														function() {
														
															//$$("#preloader-default").remove();
															
															$$("#widget-job-board").append( '<iframe id="iframe-container-1" class="opacity-00 transition-ease-out" width="100%" frameborder="0" scrolling="no" src="https://widget.recooty.com/openings.php?key=5b5a2b10653eee0b01cd13602c0cd8d8d5aa5af2b4af0"></iframe>' );
														
															if ( $$("#widget-job-board").find("#iframe-container-1").length ) {
																
																TweenMax.to($$("#preloader-default"), 0.75, {opacity: 0, delay: 2, ease: Power2.easeOut,
																											 onComplete:
																											
																												function() {

																													$$("#widget-job-board").children().removeClass("opacity-00");

																													$$("#preloader-default").remove();

																												}
																											
																											});
																
															}
															
													}
												   

												   });
		
		
		
		
		
		
		
		


		
	}
	
	
	
	
	
    /* -------------------------------------------------- */
	/* CONTACT US
	/* -------------------------------------------------- */

	else if ( page === "contact" ) {
		console.log("Contact Page");
		
		linkContact.addClass("active");
		navbar.addClass("dark");

		
	}
	
	
	
	
	
    /* -------------------------------------------------- */
	/* FAQ
	/* -------------------------------------------------- */

	else if ( page === "faq" ) {
		console.log("FAQ Page");
		
		linkFAQ.addClass("active");
		navbar.addClass("dark");
		
		
		/* -------------------------------------------------- */
		/* SUB MENU
		/* -------------------------------------------------- */

		var subMenuContainer = $$(".sub-menu-container"),
			subMenuItems = $$(".sub-menu-items"),
			subMenuActive = $$(".sub-menu-active");

		
		var subMenuInit = function() {
			
			subMenuContainer.find(".sub-menu-items").clone()
							.insertBefore("#faq")
							.addClass("sub-menu-items-clone")
							.find("ul > li > a").addClass("scroll-to");
			
			//subMenuContainer.css({ "padding-top" : navbar.height() });
			
		};

		subMenuInit();
		
		
		var subMenuOpen = function() {
			
			//disableContent();
			$(html).addClass("ui-blocker-active");
			$(body).addClass("is-off-canvas-open");
			
			subMenuContainer.addClass("active");
			subMenuContainer.find(".open").addClass("hide").css({"pointer-events" : "none"});
			subMenuContainer.find(".close").removeClass("hide");
			subMenuContainer.find(".sub-menu-items").css({"pointer-events" : "auto"});
			
			TweenMax.staggerTo(subMenuContainer.find(".sub-menu-items > ul > li"), 0.25, {opacity: 1, delay: 0, ease: Power4.easeOut}, 0.05);
			
			$("#faq").find("dt").removeClass("text-secondary");
			$("#faq").find("dd").removeClass("text-secondary").removeClass("border-secondary");
			
			main.addClass(subMenuActive);
			
		};
		
		
		var subMenuClose = function() {
			
			//enableContent();
			$(html).removeClass("ui-blocker-active");
			$(body).removeClass("is-off-canvas-open");
			
			subMenuContainer.removeClass("active");
			subMenuContainer.find(".open").removeClass("hide");
			subMenuContainer.find(".close").addClass("hide");
			subMenuContainer.find(".sub-menu-items").css({"pointer-events" : "none"});
			
			TweenMax.set(subMenuContainer.find(".sub-menu-items > ul > li"), {opacity: 0});
			
			TweenMax.delayedCall($delayInterval, function() { subMenuContainer.find(".open").css({"pointer-events" : "auto"}); } );
			
			
			main.removeClass(subMenuActive);
			
			//subMenuContainer.scrollTop = 0;
			
		};
		
		
		subMenuActive.on("click", function(e) {
			e.preventDefault();
			
			subMenuClose();
		});
		
		
		subMenuContainer.find(".open").on("click", function(e) {
			e.preventDefault();
			
			subMenuOpen();
		});
		
		
		subMenuContainer.find(".close").on("click", function(e) {
			e.preventDefault();
			
			subMenuClose();
		});
		
		
		subMenuContainer.find(".sub-menu-items > ul > li > a").on("click", function(e) {
			e.preventDefault();
			
			var self = $(this),
				$hash = self.attr("href");
			
			console.log($hash);
			
			subMenuClose();
			
			$($hash).addClass("text-secondary");
			$($hash).next().addClass("text-secondary").addClass("border-secondary");
			
			/*
			var tlBounce = new TimelineMax({paused: false, delay: 0.25, repeatDelay: 0, yoyo: false, repeat: 0});
				tlBounce.to($hash, 0.25, {y: -5, ease: Back.easeOut})
						.to($hash, 0.25, {y: 0, ease: Bounce.easeOut})
						.to($($hash).next(), 0.25, {y: -5, ease: Back.easeOut})
						.to($($hash).next(), 0.25, {y: 0, ease: Bounce.easeOut});
			*/

			
			//TweenMax.to($hash, 0.5, {opacity: 0.25, delay: 0.5, ease: Power4.easeOut });
		});
		
		
		$$(".sub-menu-items-clone > ul > li > a").on("click", function() {
			/*e.preventDefault();*/
			
			var self = $(this),
				$hash = self.attr("href");
			
			console.log($hash);
			
			$($hash).addClass("text-secondary");
			$($hash).next().addClass("text-secondary").addClass("border-secondary");
			
			//TweenMax.to($hash, 0.5, {opacity: 0.25, delay: 0.5, ease: Power4.easeOut });
		});
		
	}
	
	
	
	
	
    /* -------------------------------------------------- */
	/* PRIVACY AND TERMS OF USE
	/* -------------------------------------------------- */

	else if ( page === "privacy-policy" ) {
		console.log("Privacy and Terms of Use Page");
		
		linkPrivacyPolicy.addClass("active");
		navbar.addClass("dark");
		body.addClass("background-white");
		body.addClass("background-image-none");
		
		$("#ui-privacy-policy-message a").hide();
		$("#ui-privacy-policy-message").addClass("text-center");

	}
    
	
	
	
	
    /* -------------------------------------------------- */
	/* EULA
	/* -------------------------------------------------- */

	else if ( page === "eula" ) {
		console.log("EULA Page");
		
		linkEULA.addClass("active");
		navbar.addClass("dark");
		body.addClass("background-white");
		body.addClass("background-image-none");

	}

	
	
	
	
	/* -------------------------------------------------- */
	/* ERROR
	/* -------------------------------------------------- */

	else {
		console.log("Error Page");
		
		navbar.addClass("dark");
		//body.addClass("background-wild");
		//body.addClass("background-image-none");
	}
	
};
