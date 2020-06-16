<template>
  <div>
    <div class="btn">
      <el-button type="primary" @click="revert">返回</el-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Checked",
  props: {},
  components: {},
  data() {
    return {
    };
  },
  methods: {
    revert() {
      this.$router.push("published");
    },
    getData() {
      axios
        .post(`/api/article/article`, {
          _id: this.data._id
        })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this._id = this.$route.query._id;
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