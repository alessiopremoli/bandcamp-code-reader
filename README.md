# Bandcamp Code Reader
A `pdf2json` based converter from a pdf bandcamp code file to a csv. Sometimes labels provides you only this kind of pdf and I got tired of copying and paste them.

## Instructions
- clone the project
- `npm i`
- copy your pdf inside the source folder
- add a `.env` file with two variabiles: `SOURCE_FILE_NAME` with the name of the pdf added, `OUTPUT_FILE_NAME` with the name of the output file desired (must be a csv or txt file)
- run `npm start`
- :rocket: profit (the csv is saved in the output folder)
