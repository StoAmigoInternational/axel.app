/* -------------------------------------------------- */
/* GRADIENTS
/* -------------------------------------------------- */

/*
var comAnimGradient() {

	var granimInstance = new Granim({
		element: "#background-gradient",
		name: "granim",
		direction: "radial", // diagonal, left-right, top-bottom, radial
		opacity: [1, 1],
		loop: true,
		stateTransitionSpeed: 500,
		isPausedWhenNotInView: true,
		scrollDebounceThreshold: 300,
		states : {

			"default-state": {
				gradients: [
					["#6400fa", "#fa6432"],
					["#32e14b", "#6400fa"]
				]
			},

			"gradient-charcoal": {
				gradients: [
					["#000", "#333"],
					["#333", "#000"]
				]
			}

		},
		onStart: function() {
			console.log('Granim: onStart');

		},
		onGradientChange: function(colorDetails) {
			console.log('Granim: onGradientChange, details: ');
			console.log(colorDetails);

		},
		onEnd: function() {
			console.log('Granim: onEnd');

		}

	});


	$$(pageContent).backgroundDefault = function() {
		granimInstance.changeState("default-state");
	};
	
	
}
*/ // END comAnimGradient


/* -------------------------------------------------- */
/* PARALLAX
/* -------------------------------------------------- */

/*
var comParallax = function() {
	
	var rellax = new Rellax(".rellax", {
		center: true,
		round: true,
		vertical: true,
		horizontal: false
  	});
	
	
}
*/ // END comParallax


/* -------------------------------------------------- */
/* PARTICLES
/* -------------------------------------------------- */

/*
var comParticles = function() {
	
	if ( $hasTouch && $isSmallScreen ) {

		disableParticles();

	} else {

		enableParticles();

	}
	
	
}
*/ // END comParticles


/* -------------------------------------------------- */
/* TILT
/* -------------------------------------------------- */

/*
var comTilt = function() {
	
	if ( !$hasTouch && anyElement.hasClass("tilt") ) {
		
        var tilt = ".tilt";
        
		$(tilt).tilt({
			maxTilt: 25,
			speed: 800,
            transition: true,
			easing: "cubic-bezier(0.86, 0, 0.07, 1)",
			perspective: 500,
			axis: null,
			glare: true,
			maxGlare: 1,
			scale: 1.12,
			reset: true
		});
		
	}
	
	
	$(".tilt").on("click touchend mouseup mouseleave", function() {
		
		var self = $(this)
		
		self.tilt.destroy.call(self);
		
	}).on("click touchend mouseup mouseleave", function() {
		
		var self = $(this)
		
		self.tilt();
		
	});
    
	var tilt = $(".tilt").tilt();
	
    if ( $hasTouch ) {
        tilt.methods.destroy.call(tilt);
	}
	
	
}
*/ // END comTilt


/* -------------------------------------------------- */
/* EMERGENCE
/* -------------------------------------------------- */
	
var comEmergence = function() {

	var	emergenceElement = $$("[data-emergence]"),
		emergenceIgnore = $$(".emergence-ignore"),
		emergenceIgnoreChild = $$(".emergence-ignore-child");
	
	
	if ( !$isMobile && !$hasTouch ) {

		TweenMax.set(emergenceElement.not(emergenceIgnore).children().not(emergenceIgnoreChild).not(anim).children(), {autoAlpha: 0, y: 50});

	}

	
	emergence.init({
		container: window,
		reset: true,
		handheld: true,
		throttle: $updateInterval,
		elemCushion: 0,
		offsetTop: 0,
		offsetRight: 0,
		offsetBottom: 0,
		offsetLeft: 0,
		callback: function(element, state) {

			if ( state === "visible" ) {

				//console.log("Element is visible.");

				if ( !$isMobile && !$hasTouch ) {

					TweenMax.staggerTo($(element).not(emergenceIgnore).children().not(emergenceIgnoreChild).not(anim).children(), 0.25, {autoAlpha: 1, y: 0, ease: Power4.easeInOut, overwrite: "false"}, 0.12);

				}


				$(element).addClass("emergence-visible");
				$(element).find(anim).not(animInteract).addClass("anim-play");

			} else if ( state === "reset" ) {

				//console.log("Element is hidden with reset.");

				$(element).removeClass("emergence-visible");
				$(element).find(anim).not(animInteract).removeClass("anim-play");

			} else if ( state === "noreset" ) {

				//console.log("Element is hidden with NO reset.");

			}

	  }

	});

	
	emergence.engage();
	//emergenceReset();
	//emergence.disengage();

	//TweenMax.delayedCall($delayInterval, emergence.engage);
	
	
}; // END comEmergence


