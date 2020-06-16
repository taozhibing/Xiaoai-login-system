<template>
  <div class="container">
    <div class="box">
      <div class="box1"></div>
      <div class="top">
        <div>
          <el-button type="danger" @click="revert">返回</el-button>
        </div>
        <div>
          <el-button type="primary" @click="publish">发布</el-button>
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
    <div id="main">
      <mavon-editor v-model="ruleForm.text"/>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Edit",
  props: {},
  components: {},
  data() {
    return {
      ruleForm: {},
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
      star: [
        {
          label: "1",
          value: "1"
        },
        {
          label: "2",
          value: "2"
        },
        {
          label: "3",
          value: "3"
        },
        {
          label: "4",
          value: "4"
        },
        {
          label: "5",
          value: "5"
        }
      ],
      id: ""
    };
  },
  methods: {
    publish() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          axios
            .post("/api/article/update", {
              title: this.ruleForm.title,
              abstract: this.ruleForm.abstract,
              author: this.ruleForm.author,
              category: this.ruleForm.category,
              source: this.ruleForm.source,
              star: this.ruleForm.star,
              text: this.ruleForm.text,
              data: this.ruleForm.data,
              id: this.id
            })
            .then(res => {
              if (res.data.success === true) {
                this.$message.success("发布成功");
                this.$router.push("published");
              } else {
                this.$message.error('发布失败');
              }
              console.log(res.data);
            })
            .catch(err => {
              console.log(err);
            });
        }
      });
    },
    revert() {
      this.$router.push("published");
    }
  },
  mounted() {
    this.id = this.$route.query._id;
     axios
        .post(`/api/article/article`, {
          _id: this.id
        })
        .then(res => {
          this.ruleForm = res.data.data
        })
        .catch(err => {
          console.log(err);
        });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.container {
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
.briefly {
  display: flex;
}
.box {
  display: flex;
  margin-top: 20px;
}
.article {
  margin-top: 30px;
}
</style>