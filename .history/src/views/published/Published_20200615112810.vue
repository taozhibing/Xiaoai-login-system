<template>
 <div>

 </div>
</template>

<script>
import axios from 'axios';
 export default {
   name: 'Published',
   props: {
   },
   components: {

   },
   data () {
     return {

     }
   },
   methods: {

   },
   mounted() {
     axios.get('/api/article/allArticle').then(res => {
       console.log(res.data);
     }).catch(err => {
       console.log(err);
     })

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>