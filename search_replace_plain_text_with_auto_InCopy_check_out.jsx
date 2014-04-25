// Search and Replace plain text (Regex is fine to use) in documents using the InCopy check in/check out process.
// Simply replace OLD STRING with the text you are looking for, and NEW STRING with your replacement text. 
// Open the document and the script will handle the search/replace and check out/back in as needed.

//find/change text preferences
app.findTextPreferences = NothingEnum.nothing;
app.changeTextPreferences = NothingEnum.nothing;
//find/change grep preferences
app.findGrepPreferences = NothingEnum.nothing;
app.changeGrepPreferences = NothingEnum.nothing;
//find/change glyph preferences
app.findGlyphPreferences = NothingEnum.nothing;
app.changeGlyphPreferences = NothingEnum.nothing;

//Set the find options.
app.findChangeTextOptions.caseSensitive = false;
app.findChangeTextOptions.includeFootnotes = false;
app.findChangeTextOptions.includeHiddenLayers = false;
app.findChangeTextOptions.includeLockedLayersForFind = false;
app.findChangeTextOptions.includeLockedStoriesForFind = false;
app.findChangeTextOptions.includeMasterPages = false;
app.findChangeTextOptions.wholeWord = false;

// Vars needed for Check Out Snippet
var myDocument = app.documents.item(0);
var myPage = myDocument.pages.item(0);
var myTextFrame = myPage.textFrames.item(0);
var story = myTextFrame.parentStory;

// Run Check Out
story.checkOut();

//Search the document for the string "findWhat" and change it to "changeTo".
app.findTextPreferences.findWhat = "OLD STRING";
app.changeTextPreferences.changeTo = "NEW STRING";
app.documents.item(0).changeText();

// Run Check Back In
story.checkIn('', true);

//Clear the find/change preferences after the search.
app.findTextPreferences = NothingEnum.nothing;
app.changeTextPreferences = NothingEnum.nothing;