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
    return {
      article : []
    };
  },
  methods: {
    getData() {
      axios
        .get("/api/article/allArticle")
        .then(res => {
          this.article = this.res.data
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getData()
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>