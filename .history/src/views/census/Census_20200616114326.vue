<template>
  <div>
    <div class="header">
      <div style="background-color: rgb(124, 202, 191);" class="box1">
        <div class="box2">
          <div class="box3">今日发布</div>
          <div class="box4">1</div>
        </div>
        <div>
          <i class="el-icon-check"></i>
        </div>
      </div>
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
</style>