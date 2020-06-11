<template>
 <div>
<div>
<home-top></home-top>
<home-chart></home-chart>
<home-charta></home-charta>
</div>
 </div>
</template>

<script>
import HomeTop from '../components/home/HomeTop';
import homeChart from '../components/home/homeChart';
import homeCharta from '../components/home/homeCharta';
 export default {
   name: '',
   props: {
   },
   components: {
     HomeTop,
     homeChart,
     homeCharta,

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