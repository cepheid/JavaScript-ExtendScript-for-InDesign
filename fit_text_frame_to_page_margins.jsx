//Matches size of text frame to the page margins. Helpful for automated "Place" actions.

var myPage = app.activeWindow.activePage;
var myMargins = myPage.marginPreferences;
if(app.selection.length){
    app.selection[0].geometricBounds = [myPage.bounds[0]+myMargins.top,myPage.bounds[1]+myMargins.left,myPage.bounds[2]-myMargins.bottom,myPage.bounds[3]-myMargins.right];
}else{
    myPage.textFrames[0].geometricBounds = [myPage.bounds[0]+myMargins.top,myPage.bounds[1]+myMargins.left,myPage.bounds[2]-myMargins.bottom,myPage.bounds[3]-myMargins.right];
}