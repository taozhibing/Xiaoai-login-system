<template>
  <div>
    <div class="h-head">
      <div class="h-box">
        <div>
          <img src="../../assets/partner.png" alt width="30px" />
        </div>
        
      </div>
      <div class="h-box">
        <div>
          <img src="../../assets/message.png" alt width="30px" />
        </div>
        <div>
          <div class="h-font">New Messages</div>
          <div class="h-font1">
            <countTo :startVal="startVal" :endVal="arr.messages" :duration="3000"></countTo>
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
            <countTo :startVal="startVal" :endVal="arr.purchases" :duration="3000"></countTo>
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
            <countTo :startVal="startVal" :endVal="arr.shopping" :duration="3000"></countTo>
          </div>
        </div>
      </div>
    </div>
    <div class="hh">
      <ve-line :data="chartData"></ve-line>
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
      chartData: {
        columns: [],
        rows: []
      },
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
    getData1() {
      axios
        .get("/api/homeChat")
        .then(res => {
          this.chartData.rows = res.data.data;
          this.chartData.columns = Object.keys(res.data.data[0]);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getData();
    this.getData1();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.h-head {
  width: 100%;
  display: flex;
  justify-content: space-around;
  height: 70px;
  margin-bottom: 20px;
}
.h-box {
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
.h-font {
  font-size: 12px;
}
.h-font1 {
  font-size: 16px;
  font-weight: 700;
}
.hh {
    background-color: white;
    width: 100%;
    margin-bottom: 20px;
}
</style>