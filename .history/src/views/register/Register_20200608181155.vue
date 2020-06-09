<template>
  <div>
    <div class="container">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="display:flex;justify-content: center">欢迎来到小爱后台管理系统</span>
        </div>
        <div ></div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
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
.container {
  display: flex;
  justify-content: center;
  align-content: center;
}
.box-card {
  width: 500px;
  height: 300px;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
</style>