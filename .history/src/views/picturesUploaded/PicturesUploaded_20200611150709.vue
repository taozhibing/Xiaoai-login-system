<template>
  <div>
    <el-card class="box-card">
      <div>
        <div>支持拖拽</div>
        <div>Element UI自带上传组件</div>
        <div>
          <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple
          >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">
              将文件拖到此处，或
              <em>点击上传</em>
            </div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "PicturesUploaded",
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
.box-card {
  width: 1000px;
  height: 600px;
}
</style>