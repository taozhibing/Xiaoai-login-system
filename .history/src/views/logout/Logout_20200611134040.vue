<template>
  <div class="container">
    <div class="box">
      <div style="font-size:18px;font-weight:700;">期待您的下次光临</div>
      <div>
        <el-button type="primary">确认离开</el-button>
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
</style>