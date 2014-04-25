﻿/*  This script resolves a bug with linked MathType files being treated as images since they are inherently just .eps files. 
As a result, InDesign scales them to frame size instead of default 100% when they are edited. 
This script scans the open document for MathType and prompts the user to confirm they are seeing a properly scaled object.
*/

 var doc = app.activeDocument;
 
// Find the next instance of a graphic frame in the document, check link path if MathType
    for (i=0; i<app.activeDocument.allGraphics.length; i++){
    searchString = "mathtype";    
    pather = app.activeDocument.allGraphics[i].itemLink.filePath;

    if(pather.indexOf(searchString) > -1){
        do_your_stuff (app.activeDocument.allGraphics[i]);

    } else { 
 //       alert("This item is not a MathType."); 
        }
}    
    
function do_your_stuff (img){   
    app.select(app.activeDocument.allGraphics[i]);

// centers the window view on the selected object
    app.activeWindow.zoom(ZoomOptions.FIT_PAGE);
     app.activeWindow.zoomPercentage = 200;
    
//  choose either manual image type classification
myDisplayDialog();

//  or automatic image type processing
// allowEdit();
} 

// Build the display dialog options for manual image type classification
function myDisplayDialog(){
	var myDialog;
	with(myDialog = app.dialogs.add({name:"Is this MathType OK?"})){
		with(dialogColumns.add()){
			with(borderPanels.add()){
				staticTexts.add({staticLabel:"Select:"});
                    var myRadioButtonGroup = radiobuttonGroups.add();
                    with(myRadioButtonGroup){
                    var myMathTypeRadio = radiobuttonControls.add
                    ({staticLabel:"YES", checkedState:true});
                    var myMathTypeRadio = radiobuttonControls.add
                    ({staticLabel:"NO"});
                    }
			}
		}
	}
	myResult = myDialog.show();
	if (myResult == true){
		if (myRadioButtonGroup.selectedButton == 1){
            allowEdit();
		}
		else{
//            alert("No action taken. Proceed to next");

		}
    
		myDialog.destroy();
	}
}

function allowEdit(){
    alert("Script Stopped");
    exit();
}
