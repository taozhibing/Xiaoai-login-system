<template>
  <div>
    <div class="total">
      <div class="total_a" style="background-color: rgb(124, 202, 191);">
        <div class="total_b">
          <div>今日发布</div>
          <div>{{toda.length}}</div>
        </div>
        <i class="el-icon-check"></i>
      </div>
      <div class="total_a" style="background-color: rgb(232, 138, 135);">
        <div class="total_b">
          <div>原创文章</div>
          <div>{{self.length}}</div>
        </div>
        <i class="el-icon-tickets"></i>
      </div>
    </div>
    <div class="total_c">
      <div class="total_d">
        <ve-pie :data="chartData1"></ve-pie>
      </div>
      <div class="total_d">
        <ve-ring :data="chartData2" :settings="chartSettings"></ve-ring>
      </div>
    </div>
    <div class="total_e">
      <ve-histogram :data="chartData3"></ve-histogram>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import groupBy from "loadsh/groupBy";
import dayjs from "dayjs";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    this.chartSettings = {
      roseType: "radius"
    };
    return {
      chartData1: {
        columns: ["类目", "数量"],
        rows: []
      },
      chartData2: {
        columns: ["来源", "数量"],
        rows: []
      },
      chartData3: {
        columns: ["日期", "数量"],
        rows: []
      },
      toda: "",
      self: ""
    };
  },
  methods: {},
  mounted() {
    axios
      .get(`/api/article/allArticle`)
      .then(res => {
        let obj1 = groupBy(res.data.data, "category");
        for (let i in obj1) {
          this.chartData1.rows.push({
            数量: obj1[i].length,
            类目: i
          });
        }
        let obj2 = groupBy(res.data.data, "source");
        for (let i in obj2) {
          this.chartData2.rows.push({
            数量: obj2[i].length,
            来源: i
          });
        }
        res.data.data.map(item => {
          item.date = dayjs(item.date).format("YYYY年MM月DD日");
        });
        let obj3 = groupBy(res.data.data, "date");
        for (let i in obj3) {
          this.chartData3.rows.push({
            数量: obj3[i].length,
            日期: i
          });
        }
        this.toda = res.data.data.filter(item => {
          return item.date === dayjs().format("YYYY年MM月DD日");
        });
        this.self = res.data.data.filter(item => {
          return item.source === "原创";
        });
      })
      .catch(err => {
        console.log(err);
      });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.total {
  display: flex;
  width: 100%;
  margin-top: 20px;
  justify-content: space-around;
}
.total_a {
  width: 25%;
  display: flex;
  align-items: center;
  height: 50px;
  justify-content: space-around;
  color: white;
  background-color: rgb(124, 202, 191);
}
.total_b div {
  text-align: center;
}
.total_c {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}
.total_d {
  width: 48%;
}
</style>