var switchLanguageStringToEN =  function() {
	"use strict";
	
	/* -------------------------------------------------- */
	/* ERROR MESSAGES
	/* -------------------------------------------------- */

	var errorNoscript = $("noscript");
	var errorWindowTooSmall = $("#error-parent div");

	$(errorNoscript).html("If you're seeing this message, that means <span>JavaScript has been disabled on your browser</span>, please enable JS to continue using this website.");
	$(errorWindowTooSmall).html("Please resize your window.");

	/* -------------------------------------------------- */
	/* MODAL: LANGUAGE OPTIONS
	/* -------------------------------------------------- */

	var lanuageOptionsModalHeader = $("#language-options div p:first-of-type");
	// var lanuageOptionsModalText01 = $("#language-options div p:nth-of-type(2)");
	// var lanuageOptionsModalText02 = $("#language-options div p:nth-of-type(3)");

	/*
	var buttonLanguageDebug = $(".button-language-debug a");
	var buttonLanguageClear = $(".button-language-clear a");
	var buttonLanguageSkip = $(".button-language-skip a");
	*/

	var buttonLanguageEN = $(".button-language-english a");
	var buttonLanguageES = $(".button-language-spanish a");

	$(lanuageOptionsModalHeader).html("Language / El Idioma");
	// $(lanuageOptionsModalText01).html("Por favor seleccione su idioma. S&oacute;lo le pediremos una vez que configure su idioma preferido. Utilizamos cookies para guardar sus preferencias ling&uuml;&iacute;sticas y mejorar su experiencia. Al continuar hojeando este sitio usted acepta nuestro <a href='http://es.tdclasercenter.com/privacy-and-terms#cookies' target='_blank' class='text-accent text-primary-hover'>pol&iacute;tica</a> de uso de cookies.");

	/*
	$(buttonLanguageDebug).html("Debug");
	$(buttonLanguageClear).html("Clear");
	$(buttonLanguageSkip).html("Skip");
	*/

	$(buttonLanguageEN).html("English");
	$(buttonLanguageES).html("Espa&ntilde;ol");

	/* -------------------------------------------------- */
	/* NAVBAR: LEFT PANEL (MAIN MOBILE NAV)
	/* -------------------------------------------------- */

	var buttonTheTDCProgram = $(".button-the-tdc-program a");
	var buttonTreatments = $(".button-treatments a");
	var buttonAppointments = $(".button-appointments a");
	var buttonAbout = $(".button-about a");
	var buttonOurOffices = $(".button-our-offices a");

	$(buttonTheTDCProgram).html("the TDC Program");
	$(buttonTreatments).html("Additional Treatments");
	$(buttonAppointments).html("Appointments");
	$(buttonAbout).html("About");
	$(buttonOurOffices).html("Our Offices");

	// $(buttonLanguageEN).html("English");
	// $(buttonLanguageES).html("Espa&ntilde;ol");

	/* -------------------------------------------------- */
	/* PANEL: LEFT (MAIN MOBILE SUBNAV)
	/* -------------------------------------------------- */

	var buttonTheDoctorIsIn = $(".button-the-doctor-is-in a");
	var buttonAPioneerInTheMaking = $(".button-a-pioneer-in-the-making a");
	var buttonOhForThatPerfectLook = $(".button-oh-for-that-perfect-look a");
	var buttonWorldwideRecognition = $(".button-worldwide-recognition a");
	var buttonAFamilyMan = $(".button-a-family-man a");

	$(buttonTheDoctorIsIn).html("The Doctor is In");
	$(buttonAPioneerInTheMaking).html("A Pioneer in the Making");
	$(buttonOhForThatPerfectLook).html("Oh! For That Perfect Look");
	$(buttonWorldwideRecognition).html("World Recognition");
	$(buttonAFamilyMan).html("A Family Man");

	/* -------------------------------------------------- */
	/* PANEL: RIGHT (LOCATIONS)
	/* -------------------------------------------------- */

	var locationMexicoCityMex = $("#location-mex .accordion-item-content div ul li:nth-of-type(2) a");
	var locationSanMarcosCA = $("#location-ca .accordion-item-content div ul li:nth-of-type(2) a");

	$(locationMexicoCityMex).html("Closed <span class='padding-lr-xxs'>&bull;</span> Sunday<br>9am - 6pm <span class='padding-lr-xxs'>&bull;</span> Monday - Friday<br>10am - 5pm <span class='padding-lr-xxs'>&bull;<span> Saturday<br>");

	$(locationSanMarcosCA).html("Closed <span class='padding-lr-xxs'>&bull;</span> Sunday<br>9am - 6pm <span class='padding-lr-xxs'>&bull;</span> Monday - Friday<br>10am - 5pm <span class='padding-lr-xxs'>&bull;<span> Saturday<br>");

	/* -------------------------------------------------- */
	/* DESKTOP: RIGHT
	/* -------------------------------------------------- */

	var desktopRightButtonAppointments = $("#nav-desktop .navbar-inner nav ul.nav-right-items li.button-appointments a");

	// $(desktopRightButtonAppointments).html("Appointments");

	var desktopRightButtonAppointmentsAddIcon = function() {

	if (Modernizr.mq("(max-width: 767px)")) {   
		// console.log("iPhone");

		$("#nav-desktop div nav ul.nav-right-items").addClass("icon");
		$(desktopRightButtonAppointments).html("");

		} else {
			// console.log("Desktop");

			$("#nav-desktop div nav ul.nav-right-items").removeClass("icon");
			$(desktopRightButtonAppointments).html("Appointments");

		}

	};

	$(window).resize(desktopRightButtonAppointmentsAddIcon); // Call once on initial load.  
	desktopRightButtonAppointmentsAddIcon();

	/* -------------------------------------------------- */
	/* FOOTER
	/* -------------------------------------------------- */

	var footerHeaderQuickLinks = $("#footer #footer-nav-items div:nth-of-type(1) div:nth-of-type(1)");
	var footerHeaderNavigation = $("#footer #footer-nav-items div:nth-of-type(2) div:nth-of-type(1)");
	var footerHeaderOurOffices = $("#footer #footer-nav-items div:nth-of-type(3) div:nth-of-type(1)");
	var footerButtonBookAnAppointment = $("#footer #footer-nav-items div:nth-of-type(1) ul li:nth-of-type(1) a");
	var buttonScrollToTop = $("#footer #footer-nav-items div:nth-of-type(1) ul li:nth-of-type(4) a");
	var footerPrivacyAndTerms = $("#footer #footer-legal div:nth-of-type(2) ul li:nth-of-type(4) a");

	$(footerHeaderQuickLinks).html("Quick Links");
	$(footerHeaderNavigation).html("Navigation");
	$(footerHeaderOurOffices).html("Our Offices");
	$(footerButtonBookAnAppointment).html("Book an Appointment");
	$(buttonScrollToTop).html("Top");

	$(footerPrivacyAndTerms).html("Privacy &amp; Terms");

	/* -------------------------------------------------- */
	/* TOOLBAR
	/* -------------------------------------------------- */

	var toolbarButtonAppointments = $("#toolbar .toolbar-inner div:nth-of-type(1) a div");
	var toolbarButtonPhone = $("#toolbar .toolbar-inner div:nth-of-type(2) a div");
	var toolbarButtonLocations = $("#toolbar .toolbar-inner div:nth-of-type(3) a div");

	$(toolbarButtonAppointments).html("Appointments");
	$(toolbarButtonPhone).html("Phone");
	$(toolbarButtonLocations).html("Locations");

};
