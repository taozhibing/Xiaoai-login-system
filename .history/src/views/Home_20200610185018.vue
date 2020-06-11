<template>
 <div>
<div>
<home-top></home-top>
<home-chart></home-chart>
<home-charta></home-charta>
<home-chartb></home-chartb>
</div>
 </div>
</template>

<script>
import HomeTop from '../components/home/HomeTop';
import homeChart from '../components/home/homeChart';
import homeCharta from '../components/home/homeCharta';
import homeChartb from '../components/home/homeChartb';
 export default {
   name: '',
   props: {
   },
   components: {
     HomeTop,
     homeChart,
     homeCharta,
     homeChartb,

   },
   data () {
     return {

     }
   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>