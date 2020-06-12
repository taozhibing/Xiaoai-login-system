<template>
  <div>
    <div class="dv">
      <el-table
        :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%"
      >
        <template>
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
      </el-table>
      <!-- <el-input v-model="search" size="mini" placeholder="请输入您想搜索的商品名称" /> -->
    </div>
    <el-table
      :data="tableData.slice((currentPage - 1) * pagesize, currentPage*pagesize)"
      style="width: 100%"
    >
      <el-table-column label="姓名" width="300" prop="NAME"></el-table-column>
      <el-table-column label="商品编号" width="220" prop="GOODS_SERIAL_NUMBER"></el-table-column>
      <el-table-column label="原价" width="240" prop="ORI_PRICE"></el-table-column>
      <el-table-column label="现价" width="240" prop="PRESENT_PRICE"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            icon="el-icon-edit"
            @click="handleEdit(scope.$index, scope.row)"
          >修改</el-button>
          <el-button
            size="mini"
            type="danger"
            icon="el-icon-delete"
            @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40, 50 ,60 , 70]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData.length"
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
      tableData: [],
      currentPage: 1, //默认第几页
      pagesize: 10, //默认一页多少条
      search: ""
    };
  },
  methods: {
    handleDelete(index, row) {
      this.tableData.splice(index, 1);
    },
    getData() {
      axios
        .get("/api/tableData")
        .then(res => {
          this.tableData = res.data.data;
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
  width: 300px;
  margin: 10px 10px 10px;
}
</style>