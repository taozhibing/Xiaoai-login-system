<template>
  <div>
    <div class="t-head">
      <div class="header">
        <el-button type="danger">查看</el-button>
        <el-button type="primary">发布</el-button>
      </div>
    </div>
    <div>
      <el-form
        :model="numberValidateForm"
        ref="numberValidateForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item
          label="文章标题"
          prop="articleTitle"
          :rules="[{ required: true,}, { type: 'text',}]"
        >
          <el-input type="text" v-model="articleTitle" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="文章摘要"
          prop="articleSummary"
          :rules="[{ required: true,}, { type: 'text',}]"
        >
          <el-input type="text" v-model="articleSummary" autocomplete="off"></el-input>
        </el-form-item>
        <div class="pbitem">
          <el-form-item label="作者" :rules="[{ required: true,}]">
            <el-input type="text" v-model="articleSummary" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="类目" :rules="[{ required: true,}]">
            <el-select placeholder="请选择" v-model="value1">
              <el-option
                v-for="(item) in category"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="来源" :rules="[{ required: true,}]">
            <el-select placeholder="请选择" v-model="value2">
              <el-option
                v-for="(item) in source"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="重要性" :rules="[{ required: true,}]">
            <el-select placeholder="请选择" v-model="value3">
              <el-option
                v-for="(item) in importance"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="发布时间" :rules="[{ required: true,}]">
            <el-input type="text" v-model="articleSummary" autocomplete="off"></el-input>
          </el-form-item>
        </div>
      </el-form>
    </div>
    <div id="main">
      <mavon-editor/>
    </div>
  </div>
</template>

<script>
export default {
  name: "PublishArticle",
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
.t-head {
  padding: 5px;
}
.header {
  width: 100%;
  height: 50px;
  background: rgb(89, 165, 134);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 15px;
}
</style>