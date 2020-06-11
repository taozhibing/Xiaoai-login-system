<template>
  <div class="contair">
    <el-row :gutter="12">
      <div class="box">
        <el-col :span="8">
          <el-card shadow="always">
            <div>
              <img src="../../assets/partner.png" alt width="30px" />
            </div>
            <div>
              <div style=" font-size: 12px;">New Visits</div>
              <div style="font-size:16px;font-weight:700;">
                <countTo :startVal="startVal" :endVal="arr.visits" :duration="3000"></countTo>
              </div>
            </div>
          </el-card>
        </el-col>
      </div>
      <div>
        <el-col :span="8">
          <el-card shadow="always">
            <div>
              <img src="../../assets/message.png" alt width="30px" />
            </div>
            <div>
              <div style=" font-size: 12px;">New Messages</div>
              <div style="font-size:16px;font-weight:700;">
                <countTo :startVal="startVal" :endVal="arr.messages" :duration="3000"></countTo>
              </div>
            </div>
          </el-card>
        </el-col>
      </div>
      <div>
        <el-col :span="8">
          <el-card shadow="always">
            <div>
              <img src="../../assets/money.png" alt width="30px" />
            </div>
            <div>
              <div style=" font-size: 12px;">Purchases</div>
              <div style="font-size:16px;font-weight:700;">
                <countTo :startVal="startVal" :endVal="arr.purchases" :duration="3000"></countTo>
              </div>
            </div>
          </el-card>
        </el-col>
      </div>
      <div>
        <el-col :span="8">
          <el-card shadow="always">
            <div>
              <img src="../../assets/cart.png" alt width="30px" />
            </div>
            <div>
              <div style="font-size:12px;">Shoppongs</div>
              <div style="font-size:16px;font-weight:700;">
                <countTo :startVal="startVal" :endVal="arr.shopping" :duration="3000"></countTo>
              </div>
            </div>
          </el-card>
        </el-col>
      </div>
    </el-row>
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
    }
  },
  mounted() {
    this.getData();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.contair {
  width: 100%;
  height: 100px;
  display: flex;
}
.box {
  width: 280px;
  height: 100%;
  display: flex;
  justify-content: space-around;
}
</style>