/* -------------------------------------------------- */
/* MODAL
/* -------------------------------------------------- */

var comModal = function() {
	
	/* -------------------------------------------------- */
	/* BLOCKER
	/* -------------------------------------------------- */

		/* -------------------------------------------------- */
		/* CONTENT
		/* -------------------------------------------------- */

		//$('<div class="blocker background-black z-02"></div>').appendTo( $(body) );

		var uiBlockerContent = "";
			uiBlockerContent += "<div class='blocker'></div>";

		// Append content.
		$(uiBlockerContent).appendTo( $(body) );


		/* -------------------------------------------------- */
		/* FUNCTIONS
		/* -------------------------------------------------- */

		var blocker = function() {

			if ( !$(html).hasClass("blocker-active") ) {

				TweenMax.to( $(".blocker"), 0.25, {display: "block", opacity: 1, ease: Power4.easeIn,
												   onStart: function() {
														  
													   disableContent();
													   $(html).addClass("blocker-active");
													   $(body).addClass("is-off-canvas-open");
													   $(".blocker").addClass("no-pointer");
														  
												   },

												   onComplete: function() {
														  
													   $(".blocker").removeClass("no-pointer");
														  
												   }
				});

			} else {

				TweenMax.to( $(".blocker"), 1, {display: "none", opacity: 0, delay: 0.25, ease: Power4.easeOut,
												onStart: function() {
														 
													enableContent();
													$(html).removeClass("blocker-active");
													$(body).removeClass("is-off-canvas-open");
													$(".blocker").addClass("no-pointer");
														 
												}
				});

			}

		};


		/* -------------------------------------------------- */
		/* ACTIONS
		/* -------------------------------------------------- */

		$(".blocker").on("click", function(e) {
			e.preventDefault();

			//var self = $(this);

			blocker();
			modal();

		});


	/* -------------------------------------------------- */
	/* MODAL
	/* -------------------------------------------------- */

		//*Note: Same origin policy is in effect using this method. External or third-party links will not load into 'modal-container'.
		// Method: <a href="about.html" class="popup" data-content-selector="#articles" data-content-width="800"></a>

		/* -------------------------------------------------- */
		/* CACHE SELECTORS
		/* -------------------------------------------------- */

		var buttonModal = $(".popup");


		/* -------------------------------------------------- */
		/* CONTENT
		/* -------------------------------------------------- */

		var uiModal = "";

			uiModal += "<div class='modal grid-x align-center align-middle'>"; // MODAL

				uiModal += "<div class='modal-close close light margin-sm round-full'><span></span><span></span></div>"; // BUTTON: CLOSE

				uiModal += "<div class='modal-container cell align-self-top'></div>"; // CONTAINER

				uiModal += "<a class='modal-close cell align-self-bottom padding-tb-md center-element p11 text-secondary text-primary-hover text-bold text-uppercase button button-width-full background-transparent background-transparent-hover no-touch-feedback prevent-default z-auto'><i class='fa fa-times-circle margin-right-xs'></i>Close</a>"; // BUTTON: CLOSE

			uiModal += "</div>"; // MODAL
	
		// Append content.
		$(uiModal).appendTo( $(body) );
	
		TweenMax.set( $(".modal"), {display: "none", opacity: 0, scale: 1.12});


		/* -------------------------------------------------- */
		/* FUNCTIONS
		/* -------------------------------------------------- */

		var modal = function(modalContentURL, modalContentSelector) {

			var modalContentURL, // Variable for content's path / location.
				modalContentSelector, // Variable for loaded content's selector.
				modalContentWidth;

				blocker();

				if ( !$(html).hasClass("blocker-active") ) {

					TweenMax.to( $(".modal"), 0.5, {display: "block", opacity: 1, scale: 1, ease: Power4.easeInOut,
													   onStart: function() {
														   
														   $(html).addClass("no-pointer");
														   
														   $(".modal-container").load(modalContentURL + modalContentSelector, function ( response, status, xhr ) {

															   if ( status == "success" ) {

																   //console.log( modalContentURL + modalContentSelector);

																   //TweenMax.set( $(".modal"), { maxWidth: $(".modal-container").children().width() } );

																   $(".modal-close").not(".close").removeClass("hide");

															   } else {

																   var msg = "Error: Unable to load " + modalContentURL;

																   //$(this).html( msg + xhr.status + " " + xhr.statusText );
																   $(this).html( '<div class="center-vh text-charcoal text-center"> <span class="fa fa-exclamation-circle margin-bottom-md p4" aria-hidden="true"></span> <p>'+msg+'</p> </div>' );
																   $(".modal-close").not(".close").addClass("hide");

															   }


														   });

													   },
													   onComplete: function() {
														   
														   $(html).removeClass("no-pointer");

													   }
					});

				} else {

					TweenMax.to( $(".modal"), 0.5, {display: "none", opacity: 0, scale: 0.75, ease: Power4.easeInOut,
													   onComplete: function() {
														   
														   $(".modal-container").html(""); // Clear 'modal-container' and free up some memory.
														   
														   TweenMax.set( $(".modal"), {display: "none", opacity: 0, scale: 1.12});
													   }
					});

				}

		};


		/* -------------------------------------------------- */
		/* ACTIONS
		/* -------------------------------------------------- */

		buttonModal.on("click", function(e) {
			e.preventDefault();
			
			var self = $(this),
				dataContentURL = self.attr("href"), // self.data("content-url"), //self.attr("href"), // Read 'data-content-url' of clicked element and store as a value for 'modal(modalContentURL)'.
				dataConentSelector = self.data("content-selector"), // Read 'data-content-selector' of clicked element and store as a value for 'modal(modalContentSelector)'.
				dataContentWidth = self.data("content-width"); // Read 'data-content-width' of clicked element and store as a value for 'modal(modalContentSelector)'.


			//console.log(dataContentURL + dataConentSelector + " @ " + dataContentWidth + "px");
			
			modal(dataContentURL, dataConentSelector, dataContentWidth);
			
			TweenMax.set( $(".modal"), { maxWidth: dataContentWidth } );

		});


		$(".modal-close").on("click", function(e) {
			e.preventDefault();

			modal();

		});

}; // END comModal


