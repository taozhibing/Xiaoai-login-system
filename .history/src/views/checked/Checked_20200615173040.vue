<template>
  <div>
    <div class="btn">
      <el-button type="primary" @click="revert">返回</el-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Checked",
  props: {},
  components: {},
  data() {
    return {
      arr : []
    };
  },
  methods: {
    revert() {
      this.$router.push("published");
      getDate() 
    }
  },
  mounted() {
    this._id = this.$route.query._id
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.btn {
  margin-left: 20px;
  margin-top: 20px;
}
</style>