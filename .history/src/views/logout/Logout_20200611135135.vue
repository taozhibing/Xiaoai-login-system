<template>
  <div class="container">
    <div class="box">
      <div class="box1">期待您的下次光临</div>
      <div>
        <el-button type="primary" class="box2" @click="leave">确认离开</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Logout",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {
    leave() {
      axios.get('/api/user/logout').then(res => {
        console.log(res.data);
      }).catch(err => {
        console.log(err);
      })
    }
  },
  mounted() {
    this.leave()
  },
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
.box {
  width: 200xp;
  height: 200px;
  margin-top: 200px;
}
.box1 {
  width: 100%;
  height: 50px;
  font-size: 18px;
  font-weight: 700;
}
.box2 {
  width: 100%;

}
</style>