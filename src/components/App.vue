<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>concat:</p>
    <pre>{{ concat }}</pre>
    <p>data:</p>
    <pre>{{ data }}</pre>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  data() {
    return {
      msg: "Hello World!"
    };
  },
  computed: {
    ...mapState(["data"]),
    ...mapGetters(["concat"])
  }
};
</script>

