<template>
  <div>
    <p>Output:</p>
    <pre>{{ concat }}</pre>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["concat"])
  }
};
</script>
