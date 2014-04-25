// This script is used to replace both hyperlinks AND hyperlink names in InDesign. 
 
var d = app.documents[0];
var allHyperlinks = d.hyperlinks;
 
for(var n=0;n<allHyperlinks.length;n++){
   var oldDestURL = allHyperlinks[n].destination.destinationURL; 
   var oldDestName = allHyperlinks[n].name;
 
 var newDestURL = oldDestURL.replace("oldstring","newstring");
 var newDestURL = newDestURL.replace("9.5","11.5");
 allHyperlinks[n].destination.destinationURL = newDestURL;
 
 var newDestName = oldDestName.replace("9.5","11.5");
 allHyperlinks[n].name = newDestName;
 
     };
 
