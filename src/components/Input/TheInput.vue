<template>
  <section>
    <label for="fileInput">Select csv file:</label>
    <input
      @change="fileHandler"
      accept=".csv"
      id="fileInput"
      name="fileInput"
      type="file"
    >
  </section>
</template>

<script>
import CSV from "csvtojson";

export default {
  data() {
    return {};
  },
  methods: {
    fileHandler(e) {
      const file = e.target.files[0];
      const reader = new FileReader();

      function getAsText(fileToRead) {
        var reader = new FileReader();
        // Read file into memory as UTF-8
        reader.readAsText(fileToRead);
        // Handle errors load
        reader.onload = loadHandler;
        reader.onerror = errorHandler;
      }

      function loadHandler(event) {
        var csv = event.target.result;
        processData(csv);
      }

      function processData(csv) {
        console.log("CCSSVV:::", csv);
        CSV()
          .fromString(csv)
          .then(a => console.log("a:::::", a));

        // console.log("CSV().fromString(csv)", CSV().fromString(csv));

        // var allTextLines = csv.split(/\r\n|\n/);
        // var lines = [];
        // for (var i = 0; i < allTextLines.length; i++) {
        //   var data = allTextLines[i].split(";");
        //   var tarr = [];
        //   for (var j = 0; j < data.length; j++) {
        //     tarr.push(data[j]);
        //   }
        //   lines.push(tarr);
        // }
        // console.log("LINESSSSSS:::::", lines);
      }

      function errorHandler(evt) {
        if (evt.target.error.name == "NotReadableError") {
          alert("Canno't read file !");
        }
      }

      getAsText(file);

      // reader.readAsText(file);
      // reader.onload = loadHandler;
      // reader.onerror = errorHandler;

      // function loadHandler(event) {
      //   var csv = event.target.result;
      //   processData(csv);
      // }
      console.log("fileHandler!:::e.target.files[0] is==>", e.target.files[0]);
      // console.log("reader.result", reader.result);
      console.log("file", file);
      // console.log("reader", reader);
      // console.log("reader.readAsText(file)", reader.readAsText(file));
    }
  }
};
</script>
