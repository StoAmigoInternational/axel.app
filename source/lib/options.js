/* -------------------------------------------------- */
/* CACHE SELECTORS / ELEMENTS
/* -------------------------------------------------- */

// BLOCKS
var anyElement = $$("*"),
pageContent = window,
document = $$(document),
html = $$("html"),
body = $$("body"),
container = $$("#container"),
main = $$("#content"),
section = $$("section"),
article = $$("article"),
block = $$("section"), // Specifiy each content block. Recommend using 'section', 'article', or 'div'.
footer = $$("#footer"),


// ELEMENTS
preloader = $$("#preloader"),
hero = $$(".hero"), 
    
navbarToggle = $$("#navbar-toggle"),
navPanelToggle = $$("#nav-panel-toggle"),
navToggle = $$(".nav-toggle"),
navToggleLabel = $$(".nav-toggle-label"), // Set to false or leave blank to remove 'navbarCallout'.
navbarLabel = $$("#navbar-label"),
navPanelLabel = $$("#nav-panel-label"),


navbar = $$("#navbar"),
navbarMenubar = $$("#navbar .menubar"),
navbarContents = $$("#navbar-contents"),
navbarItems = $$("#navbar-items > ul > li"),
navbarLogo = $$("#navbar-logo"),
navbarCallout = $$("#navbar-callout"), // Set to false or leave blank to remove 'navbarCallout'.
navItems = $$(".nav-items"),


toolbar = $$("#toolbar"),
toolbarMenubar = $$("#toolbar .menubar"),
toolbarContents = $$("#toolbar-contents"),
toolbarItems = $$("#toolbar-items nav > ul > li"),


navPanel = $$("#nav-panel"),
navPanelMenubar = $$("#nav-panel .menubar"),
navPanelContents = $$("#nav-panel-contents"),
navPanelItems = $$("#nav-panel-items > ul > li"),
navPanelLogo = $$("#nav-panel-logo"),
navPanelCallout = $$("#nav-panel-callout"), // Set to false or leave blank to remove 'navPanelCallout'.


panelOverlay = $$(".js-off-canvas-overlay"),
navPanelString = "#nav-panel",


linkBlank = $$('[target="_blank"]'),
linkExternal = $$(".external"),
preventDefault = $$(".prevent-default"),
stopProp = $$(".stop-prop");
	
	
/* -------------------------------------------------- */
/* OPTIONS
/* -------------------------------------------------- */

// PRELOADER
var $usePreloader = false, // Setting to true will also allow transitions between pages. 


// PRIVACY / DATA / POPUPS
$showModalMessage = true,
$showPrivacyPolicy = true,


// ELEMENT SIZING
$mainWidth = "100%",

$navbarWidth = "100%",
$navbarHeight = "75px",
$navbarShrinkHeight = "60px",
$navbarShowOnPageEndHeight = "75px",

$toolbarWidth = "100%",
$toolbarHeight = "75px",
$toolbarShrinkHeight = "60px",
$toolbarShowOnPageEndHeight = "75px",
//$navPanelWidth = "100%",


// NAV / LOGO / LABEL / CALLOUT / SCROLL PROGRESS
$navbarOrder = "right", // Define order of elements: left (logo, navbar menu items/nav toggle), right (navbar menu items/nav toggle, logo).

$navbarItemsPosition = "right", // Define alignment: left, center, right.
$showNavbarLogoOnSticky = true,
$showNav = true,


$showNavbarLogo = true,
$showNavbarCallout = true,
$showNavbarLabel = true,


$showNavPanelLogo = true,
$showNavPanelCallout = true,
$showNavPanelLabel = false,


//$showScrollProgress = false,


// BREAKPOINTS
$persistentMenuToggle = false, // Will also make 'callout' persistent.
$navbarBreakpoint = "1036px",
$toolbarBreakpoint = "1036px",
$toolbarMobileBreakpoint = "1036px",


// SCROLL BEHAVIOR
$allowScrollTo = true,
$scrollToSpeed = 1,
$scrollToOffsetY = 50,
$scrollToEase = Power4.easeInOut,
$disableNavPanelMomentumScrolling = false,


// MICRO ANIMATIONS / INTERACTIONS
$microAnimationsPauseOnScroll = true, // Set whether animations will only play only if in the viewport. Recommended to leave this setting 'true' for performance.
$microAnimationsTiming = 1,


// THROTTLE / DEBOUNCE INTERVAL
$delayInterval = 1, // Set delay interval before function fires.
$updateInterval = 200, // Set debounce / throttling interval. Lower numbers degrade performance.


// BUTTONS
$useButtonTouchFeedback = true,
$useButtonWavesEffect = true,


// STICKY
stickyAnchor = "",
$stickyAnchorTolerance = 0,
$navbarAllowSticky = true,
$navbarStickyClass = "sticky", // See 'app.css' for 'sticky' class.
$useContentMargin = false, // This will add 'margin-top' to 'main' content container when user scrolls down. *Note: This will add a gap at the first section.
$stickyOffset = 0, //window.innerHeight / 2,
$stickyScrollToleranceUp = 0,
$stickyScrollToleranceDown = 0,
 

// NAV TOGGLE
//useNavbarToggleColor = false,
//navbarToggleColor = "background-white",
//navPanelToggleColor = "background-white",	


// NAVBAR
$navbarShrinkSpeed = 0.5,
$navbarShrinkEase = Power4.easeOut,
$navbarHideOnScrollUp = false,
$navbarHideOnScrollDown = false,
$navbarShowOnPageEnd = true,
$navbarHideSpeed = 0.5,
$navbarHideEase = Power4.easeOut,


// TOOLBAR
$toolbarShowOnMobileOnly = false,
$toolbarShrinkSpeed = 0.5,
$toolbarShrinkEase = Power4.easeOut,
$toolbarHideOnScrollUp = true,
$toolbarHideOnScrollDown = true,
$toolbarShowOnPageStart = false,
$toolbarShowOnPageEnd = true,
$toolbarHideSpeed = 0.25,
$toolbarHideEase = Power4.easeOut,


// NAV PANEL
$hideNavPanelScrollbar = true, // This will not disable the scrollbar. It will just hide it, but content will still be scrollable.
$showNavPanel = true,
$useNavPanelAnimation = true,
$navPanelPosition = "top",
$navPanelScrollReset = true,
$navPanelTransitionSpeed = "0.5s", // Define timing in seconds (ex: 1s).
$navPanelTransitionEase = "InOut", // Define easing Type 1 to 7: Quad, Cubic, Quart, Quint, Expo, Circ, InOut.
$navPanelCloseOnLinkClick = true,
$navPanelItemsClass = "",
$panelOverlayTransitionSpeed = 1,
//$panelOverlayOutSpeed = 1,
$panelOverlayDelay = 1, // Keep this number as low as possible.


// CONTENT ANIMATION
$animateContentOnNavPanelOpen = false,
$contentOpacity = 1,
$contentScale = 1,
$contentSpeed = 0.2,
$contentEase = Power4.easeOut;
