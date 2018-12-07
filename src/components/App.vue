<template>
  <div>
    <FileInput></FileInput>
    <AppOutput></AppOutput>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

import FileInput from "./FileInput.vue";
import AppOutput from "./AppOutput.vue";

export default {
  components: {
    FileInput,
    AppOutput
  },
  computed: {
    ...mapState(["data"]),
    ...mapGetters(["concat"])
  }
};
</script>