/* -------------------------------------------------- */
/* TEAM
/* -------------------------------------------------- */

var comTeam = function() {
	
	if ( $(".page").data("page") === "about" || $(".page").data("page") === "team" ) {
	
		
		/* -------------------------------------------------- */
		/* CACHE SELECTORS
		/* -------------------------------------------------- */
	
		var teamData = "assets/team.json",
			$teamSection = $("#team"),
			$profiles = $(".profiles"),
			profileUser = ".profile-user",
			profileSmallPhoto = ".profile-small-photo",
			$profileInfo = $("ul.profile-info"),
			profileInfoName = "li.name",
			profileInfoPosition = "li.position",
			profileBio = ".profile-bio",
			profileLargePhoto = ".profile-large-photo",
			//$profileImagePreloader = $(".profile-img-preloader"),
			//$profileStatus = $(".status-data"),
			people = [];
	

			$.getJSON(teamData, function(response) {

				
			   $.each(response.person, function(key, value) {

				   // Create data keys / values and push items to an array.
				   people.push([value.name, value.position, value.smallimage, value.largeimage, value.bio]);


				   // Append user profile image tiles.
				   $profiles.append('<a id='+ value.name.replace(/\s+/g, '-').toLowerCase()+' class="cell profile-user padding-none no-pointer '+value.position.replace(/\s+/g, '-').toLowerCase()+'" data-name="'+value.name+'" data-position="'+value.position +'" data-bio="'+ value.bio +'" data-photo="'+value.largeimage+'"> <ul class="profile-info img-preload-wait"> <li class="name">'+value.name+'</li> <li class="position">'+value.position+'</li> </ul> <img src="'+value.smallimage+'" alt="'+ value.name+'" class="profile-small-photo duotone-process img-clone img-preload"/> </a>');			   


				   // Attach a preloader to user profile.   
				   $(profileUser).find(".profile-small-photo").before('<div class="profile-img-preloader position-absolute top left padding-xxs width-full height-full p5 text-white background-black-25 z-03"><span class="fa fa-spinner fa-pulse center-vh" aria-hidden="true"></span></div>');


				   // Attach a status message during profile image tile generation.
				   $profiles.before('<p class="status-data position-absolute margin-sm padding-xs round-sm p10 text-charcoal background-white bring-to-front"><span class="fa fa-spinner fa-pulse margin-lr-xs" aria-hidden="true"></span></p>');


				   // Hide elements temporarily while content loads.
				   TweenMax.set($profiles, {autoAlpha: 0});
				   TweenMax.set($profiles.children(), {autoAlpha: 0});
				   TweenMax.set($profileInfo.children(), {autoAlpha: 0, y: 25 });

			   });

				
			})

			.done(function(teamData) {

				console.log("Fetching Team data...");

			})

			.fail(function(teamData) {

				console.log("Error: Unable to load Team data.");

				// Attach an error message on JSON data fail.
				$profiles.replaceWith('<p class="status-error position-absolute margin-sm padding-xs round-sm p10 text-charcoal background-white bring-to-front"><span class="fa fa-exclamation-circle margin-right-xs" aria-hidden="true"></span><strong>Error:</strong> Unable to fetch team member data.</p>');

			})

			.always(function(teamData) {

				console.log("Team data loaded.");


				/* -------------------------------------------------- */
				/* OBSERVE IMAGE LOAD
				/* -------------------------------------------------- */

				$(".profile-small-photo").imagesLoaded({ background: false })

					.always( function( instance, image ) {

						console.log("Loading images...");

					})

					.done( function( instance ) {

						console.log("All images successfully loaded.");

						// Generate image tiles function to be called later.
						var createProfileImageTiles = function() {


							/* -------------------------------------------------- */
							/* FUNCTIONS
							/* -------------------------------------------------- */

							var enableProfileImageTiles = function() {

								$(".profile-img-preloader").remove();
								$(".status-data").remove();
								$profiles.children().removeClass("no-pointer");

							};


							/* -------------------------------------------------- */
							/* STYLE ATTIBUTES
							/* -------------------------------------------------- */

							$(profileUser).css( { "height" : $(".profile-small-photo").height() } );


							/* -------------------------------------------------- */
							/* ANIMATE
							/* -------------------------------------------------- */

							var tlProfileTileImages = new TimelineMax({paused: false, delay: 0, repeatDelay: 0, yoyo: true, repeat: false});
								tlProfileTileImages.to($profiles, 0.5, {autoAlpha: 1, ease: Power4.easeInOut}) // Animate elements into place when images have fully loaded.
												   .staggerTo($profiles.children(), 0.75, {autoAlpha: 1, ease: Power4.easeOut}, 0.12) // Animate profile images.
												   .staggerTo($profileInfo.children(), 0.75, {autoAlpha: 1, y: 0, delay: 0.5, ease: Power4.easeOut}, 0.12) // Animate '$profileInfo' info.
												   .staggerTo(".profile-img-preloader", 0.5, {autoAlpha: 0, ease: Power4.easeOut}, 0.05) // Remove '$profileImagePreloader'.
												   .to(".status-data", 0.5, {autoAlpha: 0, x: -10, ease: Power4.easeInOut}) // Remove '$profileImagePreloader'.
												   .add(enableProfileImageTiles);


							/* -------------------------------------------------- */
							/* CLONE / DUOTONE FX
							/* -------------------------------------------------- */

							$(".profile-small-photo").each(function() {

								var self = $(this),
									img = new Image();

								img.src = Image;

								self.parent().css( { "height" : self.height() } );

								//console.log(self.height());

								// Clone '.profile-small-photo'.
								self.clone()
									   .insertAfter(this)
									   .removeClass("duotone-process")
									   .addClass("duotone-reset")
									   .css({"opacity" : "1",
											"visibility" : "visible",
											"position" : "absolute",
											"top" : "0",
											"left" : "0",
											"z-index" : "0"});


								// Apply duotone process effect.
								self.duotone({
									gradientMap: "#6400fa, #32e14b"
								});

								// Set default style properties.
								//TweenMax.set(self.find(".duotone-process"), {transformOrigin: "center center"});
								//TweenMax.set(self.find(".duotone-reset"), {transformOrigin: "center center"});

							});


							// Allow interaction for '.profile-small-photo'.
							$(profileUser).on("mouseover touchstart", function() {

								TweenMax.to($(this).find(".duotone-process"), 0.5, {autoAlpha: 0, scale: 1.35, ease: Back.easeOut});
								TweenMax.to($(this).find(".duotone-reset"), 0.75, {scale: 1.05, ease: Back.easeOut});

							}).on("mouseout touchend touchmove touchleave", function() {

								TweenMax.to($(this).find(".duotone-process"), 1, {autoAlpha: 1, scale: 1, ease: Power4.easeOut});
								TweenMax.to($(this).find(".duotone-reset"), 0.75, {scale: 1, ease: Power4.easeOut});

							});

						};

						// Delay 'createProfileImageTiles'.
						TweenMax.delayedCall(2, createProfileImageTiles);


						/* -------------------------------------------------- */
						/* FUNCTIONS
						/* -------------------------------------------------- */

						var profileBioIsOpen = false;


						var scrollToProfile = function() {

								if ( $isEdge ) {

										TweenMax.to(body, $scrollToSpeed, {scrollTo: {y: $("#profile").offset().top - navbar.height(), offsetY: 0, autoKill: true}, ease: $scrollToEase});

								} else if ( $hasTouch ) {

										$$(pageContent).scrollTop($("#profile").offset().top - navbar.height() );

								} else {

										TweenMax.to(html, $scrollToSpeed, {scrollTo: {y: $("#profile").offset().top - navbar.height(), offsetY: 0, autoKill: true}, ease: $scrollToEase});

								}

						};


						var profileBioReset = function() {

							TweenMax.to($(profileBio).find(".close"), 0.25, {autoAlpha: 0, ease: Power4.easeOut});

							TweenMax.to($(profileUser + ".active").find(".duotone-process"), 1.25, {autoAlpha: 0, scale: 1, delay: 0.25, ease: Back.easeOut});
							TweenMax.to($(profileUser + ".active").find(".duotone-reset"), 0.25, {scale: 1, delay: 0.25, ease: Back.easeOut});

							TweenMax.to($(profileUser).not(".active").find(".duotone-process"), 1.25, {autoAlpha: 1, scale: 1, delay: 0.25, ease: Back.easeOut});
							TweenMax.to($(profileUser).not(".active").find(".duotone-reset"), 0.25, {scale: 1, delay: 0.25, ease: Back.easeOut});

						};


						var profileRemove = function() {

							$(profileBio).remove();

						};


						var profileBioOpen = function() { 

							profileBioIsOpen = true;
							profileBioReset();


							TweenMax.to($(profileBio).find(".close"), 1, {autoAlpha: 1, delay: 0.25, ease: Power4.easeOut});

							
							if ( $teamSection.find(profileBio).length ) {
								console.log("Bio is open.");


								if ( $hasTouch && $isSmallScreen ) {

									scrollToProfile();
									TweenMax.to(profileBio, 0.75, {height: $(profileBio).find(".text-container").innerHeight() + $(".profile-large-photo").innerHeight(), delay: 0.25, ease: Power4.easeOut, autoRound: false});

								} else {

									TweenMax.to(profileBio, 0.75, {height: $(profileBio).find(".text-container").outerHeight() + 400, delay: 0.25, ease: Back.easeOut, onComplete: scrollToProfile, autoRound: false});


								}

								
								// Add close handler.
								$(profileBio).find(".close").on("click", function() {
										console.log("Closing profile.");
										//e.preventDefault();

										profileBioClose();

								});

							}

						};


						var profileBioClose = function() { 
							console.log("Bio is closed.");

							profileBioIsOpen = false;

							$(profileUser).removeClass("active");
							profileBioReset();

							TweenMax.to(profileBio, 0.75, {height: 0, ease: Power4.easeOut, onComplete: profileRemove});


						};


						/* -------------------------------------------------- */
						/* BUTTONS
						/* -------------------------------------------------- */

						// Open handler.
						$(profileUser).not(".active").on("click", function(e) {
							e.preventDefault();

							//console.log( $(this).data("bio") );
							//console.log(data.person[0].name);

							var selfProfile = $(this),
								profileBioContent = '<section id="profile" class="profile-bio grid-x align-center align-middle padding-none small-up-1 medium-up-1">     <div class="close dark z-01"><span></span><span></span></div>      </div>           <div class="cell text-container padding-md"> <h2 class="p8 font-paragraph text-secondary header-accent header-accent-secondary">' +selfProfile.data("name")+ '</h2> <h3 class="p10 font-paragraph text-dark-grey">' +selfProfile.data("position")+ '</h3> <p>' +selfProfile.data("bio")+ '</p> </div>      </section>';

							selfProfile.addClass("active");
							$(profileUser).not(selfProfile).removeClass("active");

							/*
							$.getJSON("pages/team/profiles.json", function(data) {

							   $.each(data.person, function(key, value) {


								   people.push([value.id, value.name, value.position, value.smallimage, value.largeimage, value.bio]);


							   });

								console.log(data.person[0].name);

							})
							*/

							if ( !$teamSection.find(profileBio).length ) { // Create a new instances of 'Profile Bio' if one does not exist.

								console.log("Profile bio instance not found. Creating new instance.");

								$profiles.before(profileBioContent);
								profileBioOpen();

							} 



							if ( profileBioIsOpen ) { // If user selects another 'Member Profile' close current 'Profile Bio' and open again with new profile information.

								console.log("Profile bio already found. Replacing with new instance.");

								TweenMax.to($(profileBio).find(".close"), 0.25, {autoAlpha: 0, ease: Power4.easeOut});


								TweenMax.to(profileBio, 0.5, {height: 0, ease: Power4.easeOut,

									onComplete: function() {

										$(profileBio).replaceWith(profileBioContent);
										profileBioOpen();

									}

								});


							}

						});


						// Recalculate image size and reapply duotone process on window resize.
						var profileResizeInit = function() {

							TweenMax.delayedCall(0.25,

								function() {

									/*
									if ( profileBioIsOpen ) {

										profileBioClose();

									}
									*/


									$(".profile-small-photo").parent().css( { "height" : $(".profile-small-photo").height() } );
									$(".profile-small-photo").not(".duotone-reset").duotone("process");

								}

							);

						};


						$$(pageContent).on("resize", _.debounce(profileResizeInit, $updateInterval));


					})

					.fail( function() {

						console.log("All images loaded, at least one broken.");

					})

					.progress( function( instance, image ) {

						//var result = image.isLoaded ? 'loaded' : 'broken';
						//console.log( 'image is ' + result + ' for ' + image.img.src );

				});


			});

	}
	
	
}; // END comTeam


