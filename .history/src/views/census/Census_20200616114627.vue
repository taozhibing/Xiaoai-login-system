<template>
  <div>
     <div class="total">
         <div class="total_a" style="background-color: rgb(124, 202, 191);">
             <div class="total_b">
                 <div>今日发布</div>
                 <div>1</div>
             </div>
             <i class="el-icon-check"></i>
         </div>
         <div class="total_a" style="background-color: rgb(232, 138, 135);">
             <div class="total_b">
                 <div>原创文章</div>
                 <div>1</div>
             </div>
             <i class="el-icon-tickets"></i>
         </div>
     </div>
     <div class="total_c">
         <div class="total_d">
             <ve-pie :data="chartData"></ve-pie>
         </div>
         <div class="total_d">
             <ve-ring :data="chartData" :settings="chartSettings"></ve-ring>
         </div>
     </div>
     <div class="total_e">
         <ve-histogram :data="chartData"></ve-histogram>
     </div>
 </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
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
.header {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
}
.box1 {
  display: flex;
  justify-content: center;
  align-content: center;
  width: 200px;
  margin-top: 20px;
 
}
.box2 {
  text-align: center;
}
.box3 box4 {
  margin-left: 10px;
}
.el-icon-check {
  width: 50px;
  height: 80px;
}
</style>