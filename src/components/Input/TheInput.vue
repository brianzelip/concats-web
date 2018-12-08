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
