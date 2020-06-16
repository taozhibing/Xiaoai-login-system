<template>
  <div class="container">
    <div class="box">
      <div class="box1"></div>
      <div class="top">
        <div>
          <el-button type="danger">返回</el-button>
        </div>
        <div>
          <el-button type="primary">发布</el-button>
        </div>
      </div>
      <div class="box1"></div>
    </div>
    <div class="article">
      <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="文章标题" prop="title" :rules="[{required: true,message: '请输入文章标题', }]">
          <el-input v-model="ruleForm.title"></el-input>
        </el-form-item>
        <el-form-item label="文章摘要" prop="abstract" :rules="[{required: true,message: '请输入文章摘要', }]">
          <el-input v-model="ruleForm.abstract"></el-input>
        </el-form-item>
        <div class="briefly">
          <el-form-item label="作者" prop="author" :rules="[{required: true,message: '请输入作者', }]">
            <el-input v-model="ruleForm.author"></el-input>
          </el-form-item>
          <el-form-item label="类目" :rules="[{required: true,}]" prop="category">
            <el-select v-model="ruleForm.category" placeholder="请选择">
              <el-option
                v-for="(item,index) in category"
                :key="index"
                :label="item.lable"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="来源" prop="source" :rules="[{required: true,}]">
            <el-select v-model="ruleForm.source" placeholder="请选择">
              <el-option
                v-for="(item,index) in source"
                :key="index"
                :label="item.lable"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="重要性" prop="star" :rules="[{required: true,}]">
            <el-select v-model="ruleForm.star" placeholder="请选择">
              <el-option
                v-for="(item,index) in star"
                :key="index"
                :label="item.lable"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="发布时间" prop="date">
            <el-date-picker
              type="datetime"
              placeholder="选择日期时间"
              v-model="ruleForm.date"
              style="width: 100%;"
            ></el-date-picker>
          </el-form-item>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Edit",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.container {
  display: flex;
  width: 100%;
}
.top {
  display: flex;
  justify-content: space-between;
  width: 800px;
}
.box1 {
  width: 300px;
}
</style>