<template>
  <div>
  <div class="dv"><input type="text"></div>
    <el-table :data="arr.slice((currentPage - 1) * pagesize, currentPage*pagesize)" style="width: 100%">
      <el-table-column label="姓名" width="300" prop="NAME"></el-table-column>
      <el-table-column label="商品编号" width="220" prop="GOODS_SERIAL_NUMBER"></el-table-column>
      <el-table-column label="原价" width="240" prop="ORI_PRICE"></el-table-column>
      <el-table-column label="现价" width="240" prop="PRESENT_PRICE"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" icon="el-icon-edit" @click="revise">修改</el-button>
          <el-button size="mini" type="danger" icon="el-icon-delete" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="arr.length"
    ></el-pagination>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "PagingForm",
  props: {},
  components: {},
  data() {
    return {
      arr: [],
      currentPage: 1, //默认第几页
      pagesize: 10 //默认一页多少条
    };
  },
  methods: {
    handleDelete(index, row) {
      this.arr.splice(index, 1);
    },
    getData() {
      axios
        .get("/api/tableData")
        .then(res => {
          this.arr = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleSizeChange(val) {
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
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
.dv {
  margin: 10px 10px 10px;
}
</style>