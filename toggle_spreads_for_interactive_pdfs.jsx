// Toggle the 'exportReaderSpreads' hidden flag
// (InDesign CS5-6 defaults to "Spreads" with Interactive .PDFs)
// ---------------------------------
alert(
"Spreads are now " +
( ( app.interactivePDFExportPreferences.exportReaderSpreads ^=1 ) ? 'ON' : 'OFF' ) +
" in Interactive PDF Export Preferences."
);