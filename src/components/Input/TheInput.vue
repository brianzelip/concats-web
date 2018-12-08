<template>
  <section>
    <label for="fileInput">Select csv file:</label>
    <input
      @change="handleFile"
      accept=".csv"
      id="fileInput"
      name="fileInput"
      type="file"
    >
    <pre>{{ cOutput }}</pre>
  </section>
</template>

<script>
import CSV from "csvtojson";

export default {
  data() {
    return {
      cOutput: ""
    };
  },
  methods: {
    handleFile(e) {
      const vm = this;
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = function(event) {
        const csvContent = event.target.result;
        const jsonOutput = CSV()
          .fromString(csvContent)
          .then(j => vm.concatData(j));
      };
      reader.readAsText(file);
    },
    concatData(data) {
      this.cOutput = data
        .reduce((acc, obj) => {
          const keys = ["Group Name", "Meeting Rep Name", "Meeting Rep Phone"];
          var concattedString = "";
          keys.forEach((key, index) => {
            index !== 2
              ? (concattedString = concattedString.concat(`${obj[key]} `))
              : (concattedString = concattedString.concat(obj[key]));
          });
          acc.push(concattedString);
          return acc;
        }, [])
        .join("\n");
    }
  }
};
</script>
