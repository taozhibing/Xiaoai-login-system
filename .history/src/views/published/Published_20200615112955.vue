<template>
  <div></div>
</template>

<script>
import axios from "axios";
export default {
  name: "Published",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {
    getData() {
      axios
        .get("/api/article/allArticle")
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>