<template>
  <div>
    <div>
      <div class="btn">
        <el-button type="primary" @click="revert">返回</el-button>
      </div>
      <div></div>
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
      id: "",
      arr :[]
    };
  },
  methods: {
    revert() {
      this.$router.push("published");
    },
    getData() {
      axios
        .post(`/api/article/article`, {
          _id: this.id
        })
        .then(res => {
          console.log(res.data);
          this.arr = res.data.data
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.id = this.$route.query._id;
    this.getData();
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