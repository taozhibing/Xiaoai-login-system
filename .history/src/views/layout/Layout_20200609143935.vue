<template>
  <div>
    <el-container>
      <el-header>
      <div>欢迎xx</div>
      </el-header>
      <el-container>
        <el-aside width="400px" height="100%">
          <el-main>
            <el-row class="tac">
              <el-col :span="24">
                <el-menu
                  default-active="2"
                  class="el-menu-vertical-demo"
                  background-color="#545c64"
                  text-color="#fff"
                  active-text-color="#ffd04b">
                  <el-menu-item index="1">
                    <i class="el-icon-home"></i>
                    <span slot="title">首页</span>
                  </el-menu-item>
                  <el-menu-item index="2">
                    <i class="el-icon-ped"></i>
                    <span slot="title">已发布</span>
                  </el-menu-item>
                  <el-menu-item index="3" disabled>
                    <i class="el-icon-census"></i>
                    <span slot="title">统计</span>
                  </el-menu-item>
                  <el-menu-item index="4">
                    <i class="el-icon-ple"></i>
                    <span slot="title">发表文章</span>
                  </el-menu-item>
                  <el-menu-item index="5">
                    <i class="el-icon-label"></i>
                    <span slot="title">标签页</span>
                  </el-menu-item>
                  <el-menu-item index="6">
                    <i class="el-icon-del"></i>
                    <span slot="title">导出excel</span>
                  </el-menu-item>
                  <el-menu-item index="7">
                    <i class="el-icon-pud"></i>
                    <span slot="title">图片上传</span>
                  </el-menu-item>
                  <el-menu-item index="8">
                    <i class="el-icon-logout"></i>
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
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.el-header {
  background-color: rgb(7, 59, 102);
  color: #eee;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>