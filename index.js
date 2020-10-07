const fs = require('fs');
const path = require('path');
const PDFParser = require("pdf2json");

let pdfParser = new PDFParser(this, 1);
const BC_CODE_REGEX = /[A-Za-z0-9]{4}-[A-Za-z0-9]{4}/g;

pdfParser.on("pdfParser_dataError", errData => console.error(`Error: ${errData.parserError}`));
pdfParser.on("pdfParser_dataReady", pdfData => {
    let rawPdf = pdfParser.getRawTextContent().replace('\r\n', '');
    let regExpCode = new RegExp(BC_CODE_REGEX);
    
    let result = rawPdf.match(regExpCode);
    fs.writeFileSync(path.join(__dirname, 'output', 'out.csv'), result.join('\n'));
});

pdfParser.loadPDF(path.join(__dirname, 'source', 'bandcamp_codes.pdf'));