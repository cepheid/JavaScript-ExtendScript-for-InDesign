app.scriptPreferences.userInteractionLevel = UserInteractionLevels.interactWithAll;
 
app.doScript(_DecodeURI_AllHyperlinks_DestinationURL_Name, ScriptLanguage.JAVASCRIPT, [], UndoModes.ENTIRE_SCRIPT, "Decode all hyperlink URLs and names");
 
function _DecodeURI_AllHyperlinks_DestinationURL_Name(){
 
 
var d = app.documents[0];
var allHyperlinks = d.hyperlinks;
 
for(var n=0;n<allHyperlinks.length;n++){
 
    var newDestURL = decodeURI(allHyperlinks[n].destination.destinationURL);
    var newDestName = decodeURI(allHyperlinks[n].destination.name);
 
    allHyperlinks[n].destination.destinationURL = newDestURL;
    try{
    allHyperlinks[n].destination.name = newDestName;
    }catch(e){};
 
    };
 
alert ("Success!", "URL Rewrite") 
 
}; 