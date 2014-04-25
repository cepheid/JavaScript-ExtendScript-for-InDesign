// A script version of the "Unembed" option in the Links menu, which by default has no hotkey.

var myDoc = (app.documents.length && app.activeDocument),
    myLinks = (myDoc) ? myDoc.links : false,
    hasEmbedded = (myLinks && String(app.activeDocument.links.everyItem().status).indexOf("EMBEDDED") != -1) ? true : false;
    myDoc ? undefined : alert("No Documents opened!", "Unembed Embedded Links");
    (!hasEmbedded && myDoc) ? alert("No Embedded links found!", "Unembed Embedded Links") : undefined;
 
if(myDoc && myLinks.length != 0 && hasEmbedded){
    var myFolder = Folder.selectDialog("Select folder where Embedded links will be extracted:");
    if(myFolder != null){
        for(var i = 0; i < myLinks.length; i++)
            if(myLinks[i].status == LinkStatus.LINK_EMBEDDED)
                if(File(myFolder + "/" + myLinks[i].name).exists)
                    myLinks[i].relink(File(myFolder + "/" + myLinks[i].name));
                else
                    myLinks[i].unembed(myFolder);
        alert("Done!", "Unembed Embedded Links");
    }
}