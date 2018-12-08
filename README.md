# concats

Web app built to help Dr. No by:

1. taking a csv file

2. for every row, create a new csv file comprised of a single column containing the same number of rows as the OG csv file, where the value of this new single column is a string concatenation of multiple field values from that row in the OG csv file.

3. Render the output (initially as plain text to copy from a browser (via the initial web app), and eventually as its own csv file (via the coming electron app)).

## TODO

- drag and drop file or input file functionalities
- read the csv file, then present the list of fields to the user to be able to select which fields they want concatenated together
- output on screen and as file
- ask user where to download the file to
- ask user what to name the downloaded file
- allow the user to set defaults for download location and file name

## notes

- [Using files from web applications](https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications)
- [Using files from web applications](https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications)
- [Creating a Vue.js File Reader Component Using the FileReader API](https://alligator.io/vuejs/file-reader-component/)

having a hell of a time figuring out the `FileReader` api. Here are the resources that have been useful:

- https://developer.mozilla.org/en-US/docs/Web/API/FileReader/result
- https://scotch.io/tutorials/how-to-handle-file-uploads-in-vue-2 (although not very)
- https://blog.mounirmesselmeni.de/2012/11/20/reading-csv-file-with-javascript-and-html5-file-api/ (the main source of verbatim copying to make the json able to console log out)

## State

This app's state flow has the following properties:

- csv all content - loaded on file input by user
  - data type: string
  - vuex concept: STATE
  - name: `csv`
- set csv state
  - data type: function
  - vuex concept: MUTATION
  - name: `SET_CSV`
- csv headers get displayed to user to select which headers to concat together, after csv all content loads (this is actually STATE, because I'm not going to create it by analyzing the csv content, but rather as the result of [an event in the `csvtojson` library](https://github.com/Keyang/node-csvtojson#header))
  - data type: array of strings
  - vuex concept: STATE
  - name: `csvHeaders`
- set csvHeaders state
  - data type: function
  - vuex concept: MUTATION
  - name: `SET_CSV_HEADERS`
- csv as json
  - data type: array of objects
  - vuex concept: GETTER
  - name: `json`
- output data - happens after user selects which headers to concat together
  - data type: string
  - vuex concept: GETTER
  - name: `output`
- reset all above state after output file has been generated, so that app is ready to go at it again
  - data type: function
  - vuex concept: MUTATION
  - name: `RESET_CSV`
