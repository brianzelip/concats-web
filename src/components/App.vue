<template>
  <div>
    <FileInput></FileInput>
    <hr>
    <AppOutput></AppOutput>
    <hr>
    <app-footer></app-footer>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

import FileInput from "./FileInput.vue";
import AppOutput from "./AppOutput.vue";
import appFooter from "./Footer.vue";

export default {
  components: {
    FileInput,
    AppOutput,
    appFooter
  },
  computed: {
    ...mapState(["data"]),
    ...mapGetters(["concat"])
  }
};
</script>

