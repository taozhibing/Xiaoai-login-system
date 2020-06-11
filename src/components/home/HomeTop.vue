<template>
  <div>
    <div class="header">
      <div class="box">
        <div>
          <img src="../../assets/partner.png" alt width="30px" />
        </div>
        <div>
          <div style=" font-size: 12px;">New Visits</div>
          <div style="font-size:16px;font-weight:700;">
            <countTo :startVal="startVal" :endVal="arr.visits" :duration="3000"></countTo>
          </div>
        </div>
      </div>
      <div class="box">
        <div>
          <img src="../../assets/message.png" alt width="30px" />
        </div>
        <div>
          <div style=" font-size: 12px;">New Messages</div>
          <div style="font-size:16px;font-weight:700;">
            <countTo :startVal="startVal" :endVal="arr.messages" :duration="3000"></countTo>
          </div>
        </div>
      </div>
      <div class="box">
        <div>
          <img src="../../assets/money.png" alt width="30px" />
        </div>
        <div>
          <div style=" font-size: 12px;">Purchases</div>
          <div style="font-size:16px;font-weight:700;">
            <countTo :startVal="startVal" :endVal="arr.purchases" :duration="3000"></countTo>
          </div>
        </div>
      </div>
      <div class="box">
        <div>
          <img src="../../assets/cart.png" alt width="30px" />
        </div>
        <div>
          <div style="font-size:12px;">Shoppongs</div>
          <div style="font-size:16px;font-weight:700;">
            <countTo :startVal="startVal" :endVal="arr.shopping" :duration="3000"></countTo>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import countTo from "vue-count-to";
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
      arr: {}
    };
  },
  methods: {
    getData() {
      axios
        .get("/api/homeData")
        .then(res => {
          this.arr = res.data.data;
        })
        .catch(err => {
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
.header {
  width: 100%;
  display: flex;
  justify-content: space-around;
  height: 70px;
  margin-bottom: 20px;
}
.box {
  width: 280px;
  display: flex;
  justify-content: space-around;
  padding: 5px;
  margin: 5px;
  height: 100%;
  align-items: center;
  box-shadow: 0 3px 3px 0 #dddddd;
  background-color: white;
}
</style>