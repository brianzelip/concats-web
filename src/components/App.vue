<template>
  <div>
    <TheInput></TheInput>
    <TheOutput></TheOutput>
    <hr>
    <TheFooter></TheFooter>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

import TheInput from "./Input/TheInput.vue";
import TheOutput from "./Output/TheOutput.vue";
import TheFooter from "./global/TheFooter.vue";

export default {
  components: {
    TheInput,
    TheOutput,
    TheFooter
  },
  computed: {
    ...mapState(["data"]),
    ...mapGetters(["concat"])
  }
};
</script>

