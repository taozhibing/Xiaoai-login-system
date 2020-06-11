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
  methods: {
     getData() {
      axios.get('/api/homeChat').then(res => {
        this.chartData.rows = res.data.data
        this.chartData.columns = Object.keys(res.data.data[0])
      }).catch(err => {
        console.log(err);
      })
    }
  },
  mounted() {
    this.getData()
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>