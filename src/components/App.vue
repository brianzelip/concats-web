<template>
  <div>
  <h1>{{ msg }}</h1>
  <p>data:
    <pre>{{ data }}</pre>
  </p>

  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      msg: "Hello World!"
    };
  },
  computed: {
    ...mapState(["data"])
  }
};
</script>

