<template>
  <div>
    <div>
      <div class="btn">
        <el-button type="primary" @click="revert">返回</el-button>
      </div>
      <div class="tle">{{arr.title}}</div>
      <div class="abt">摘要 ：{{arr.abstract}}</div>
      <div class="abt">发表于：{{arr.date}}</div>
      <el-card class="box-card">
        <div class="text">{{arr.text}}</div>
      </el-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import dayjs from 'dayjs';
export default {
  name: "Checked",
  props: {},
  components: {},
  data() {
    return {
      id: "",
      arr: {},
      date: ''
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
          this.arr = res.data.data;
          this.date = dayjs(res.data.data.date).format("YYYY年MM月DD日HH时mm分ss秒");
          console.log(res.data);
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
.tle {
  display: flex;
  align-content: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
}
.abt {
  display: flex;
  align-content: center;
  justify-content: center;
}
.text {
  margin-left: 20px;
}
.box-card {
  margin-top: 30px;
  height: 100%;
}
</style>