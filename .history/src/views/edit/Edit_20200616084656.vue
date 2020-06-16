<template>
  <div class="container">
   <div class="box">
   <div class="box1"></div>
    <div class="top">
      <div>
        <el-button type="danger" >返回</el-button>
      </div>
      <div>
        <el-button type="primary">发布</el-button>
      </div>
    </div>
    <div class="box1"></div>
   </div>
   <div class="article">
   
   </div>
  </div>
</template>

<script>
export default {
  name: "Edit",
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
  width: 100%;
}
.top {
  display: flex;
  justify-content: space-between;
  width: 800px;
}
.box1 {
  width: 300px;
}
</style>