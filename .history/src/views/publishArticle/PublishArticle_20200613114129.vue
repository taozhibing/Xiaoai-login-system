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
        <div class="briefly">
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
          <el-form-item label="发布时间">
            <el-date-picker v-model="value4" type="datetime" placeholder="选择日期时间"></el-date-picker>
          </el-form-item>
        </div>
      </el-form>
    </div>
    <div id="main">
      <mavon-editor />
    </div>
  </div>
</template>

<script>
export default {
  name: "PublishArticle",
  props: {},
  components: {},
  data() {
    return {
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      numberValidateForm: {
        age: ""
      },
      category: [
        {
          label: "vue",
          value: "vue"
        },
        {
          label: "React",
          value: "React"
        },
        {
          label: "Node.js",
          value: "Node.js"
        },
        {
          label: "性能优化",
          value: "性能优化"
        },
        {
          label: "JavaScript",
          value: "JavaScript"
        },
        {
          label: "小程序",
          value: "小程序"
        },
        {
          label: "工具类",
          value: "工具类"
        },
        {
          label: "其他",
          value: "其他"
        }
      ],
      source: [
        {
          label: "原创",
          value: "原创"
        },
        {
          label: "转载",
          value: "转载"
        },
        {
          label: "国外",
          value: "国外"
        }
      ],
      importance: [
        {
          label: "1颗星",
          value: "1颗星"
        },
        {
          label: "2颗星",
          value: "2颗星"
        },
        {
          label: "3颗星",
          value: "3颗星"
        },
        {
          label: "4颗星",
          value: "4颗星"
        },
        {
          label: "5颗星",
          value: "5颗星"
        }
      ],
      articleTitle: "",
      articleSummary: ""
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
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
.briefly .el-form-item {
  width: 300px;
}
.briefly {
  display: flex;
}
</style>