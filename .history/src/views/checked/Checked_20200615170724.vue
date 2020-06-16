<template>
 <div>
<el-button type="primary" @click="revert">返回</el-button>
 </div>
</template>

<script>
 export default {
   name: 'Checked',
   props: {
   },
   components: {

   },
   data () {
     return {

     }
   },
   methods: {
     revert() {
       this.$router.push('published')
     }
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