/* -------------------------------------------------- */
/* BLOG
/* -------------------------------------------------- */ 

var comBlog = function() {
	
	if ( $(".page").data("page") === "about" || $(".page").data("page") === "team"  || $(".page").data("page") === "press" || $(".page").data("page") === "careers" ) {

		
		/* -------------------------------------------------- */
		/* CACHE SELECTORS
		/* -------------------------------------------------- */
		
		var blogData = "https://api.rss2json.com/v1/api.json",
			$blogSection = $("#blog"),
			$blogContent = $("#blog-content"),
			blogDataFeed = {
				rss_url: "https://medium.com/feed/@axelunlimited"
			};
	
			//TweenMax.set($("#blog-content").find(".cell"), {autoAlpha: 0});
			//TweenMax.staggerFrom($("#blog-content").find(".cell"), 1, {autoAlpha: 0, ease: Power4.easeOut, onComplete: function() { TweenMax.delayedCall(0, Foundation.reInit, ["equalizer"]); } }, 0.12);
		
			$.getJSON(blogData, blogDataFeed, function(response) {
				
				
				if (response.status === "ok") {
					
					var output = "";
					
					$.each(response.items, function (key, item) {
						
						// Attach a status message during profile image tile generation.
				   		//$blogContent.before('<p class="status-data position-absolute margin-sm padding-xs round-sm p10 text-charcoal background-white bring-to-front"><span class="fa fa-spinner fa-pulse margin-lr-xs" aria-hidden="true"></span></p>');
						
						var visibleSm;
						
						if ( key < 3 ) { // Set how many blog posts to display.
							
							visibleSm = "";
							
						 } else {
							 
							visibleSm = " visible-sm";
							 
						 }
						
						output += '<div class="cell padding-none' + visibleSm + '"><header>';
						output += '<span class="date">' + $.format.date(item.pubDate, "dd<br>MMM") + "</span>";
						
						var tagIndex = item.description.indexOf('<img'), // Find where the img tag starts.
							srcIndex = item.description.substring(tagIndex).indexOf('src=') + tagIndex, // Find where the src attribute starts.
							srcStart = srcIndex + 5, // Find where the actual image URL starts; 5 for the length of 'src="'.
							srcEnd = item.description.substring(srcStart).indexOf('"') + srcStart, // Find where the URL ends.
							src = item.description.substring(srcStart, srcEnd); // Extract just the URL.
						
						//output += '<figure><img src="' + src + '" width="100%" height="auto"></figure></header>';
						
						output += '<figure><div class="post-image" style="background-image: url(' + src + ')"></div></figure></header>';




						output += '<div class="post-content" data-equalizer-watch><h4><a href="'+ item.link + '" target="_blank" rel="noopener" class="external">' + item.title + '</a></h4>';
						output += '<div class="post-meta"><span class="post-author">By ' + item.author + '</span></div>';
						
						
						var yourString = item.description.toString().replace(/<img[^>]*>/, ""), // Replace with your string.
							maxLength = 120, // Maximum number of characters to extract trim the string to the maximum length.
							trimmedString = yourString.substr(0, maxLength),
							url = item.link;
						
						
						trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))); // Re-trim if we are in the middle of a word.
						
						//output += '<p>' + trimmedString + '...</p>';
						//output += '<p>' + item.content + '...</p>';

						
						//output += '<div class="divider margin-top-xs border-solid border-bottom border-thin border-light-grey"></div>';
						
						
						output += '<a class="center-element p10 text-dar text-dark-grey text-accent-hover text-uppercase border-thin border-solid border-top border-light-grey button button-width-full background-transparent background-transparent-hover external" href="' + url + '" target="_blank" rel="noopener"><i class="fa fa-external-link margin-right-xs"></i>Read more</a>';
						
						
						output += '</div></div></div>';
						
						
						return key < 3;
						
					});
					
					$blogContent.html(output);
					
				}
				
				
			})

			.done(function(blogDataFeed) {

				console.log("Fetching Blog data...");

			})

			.fail(function(blogDataFeed) {

				console.log("Error: Unable to load Blog data.");

			})

			.always(function(blogDataFeed) {

				console.log("Blog data loaded.");

			});

	
	}

	
}; // END comBlog


