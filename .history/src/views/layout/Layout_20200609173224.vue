<template>
  <div>
    <el-container>
      <el-header>
        <div>欢迎xx来到小爱后台管理系统</div>
        <span>早上好，亲爱的xx 登录时间：</span>
      </el-header>
      <el-container>
        <el-aside width="200px" height="1000px">
          <el-main>
            <el-row class="tac">
              <el-col :span="24">
                <el-menu
                  default-active="2"
                  class="el-menu-vertical-demo"
                  background-color="#545c64"
                  text-color="#fff"
                  active-text-color="#ffd04b"
                >
                  <el-menu-item index="2">
                    <i class="el-icon-location"></i>
                    <span slot="title">首页</span>
                  </el-menu-item>
                  <el-menu-item index="3">
                    <i class="el-icon-menu"></i>
                    <span slot="title">已发布</span>
                  </el-menu-item>
                  <el-menu-item index="4">
                    <i class="el-icon-menu"></i>
                    <span slot="title">统计</span>
                  </el-menu-item>
                  <el-menu-item index="5">
                    <i class="el-icon-check"></i>
                    <span slot="title">发表文章</span>
                  </el-menu-item>
                  <el-menu-item index="6">
                    <i class="el-icon-setting"></i>
                    <span slot="title">标签页</span>
                  </el-menu-item>
                  <el-menu-item index="7">
                    <i class="el-icon-setting"></i>
                    <span slot="title">导出Excel</span>
                  </el-menu-item>
                  <el-menu-item index="8">
                    <i class="el-icon-setting"></i>
                    <span slot="title">图片上传</span>
                  </el-menu-item>
                  <el-menu-item index="9">
                    <i class="el-icon-delete"></i>
                    <span slot="title">退出系统</span>
                  </el-menu-item>
                </el-menu>
              </el-col>
            </el-row>
          </el-main>
        </el-aside>
        <router-view></router-view>
        <el-main>main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Layout",
  props: {},
  components: {},
  data() {
    return {
      obj: []
    };
  },
  methods: {},
  mounted() {
    this.obj = JSON.parse(sessionStorage.getItem("user"));
    this.time = dayjs(this.obj.date).format("YYYY年MM月DD日HH时mm分ss秒");
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.el-header {
  background-color: rgb(46, 94, 133);
  color: #eee;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
  padding: 0 !important;
}
</style>