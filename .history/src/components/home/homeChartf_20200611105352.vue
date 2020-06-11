<template>
  <div>
    <div>
      <img
        src="https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png"
        alt
        width="100%"
      />
    </div>
    <div class="progressbar" v-for="(item,index) in data" :key="index">
      <div>{{item.name}}</div>
      <el-progress
        v-if="item.progress*100 === 100"
        :percentage="item.progress*100"
        :stroke-width="15"
        status="success"
      ></el-progress>
      <el-progress v-else :percentage="item.progress*100" :stroke-width="15"></el-progress>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      data : []
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>