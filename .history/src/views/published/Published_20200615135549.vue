<template>
  <div>
    <el-table
      :data="tableData.slice((currentPage - 1) * pagesize, currentPage*pagesize)"
      style="width: 100%"
    >
      <el-table-column label="标题" width="300" prop="title"></el-table-column>
      <el-table-column label="作者" width="220" prop="GOODS_SERIAL_NUMBER"></el-table-column>
      <el-table-column label="原价" width="240" prop="ORI_PRICE"></el-table-column>
      <el-table-column label="现价" width="240" prop="PRESENT_PRICE"></el-table-column>
      <el-table-column label="操作">
        <!-- <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            icon="el-icon-edit"
            @click="handleEdit(scope.row)"
          >修改</el-button>
          <el-button
            size="mini"
            type="danger"
            icon="el-icon-delete"
            @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button>
        </template> -->
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
  name: "Published",
  props: {},
  components: {},
  data() {
    return {
      tableData: []
    };
  },
  methods: {
    getData() {
      axios
        .get("/api/article/allArticle")
        .then(res => {
          this.tableData = res.data.data;
          console.log(res.data);
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
</style>