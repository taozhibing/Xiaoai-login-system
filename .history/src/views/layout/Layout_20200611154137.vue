<template>
  <div>
    <el-container>
      <el-header>
        <div>欢迎{{obj.username}}来到小爱后台管理系统</div>
        <span>{{hour}}{{obj.username}} 登录时间：{{time}}</span>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-main>
            <el-row class="tac">
              <el-col :span="24">
                <el-menu
                  router
                  default-active="2"
                  class="el-menu-vertical-demo"
                  background-color="#545c64"
                  text-color="#fff"
                  active-text-color="#ffd04b"
                >
                  <el-menu-item index="/">
                    <i class="el-icon-location"></i>
                    <span slot="title">首页</span>
                  </el-menu-item>
                  <el-menu-item index="published">
                    <i class="el-icon-goods"></i>
                    <span slot="title">已发布</span>
                  </el-menu-item>
                  <el-menu-item index="census">
                    <i class="el-icon-bangzhu"></i>
                    <span slot="title">统计</span>
                  </el-menu-item>
                  <el-menu-item index="publishArticle">
                    <i class="el-icon-check"></i>
                    <span slot="title">发表文章</span>
                  </el-menu-item>
                  <el-menu-item index="label">
                    <i class="el-icon-setting"></i>
                    <span slot="title">标签页</span>
                  </el-menu-item>
                  <el-menu-item index="deriveExcel">
                    <i class="el-icon-setting"></i>
                    <span slot="title">导出Excel</span>
                  </el-menu-item>
                  <el-menu-item index="picturesUploaded">
                    <i class="el-icon-check"></i>
                    <span slot="title">图片上传</span>
                  </el-menu-item>
                  <el-menu-item index="logout">
                    <i class="el-icon-delete"></i>
                    <span slot="title">退出系统</span>
                  </el-menu-item>
                </el-menu>
              </el-col>
            </el-row>
          </el-main>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  name: "Layout",
  props: {},
  components: {},
  data() {
    return {
      obj: {},
      hour: "",
      time: ""
    };
  },
  methods: {},
  mounted() {
    this.obj = JSON.parse(sessionStorage.getItem("user"));
    this.time = dayjs().format("YYYY年MM月DD日HH时mm分ss秒");
    let hour = dayjs().format("HH");
    if (hour >= 6 && hour < 12) {
      this.hour = "早上好，亲爱的";
    } else if (hour >= 12 && hour < 14) {
      this.hour = "中午好，亲爱的";
    } else if (hour >= 14 && hour < 18) {
      this.hour = "下午好，亲爱的";
    } else if (hour >= 18 && hour < 24) {
      this.hour = "晚上好，亲爱的";
    } else {
      this.hour = "该睡觉了，亲爱的";
    }
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.el-container {
  width: 100%;
  height: 1500px;
}
.el-header {
  background: rgb(46, 94, 133);
  color: #eee;
  width: 100%;
  height: 30px;
  font-size: 14px;
  display: flex;
  align-content: center;
  justify-content: space-between;
  line-height: 60px;
}

.el-aside {
  text-align: center;
  line-height: 200px;
  background: #545c64;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  padding: 0 !important;
}
.el-progress-bar__outer {
  background-color: #fff !important;
}
</style>