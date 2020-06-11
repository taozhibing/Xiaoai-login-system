<template>
  <div class="container">
    <div class="box">
      <div class="box1">期待您的下次光临</div>
      <div>
        <el-button type="primary" class="box2">确认离开</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Logout",
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
.box {
  width: 200xp;
  height: 200px;
}
.box1 {
  width: 100%;
  height: 50px;
  font-size: 18px;
  font-weight: 700;
}
.box2 {
  width: 100%;
  height: 80px;

}
</style>