/* -------------------------------------------------- */
/* ACCORDION
/* -------------------------------------------------- */

var comAccordion = function() {
	"use strict";
	
	/* -------------------------------------------------- */
	/* ACCORDION
	/* -------------------------------------------------- */
	
	$("li.accordion-item").find("a.accordion-title").on( "click", function(e) {
		e.preventDefault();
		
		//var self = $(this);
		
		TweenMax.delayedCall(0.25, accordionCheck);

	});

	
	var accordionCheck = function() {
		
		if ( $("li.accordion-item").hasClass("is-active") ) {
			
			
			//TweenMax.to("li.accordion-item:not(.is-active)", 0.25, {autoAlpha: 0.75, ease: Power4.easeOut});
			//TweenMax.to("li.accordion-item.is-active", 0.25, {autoAlpha: 1, ease: Power4.easeOut});
			
						
			$("li.accordion-item:not(.is-active)").find("a.accordion-title").css({"background-color" : "#f4f4f4"});
			$("li.accordion-item.is-active").find("a.accordion-title").css({"background-color" : "#6400fa"});
			
		} else  {
			
			//TweenMax.to("li.accordion-item", 0.25, {autoAlpha: 1, ease: Power4.easeOut});
			
			$("li.accordion-item").find("a.accordion-title").css({"background-color" : "#fff"});
			
		}
		
		
	};

    
    /* -------------------------------------------------- */
    /* SLIDER
    /* -------------------------------------------------- */

    var $sliderDefault = $(".slider-default");
      
    
    // Disable vertical touch scrolling when interacting with any slider.
	/*
    $sliderDefault.on("touchmove", function(e) {
            e.preventDefault();
        
            return false;
        
        
    }).on("touchend touchleave", function(e) {
        

        
    });
	*/

	
}; // END comAccordion


