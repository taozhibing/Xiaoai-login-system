<template>
  <div>
    <div class="container">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="display:flex;justify-content: center">欢迎来到小爱后台管理系统</span>
        </div>
        <div class="dv">
          <div style="width: 350px">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px">
              <el-form-item label="请输入用户名" prop="username">
                <el-input v-model="ruleForm.username"></el-input>
              </el-form-item>
              <el-form-item label="请输入密码" prop="password">
                <el-input v-model="ruleForm.password" show-password></el-input>
              </el-form-item>
              <div style="display:flex;justify-content: center">
                <el-form-item>
                  <el-button type="primary" @click="login">立即注册</el-button>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="register">立即登录</el-button>
                </el-form-item>
              </div>
            </el-form>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Register",
  props: {},
  components: {},
  data() {
    return {
      ruleForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          {
            required: true,
            message: "用户名不能为空",
            trigger: "blur"
          },
          {
            min: 2,
            max: 10,
            message: "用户名在2-10位之间",
            trigger: "blur",
          }
        ],
        password: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur"
          },
          {
            min: 6,
            max: 15,
            message: "密码在6-15位之间",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    register() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          axios.post('/api/user/register',{
            username:this.ruleForm.username,
            password:this.ruleForm.password,
          }).then(res => {
           if(res.data.code === 200) {
              this.$message.success("注册成功");
           }
          }).cath(err => {
            console.log(err);
          })
        } else {
          this.$message.error("填写有误,请检查");
          return ;
        }
        // let user = {
        //   username: this.username
        // };
        // localStorage.setItem("user", JSON.stringify(user));
        // this.$router.push("/");
      });
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.container {
  display: flex;
  justify-content: center;
  align-content: center;
}
.box-card {
  width: 500px;
  height: 300px;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
</style>