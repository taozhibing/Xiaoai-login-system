<template>
  <div>
    <div class="total_a" style="background-color: rgb(124, 202, 191);">
      <div class="total_b">
        <div>今日发布</div>
        <div>1</div>
      </div>
      <i class="el-icon-check"></i>
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
.total{
    display: flex;
    width: 100%;
    margin-bottom: 30px;
}
.total_b div{
    text-align: center;
}
</style>