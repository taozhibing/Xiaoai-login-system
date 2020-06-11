<template>
  <div>
    <div>
      <home-top></home-top>
      <home-chart></home-chart>
      <div style="display:flex;justify-content: space-around;">
       <div><home-charta></home-charta></div>
       <div><home-chartb></home-chartb></div>
       <div><home-chartc></home-chartc></div>
      </div>
      <div style="display:flex;justify-content: space-around;padding:20px">
       <div style="width:600px;height:100%"><home-chartd></home-chartd></div>
       <div><home-charte></home-charte></div>
       <div><home-chartf></home-chartf></div>
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
import homeChartd from "../components/home/homeChartd";
import homeCharte from "../components/home/homeCharte";
import homeChartf from "../components/home/homeChartf";
export default {
  name: "",
  props: {},
  components: {
    HomeTop,
    homeChart,
    homeCharta,
    homeChartb,
    homeChartc,
    homeChartd,
    homeCharte,
    homeChartf,
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