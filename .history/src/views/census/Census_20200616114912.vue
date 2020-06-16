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
.total {
  display: flex;
  width: 100%;
 margin-top: 20px;
  justify-content: space-around;
}
.total_a {
  width: 25%;
  display: flex;
  align-items: center;
  height: 50px;
  justify-content: space-around;
  color: white;
  background-color: rgb(124, 202, 191);
}
.total_b div {
  text-align: center;
}
.total_c {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}
.total_d {
  width: 48%;
}
</style>