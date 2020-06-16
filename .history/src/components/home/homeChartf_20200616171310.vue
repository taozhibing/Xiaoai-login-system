<template>
  <div style=" margin-left: 30px;">
    <el-card class="box-card">
      <div>
        <img
          src="https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png"
          alt
          width="100%"
        />
      </div>
      <div v-for="(item,index) in data" :key="index">
        <div style="font-size:14px">{{item.name}}</div>
        <el-progress
          v-if="item.progress*100 === 100"
          :percentage="item.progress*100"
          status="success"
        ></el-progress>
        <el-progress v-else :percentage="item.progress*100"></el-progress>
      </div>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      data: []
    };
  },
  methods: {
    format(percentage) {
      return percentage === 100 ? "满" : `${percentage}%`;
    },
    getData() {
      axios
        .get("/api/progress")
        .then(res => {
          this.data = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getData();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.el-progress-bar__outer {
  background-color: #fff !important;
}
.box-card {
    width: 480px;
  }
</style>