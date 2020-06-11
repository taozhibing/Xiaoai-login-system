<template>
 <div>
<div class="chart">
      <ve-ring :data="chartData" :setting="chartSettings"></ve-ring>
    </div>
 </div>
</template>

<script>
import axios from "axios";
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     this.chartSettings = {
      roseType: "radius"
    };
     return {
        chartData: {
        columns: [],
        rows: []
      }

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