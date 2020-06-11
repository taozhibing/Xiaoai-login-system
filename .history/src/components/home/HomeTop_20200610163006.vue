<template>
  <div>
    <div class="h-head">
      <div class="h-box">
        <div>
          <img src="../../assets/partner.png" alt width="30px" />
        </div>
        <div>
          <div class="h-font">New Visits</div>
          <div class="h-font1">
            <countTo :startVal="startVal" :endVal="arr.visits" :duration="3000"></countTo>
          </div>
        </div>
      </div>
      <div class="h-box">
        <div>
          <img src="../../assets/message.png" alt width="30px" />
        </div>
        <div>
          <div class="h-font">New Messages</div>
          <div class="h-font1">
            <countTo :startVal="startVal" :endVal="arr.visits" :duration="3000"></countTo>
          </div>
        </div>
      </div>
      <div class="h-box">
        <div>
          <img src="../../assets/money.png" alt width="30px" />
        </div>
        <div>
          <div class="h-font">Purchases</div>
          <div class="h-font1">
            <countTo :startVal="startVal" :endVal="arr.visits" :duration="3000"></countTo>
          </div>
        </div>
      </div>
      <div class="h-box">
        <div>
          <img src="../../assets/cart.png" alt width="30px" />
        </div>
        <div>
          <div class="h-font">Shoppongs</div>
          <div class="h-font1">
            <countTo :startVal="startVal" :endVal="arr.visits" :duration="3000"></countTo>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  components: {
    countTo
  },
  data() {
    return {
      startVal: 0,
      endVal: 2017,
    };
  },
  methods: {
    getData() {
      axios.get('/api/homeData').then(res => {
        this.arr = res.data.data;
      }).catch(err => {
        console.log(err);
      });
    },
  },
  mounted() {
    this.getData();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.h-head {

}
</style>