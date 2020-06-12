<template>
  <div>
    <el-card class="box-card">
      <div>
        <div class="t-box">支持拖拽</div>
        <div class="i-box">
          <div class="i-box1">Element UI自带上传组件</div>
        </div>
        <div>
          <el-upload
            class="upload-demo"
            drag
            action="`/api/server/public/uploads`"
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
      <br />
      <div class="t-box">支持裁剪</div>
      <div class="i-box">
        <div class="i-box2">vue-image-crop-upload</div>
      </div>

      <div id="app">
        <el-button class="btn" @click="toggleShow" type="primary">上传照片</el-button>
        <my-upload
          @crop-success="cropSuccess"
          @crop-upload-success="cropUploadSuccess"
          @crop-upload-fail="cropUploadFail"
          v-model="show"
          :width="200"
          :height="200"
          img-format="png"
          :size="size"
          langType="zh"
          :noRotate="false"
          field="Avatar1"
          url="https://jsonplaceholder.typicode.com/posts/"
        ></my-upload>
        <img :src="imgDataUrl" />
      </div>
    </el-card>
  </div>
</template>
<script>
import myUpload from "vue-image-crop-upload";
export default {
  name: "PicturesUploaded",
  props: {},
  components: {
    "my-upload": myUpload
  },
  data() {
    return {
      imgDataUrl: "",
      show: false,
      size: 2.1
    };
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    },
    cropSuccess(imgDataUrl, field) {
      console.log("-------- crop success --------", imgDataUrl, field);
    },
    //上传成功回调
    cropUploadSuccess(jsonData, field) {
      // console.log("-------- upload success --------");
      this.imgDataUrl = jsonData.files.Avatar1;
      // console.log(jsonData);
      // console.log("field: " + field);
    },
    //上传失败回调
    cropUploadFail(status, field) {
      // console.log("-------- upload fail --------");
      // console.log("上传失败状态" + status);
      // console.log("field: " + field);
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box-card {
  width: 1300px;
  height: 600px;
  margin-left: 20px;
  margin-top: 20px;
}
.t-box {
  width: 100%;
  height: 50px;
  font-size: 22px;
  font-weight: 900;
}
.i-box {
  display: flex;
  align-content: center;
  width: 1000px;
  height: 50px;
  background: #999;
  font-size: 16px;
}
.btn {
  margin-top: 30px;
}
</style>