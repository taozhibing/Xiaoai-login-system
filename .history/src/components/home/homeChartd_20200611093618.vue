<template>
  <div>
    <div class="h-body">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="num" label="Order_No" width="350"></el-table-column>
        <el-table-column prop="price" label="Price" width="150"></el-table-column>
        <el-table-column prop="status" label="Stauts">
          <template>
            <div class="pending" v-if="status === 0">pengding</div>
            <div class="success" v-else>success</div>
          </template>
        </el-table-column>
      </el-table>
    </div>
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
      tableData: [
        {
          num: "",
          price: "",
          status: ""
        }
      ]
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>