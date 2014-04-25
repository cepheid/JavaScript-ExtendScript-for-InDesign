// For big projects using an .indb book file to organize .indd's. 
// InDesign doesn't like you to run external scripts on multiple files easily in a single action, hence the need for this script.
// Open your book file, run this script. This script will prompt you to tell it which *other* script you want applied to all of the indd's in the active book.

if(app.books.length<1)errorExit('Must have a book open');

var myScript=File.openDialog("Run script");

if(myScript!=null){var mySuffix=myScript.name.split(".").pop();

if(mySuffix=="js"||mySuffix=="jsx")for(var b=0;b<app.books.length;b++)doBook(app.books[b])}

function doBook(aBook){for(var i=0;i<aBook.bookContents.length;i++)doDoc(aBook.bookContents[i])}

function doDoc(aDoc){
	app.scriptPreferences.userInteractionLevel=UserInteractionLevels.neverInteract;

try{
	var myDoc=app.open(File(aDoc.fullName));app.doScript(myScript,ScriptLanguage.javascript)

	if(app.activeDocument.saved != true){
	app.activeDocument.close(SaveOptions.yes);
//Or, to save to a specific file name:
//var myFile = File("/c/myTestDocument.indd");
//app.activeDocument.close(SaveOptions.yes, myFile);
	}else{
//If the file has already been saved, save it.
	app.activeDocument.close(SaveOptions.yes);
	}

}catch(e){
		alert(aDoc.fullName+'\r'+e)}app.scriptPreferences.userInteractionLevel=UserInteractionLevels.interactWithAll}

function errorExit(aMessage){
	alert(aMessage);exit()}
	
