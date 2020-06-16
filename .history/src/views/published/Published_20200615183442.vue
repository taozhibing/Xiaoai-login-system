<template>
  <div>
    <el-table
      :data="tableData.slice((currentPage - 1) * pagesize, currentPage*pagesize)"
      style="width: 100%"
    >
      <el-table-column label="标题" width="300" prop="title"></el-table-column>
      <el-table-column label="作者" width="120" prop="author"></el-table-column>
      <el-table-column label="类目" width="120" prop="category">
        <template slot-scope="scope">
          <div v-if="scope.row.category==='Vue'">
            <el-tag type="success">{{scope.row.category}}</el-tag>
          </div>
          <div v-else-if="scope.row.category==='React'">
            <el-tag type="info">{{scope.row.category}}</el-tag>
          </div>
          <div v-else-if="scope.row.category==='Node.js'">
            <el-tag type="warning">{{scope.row.category}}</el-tag>
          </div>
          <div v-else-if="scope.row.category==='性能优化'">
            <el-tag type="success">{{scope.row.category}}</el-tag>
          </div>
          <div v-else-if="scope.row.category==='JavaScript'">
            <el-tag type="warning">{{scope.row.category}}</el-tag>
          </div>
          <div v-else-if="scope.row.category==='小程序'">
            <el-tag type="danger">{{scope.row.category}}</el-tag>
          </div>
          <div v-else-if="scope.row.category==='工具类'">
            <el-tag type="danger">{{scope.row.category}}</el-tag>
          </div>
          <div v-else-if="scope.row.category==='其他'">
            <el-tag>{{scope.row.category}}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="来源" width="120" prop="source"></el-table-column>
      <el-table-column label="重要性" width="160" prop="star">
        <template slot-scope="scope">
          <el-rate v-model="scope.row.star"></el-rate>
        </template>
      </el-table-column>
      <el-table-column label="发布时间" width="240" prop="date">
        <template slot-scope="scope">{{scope.row.date}}</template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
          <el-button size="mini" type="success" @click="handlecheck(scope.row)">查看</el-button>
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
import dayjs from "dayjs";
export default {
  name: "Published",
  props: {},
  components: {},
  data() {
    return {
      tableData: [],
      currentPage: 1, //默认第几页
      pagesize: 10,
      star: null
    };
  },
  methods: {
    getData() {
      axios
        .get("/api/article/allArticle")
        .then(res => {
          this.tableData = res.data.data;
          this.tableData.map(item => {
            item.star = item.star * 1;
            item.date = dayjs(item.date).format("YYYY年MM月DD日HH时mm分ss秒");
          });
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
    },
    handleEdit(row) {
       this.$router.push({name:'Edit',query:{_id:row._id}});
    },
    handleDelete(row) {
      axios
        .post(`/api/article/delete`, {
          _id: row._id
        })
        .then(res => {
          if (res.data.code === 200) {
            this.$message.success("删除成功");
            this.getData();
          } else {
            this.$message.error(res.data.message);
          }
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    handlecheck(row) {
      this.$router.push({name:'Checked',query:{_id:row._id}});
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