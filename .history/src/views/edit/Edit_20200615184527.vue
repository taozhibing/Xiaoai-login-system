<template>
  <div>
    <div class="top">
      <div>
        <el-button type="danger" @click="revert">返回</el-button>
      </div>
      <div>
        <el-button type="primary" @click="revert">发布</el-button>
      </div>
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
.top {
  display: flex;
  justify-content: space-between;
}
</style>