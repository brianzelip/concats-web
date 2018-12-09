<template>
  <section>
    <label for="fileInput">Select csv file:</label>
    <input
      @change="setCsvInput"
      accept=".csv"
      id="fileInput"
      name="fileInput"
      type="file"
    >
    <div v-if="csvInputHeaders.length > 0">
      <p>Select the headers to concat in order:</p>
      <div
        :key="index"
        v-for="(header, index) in csvInputHeaders"
      >
        <input
          :id="`headers-${index}`"
          :value="header"
          name="headers"
          type="checkbox"
          v-model="userSelectedHeaders"
        >
        <label :for="`headers-${index}`">{{ header }}</label>
      </div>
    </div>
    <div v-if="userSelectedHeaders.length > 0">
      <p>user selected headers are:</p>
      <ol>
        <li
          :key="index"
          v-for="(header, index) in userSelectedHeaders"
        >{{ header }}</li>
      </ol>
    </div>
    <button :disabled="userSelectedHeaders.length < 1">Concat data</button>
    <pre>{{ csvOutput }}</pre>
  </section>
</template>

<script>
import CSV from "csvtojson";

export default {
  data() {
    return {
      csvInput: "",
      csvInputHeaders: [],
      userSelectedHeaders: [],
      csvOutput: ""
    };
  },
  methods: {
    setCsvInput(e) {
      const vm = this;
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.readAsText(file);
      reader.onload = function(event) {
        vm.csvInput = event.target.result;
        // const csvContent = event.target.result;
        // const jsonOutput = CSV()
        //   .fromString(csvContent)
        //   .on("header", header => {
        //     vm.csvInputHeaders = header;
        //   })
        //   .then(json => vm.concatData(json));
      };
    },
    concatData(data) {
      this.csvOutput = data
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
