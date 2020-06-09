<template>
  <div>
    <div class="container">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="display:flex;justify-content: center">欢迎来到小爱后台管理系统</span>
        </div>
        <div class="dv">
          <div style="width: 350px">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
              <el-form-item label="用户名" prop="username">
                <el-input v-model="ruleForm.username"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input v-model="ruleForm.password" show-password></el-input>
              </el-form-item>
              <el-form-item label="确认密码" prop="rePwd">
                <el-input v-model="ruleForm.rePwd" show-password></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="login">登录</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  props: {},
  components: {},
  data() {
    return {
       ruleForm: {
        username: "",
        password: "",
        rePwd: ""
      },
    };
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