/* -------------------------------------------------- */
/* SLIDER
/* -------------------------------------------------- */

var comSlider = function() {
	"use strict";
    
    /* -------------------------------------------------- */
    /* SLIDER
    /* -------------------------------------------------- */

    var $sliderDefault = $(".slider-default");
      
    
    // Disable vertical touch scrolling when interacting with any slider.
	/*
    $sliderDefault.on("touchmove", function(e) {
            e.preventDefault();
        
            return false;
        
        
    }).on("touchend touchleave", function(e) {
        

        
    });
	*/
    
    
    
    
    
    // Resize slider when content has loaded.
    var sliderResize = function() { 

	   $sliderDefault.flickity("resize");
        
    };
	
    TweenMax.delayedCall($delayInterval, sliderResize);
    
    
	
	
    
	// SET-UP
    var $sliderDefaultAdapt = $(".slider-default.adapt").flickity({});
    
    $sliderDefault.has(".adapt").each(function() {
        
		
		var self = $(this);
		
        // Move '.flickity-page-dots' above slider.
		self.find("ol.flickity-page-dots").prependTo( $(this).find(".flickity-viewport") );
        
		// Bug fix: Flickity does not set correct 'height' for content other than images.
		self.find(".flickity-viewport").css("height", ''+$(this).find(".flickity-viewport .slider-item.is-selected .cell").height()+'' + "px" );
        
    });
    
	// Disable 'href' links when clicking.
	$(".slider-item a").on("click touchdown", function(e) {
        
		e.preventDefault();
		return false;
        
	});

	
	// SLIDER ADAPT
	$sliderDefaultAdapt.on("select.flickity", function() {

		//var sliderItemIndex = $(this).data("flickity");
		//console.log(sliderItemIndex.selectedIndex);

		var self = $(this);
		
        self.each(function() {
			
			// Bug fix: Flickity does not set correct 'height' for content other than images.
           self.find(".flickity-viewport").css("height", ''+$(this).find(".flickity-viewport .slider-item.is-selected .cell").height()+'' + "px" );
		            
        });
		
		

	});

	
	/* -------------------------------------------------- */
	/* TESTIMONIALS
	/* -------------------------------------------------- */ 

	// SLIDER
	TweenMax.set("#slider-testimonials .slider-item:not(.is-selected)", {scale: 0.75, transformOrigin: "bottom center"});

	//var sliderTestimonials = $("#slider-testimonials").flickity({});

	$("#slider-testimonials").on("select.flickity", function() {

		TweenMax.to("#slider-testimonials .slider-item.is-selected", 0.75, {scale: 1, ease: Back.easeInOut});
		TweenMax.to("#slider-testimonials .slider-item:not(.is-selected)", 0.5, {scale: 0.75, ease: Back.easeOut});

	}).on("settle.flickity", function() {

		//TweenMax.to(".slider-item:not(.is-selected)", 0.5, {scale: 0.75, ease: Back.easeOut});

	});

	
}; // END comSlider
