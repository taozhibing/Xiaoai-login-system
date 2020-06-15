<template>
  <div>
    <el-table
      :data="tableData.slice((currentPage - 1) * pagesize, currentPage*pagesize)"
      style="width: 100%"
    >
      <el-table-column label="标题" width="300" prop="title"></el-table-column>
      <el-table-column label="作者" width="120" prop="author"></el-table-column>
      <el-table-column label="类目" width="120" prop="category"></el-table-column>
      <el-table-column label="来源" width="120" prop="source"></el-table-column>
      <el-table-column label="重要性" width="120" prop="star"></el-table-column>
      <el-table-column label="发布时间" width="200" prop="date"></el-table-column>
      <el-table-column label="操作">
        <template>
          <el-button size="mini" type="primary"  @click="handleEdit()">编辑</el-button>
          <el-button size="mini" type="danger"  @click="handleDelete()">删除</el-button>
          <el-button size="mini" type="success"  @click="handlecheck()">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData.length"
    ></el-pagination>
  </div>
</template>

<script>
import axios from "axios";
import dayjs from 'dayjs';
export default {
  name: "Published",
  props: {},
  components: {},
  data() {
    return {
      tableData: [],
      currentPage: 1, //默认第几页
      pagesize: 10,
      date : ''
    };
  },
  methods: {
    getData() {
      axios
        .get("/api/article/allArticle")
        .then(res => {
          res.data.data.map(item => {
            item.date = dayjs(item,date).format("YYYY年MM月DD日HH时mm分ss秒");
          })
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