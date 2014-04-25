/*  This script resolves a bug with linked MathType files being treated as images since they are inherently just .eps files. 
As a result, InDesign scales them to frame size instead of default 100% when they are edited. 
This script scans the open document for MathType and prompts the user to confirm they are seeing a properly scaled object.
*/

 var doc = app.activeDocument;
 
 app.activeWindow.zoomPercentage = 200;

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
//  choose either manual image type classification
//  myDisplayDialog();

//  or automatic image type processing
 reSizereFit();
} 

// Build the display dialog options for manual image type classification
function myDisplayDialog(){
	var myDialog;
	with(myDialog = app.dialogs.add({name:"Graphic Type"})){
		with(dialogColumns.add()){
			with(borderPanels.add()){
				staticTexts.add({staticLabel:"Select:"});
                    var myRadioButtonGroup = radiobuttonGroups.add();
                    with(myRadioButtonGroup){
                    var myMathTypeRadio = radiobuttonControls.add
                    ({staticLabel:"MathType", checkedState:true});
                    var myMathTypeRadio = radiobuttonControls.add
                    ({staticLabel:"Image"});
                    }
			}
		}
	}
	myResult = myDialog.show();
	if (myResult == true){
		if (myRadioButtonGroup.selectedButton == 0){
            reSizereFit();
		}
		else{
//            alert("No action taken. Proceed to next");

		}
    
		myDialog.destroy();
	}
}

// Check the selection size and refit to 100%, fit frame to new size
function reSizereFit() {
    var sel = app.selection[0];
		
    var horz = sel.horizontalScale;
    var verz = sel.verticalScale;

    var phorz = sel.parent.horizontalScale;
    var pverz = sel.parent.verticalScale;

   sel.horizontalScale = sel.horizontalScale < 0 ? -100 : 100;
   sel.verticalScale = sel.verticalScale < 0 ? -100 : 100;    

    sel.fit(FitOptions.frameToContent);
    
}