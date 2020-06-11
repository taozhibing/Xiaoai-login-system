<template>
  <div>
    <div class="chart">
      <ve-histogram :data="chartData"></ve-histogram>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      chartData: {
        columns: [],
        rows: []
      }
    };
  },
  methods: {
     getData() {
      axios
        .get("/api/homeChat")
        .then(res => {
          this.chartData.rows = res.data.data;
           this.chartData.columns = Object.keys(res.data.data[0]);
        })
        .catch(err => {
          console.log(err);
        });
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
.chart {
  width: 400px;
  height: 360px;
  background: white;
}
</style>