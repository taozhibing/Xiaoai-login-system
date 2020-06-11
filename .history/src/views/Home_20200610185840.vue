<template>
  <div>
    <div>
      <home-top></home-top>
      <home-chart></home-chart>
      <div style="display:flex;justify-content: space-around;">
        <div><home-charta></home-charta></div>
       <div> <home-chartb></home-chartb></div>
       <div> <home-chartc></home-chartc></div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeTop from "../components/home/HomeTop";
import homeChart from "../components/home/homeChart";
import homeCharta from "../components/home/homeCharta";
import homeChartb from "../components/home/homeChartb";
import homeChartc from "../components/home/homeChartc";
export default {
  name: "",
  props: {},
  components: {
    HomeTop,
    homeChart,
    homeCharta,
    homeChartb,
    homeChartc,
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>