<template>
  <div>
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px" height="100%">
        <el-main>
          <el-row class="tac">
            <el-col :span="12">
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
              >
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>首页</span>
                  </template>
                <el-menu-item index="2">
                  <i class="el-icon-menu"></i>
                  <span slot="title">已发布</span>
                </el-menu-item>
                <el-menu-item index="3" disabled>
                  <i class="el-icon-document"></i>
                  <span slot="title">统计</span>
                </el-menu-item>
                <el-menu-item index="4">
                  <i class="el-icon-setting"></i>
                  <span slot="title">发表文章</span>
                </el-menu-item>
                <el-menu-item index="5">
                  <i class="el-icon-setting"></i>
                  <span slot="title">标签页</span>
                </el-menu-item>
                <el-menu-item index="6">
                  <i class="el-icon-setting"></i>
                  <span slot="title">导出excel</span>
                </el-menu-item>
                <el-menu-item index="7">
                  <i class="el-icon-setting"></i>
                  <span slot="title">图片上传</span>
                </el-menu-item>
                <el-menu-item index="8">
                  <i class="el-icon-setting"></i>
                  <span slot="title">退出系统</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </el-main>
        </el-aside>
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
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>