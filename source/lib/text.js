/* -------------------------------------------------- */
/* 3D TEXT
/* -------------------------------------------------- */

var textFX3D = function() {

	// VARS
	var textFX3Dxs = $$(".text-fx-3d-xs"), 
		textFX3Dsm = $$(".text-fx-3d-sm"),
		textFX3Dmd = $$(".text-fx-3d-md"),
		textFX3Dlg = $$(".text-fx-3d-lg"),
		textFX3Dxl = $$(".text-fx-3d-xl");

	
	// OBJECTS
	textFX3Dxs.text3d({
		depth: 1,
		angle: 120,
		color: "#c8c8c8",
		lighten: -0.1,
		shadowDepth: 2,
		shadowAngle: 120,
		shadowOpacity: 0.2
	});    

	textFX3Dsm.text3d({
		depth: 2,
		angle: 120,
		color: "#c8c8c8",
		lighten: -0.1,
		shadowDepth: 4,
		shadowAngle: 120,
		shadowOpacity: 0.2
	});

	textFX3Dmd.text3d({
		depth: 4,
		angle: 120,
		color: "#c8c8c8",
		lighten: -0.1,
		shadowDepth: 6,
		shadowAngle: 120,
		shadowOpacity: 0.2
	});

	textFX3Dlg.text3d({
		depth: 6,
		angle: 120,
		color: "#c8c8c8",
		lighten: -0.1,
		shadowDepth: 8,
		shadowAngle: 120,
		shadowOpacity: 0.2
	});

	textFX3Dxl.text3d({
		depth: 8,
		angle: 120,
		color: "#c8c8c8",
		lighten: -0.1,
		shadowDepth: 8,
		shadowAngle: 120,
		shadowOpacity: 0.2
	});	


	if ( $isExplorer || $isEdge ) {

		textFX3Dxs.text3d({
			depth: 1,
			angle: 120,
			color: "#c8c8c8",
			lighten: -0.1,
			shadowDepth: 0,
			shadowAngle: 0,
			shadowOpacity: 0
		});    

		textFX3Dsm.text3d({
			depth: 2,
			angle: 120,
			color: "#c8c8c8",
			lighten: -0.1,
			shadowDepth: 0,
			shadowAngle: 0,
			shadowOpacity: 0
		});

		textFX3Dmd.text3d({
			depth: 4,
			angle: 120,
			color: "#c8c8c8",
			lighten: -0.1,
			shadowDepth: 0,
			shadowAngle: 0,
			shadowOpacity: 0
		});

		textFX3Dlg.text3d({
			depth: 6,
			angle: 120,
			color: "#c8c8c8",
			lighten: -0.1,
			shadowDepth: 0,
			shadowAngle: 0,
			shadowOpacity: 0
		});

		textFX3Dxl.text3d({
			depth: 8,
			angle: 120,
			color: "#c8c8c8",
			lighten: -0.1,
			shadowDepth: 0,
			shadowAngle: 0,
			shadowOpacity: 0
		});

	}
	
	
};
