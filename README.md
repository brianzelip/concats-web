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
