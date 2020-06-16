<template>
  <div>
    <div class="total">
      <div class="total_a" style="background-color: rgb(124, 202, 191);">
        <div class="total_b">
          <div>今日发布</div>
          <div>1</div>
        </div>
        <i class="el-icon-check"></i>
      </div>
      <div class="total_a" style="background-color: rgb(232, 138, 135);">
        <div class="total_b">
          <div>原创文章</div>
          <div>1</div>
        </div>
        <i class="el-icon-tickets"></i>
      </div>
    </div>
    <div class="total_c">
      <div class="total_d">
        <ve-pie :data="chartData"></ve-pie>
      </div>
      <div class="total_d">
        <ve-ring :data="chartData" :settings="chartSettings"></ve-ring>
      </div>
    </div>
    <!-- <div class="total_e">
      <ve-histogram :data="chartData"></ve-histogram>
    </div>-->
  </div>
</template>

<script>
import axios from "axios";
import groupBy from "loadsh/groupBy";
export default {
  name: "",
  props: {},
  components: {},
  data() {
      this.chartSettings = {
        dimension: '日期',
        metrics: '访问用户'
      }
    return {
      chartData: {
        columns: ["类目", "数量"],
        rows: []
      },
      chartData: {
        columns: ["来源", "数量"],
        rows: []
      },
      chartData: {
        columns: ["日期", "数量"],
        rows: []
      },
    };
  },
  methods: {},
  mounted() {
    axios.get(`/api/article/allArticle`).then(res => {
      let obj = groupBy(res.data.data,'category')
      for(let i in obj) {
        this.chartData.rows.push({
          '数量' : obj[i].length,
          '分类' : i
        })
      }
    })
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