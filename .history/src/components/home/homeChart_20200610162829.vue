<template>
  <div>
    <div class="hh">
      <ve-line :data="chartData"></ve-line>
    </div>
  </div>
</template>

<script>
import countTo from "vue-count-to";
export default {
  name: "",
  props: {},
  components: {
    countTo
  },
  data() {
    return {
      chartData: {
        columns: [],
        rows: []
      },
      arr: {}
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>