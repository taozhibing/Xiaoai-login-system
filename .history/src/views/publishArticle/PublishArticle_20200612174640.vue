<template>
  <div>
    <div class="t-head">
      <div class="header">
        <el-button type="danger">查看</el-button>
        <el-button type="primary">发布</el-button>
      </div>
    </div>
    <div>
    
    </div>
    <!-- <div id="main">
      <mavon-editor v-model="value" />
    </div> -->
  </div>
</template>

<script>
export default {
  name: "PublishArticle",
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
.t-head {
  padding: 5px;
}
.header {
  width: 100%;
  height: 50px;
  background: rgb(89,165,134);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 15px;
}
</style>