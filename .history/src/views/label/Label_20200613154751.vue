<template>
  <div class="rab">
    <el-tabs v-model="activeName">
      <el-tab-pane :label="Unread" name="unread">
        <div class="tab">
          <div v-if=" arr.length > 0">
            <div v-for="(item,index) in arr" :key="index">
              <div class="box1">
                <div class="tab2">{{item.name}}</div>
                <div class="tab3">
                  <div class="box2">{{item.time}}</div>
                  <el-button class="tab-item1" @click="clickRead(item, index)" type="primary">标为已读</el-button>
                </div>
              </div>
              <div class="tab1"></div>
            </div>
            <el-button type="primary" class="tab5" @click="clickA">全部标为已读</el-button>
          </div>
          <div v-else>暂无数据了！</div>
        </div>
      </el-tab-pane>
      <el-tab-pane :label="Read" name="read">
        <div class="tab">
          <div v-if=" ass.length > 0">
            <div v-for="(item,index) in ass" :key="index">
              <div class="box1">
                <div class="tab2">{{item.name}}</div>
                <div class="tab3">
                  <div class="box2">{{item.time}}</div>

                  <el-button class="tab-item1" @click="clickDelete(item, index)" type="danger">删除</el-button>
                </div>
              </div>
              <div class="tab1"></div>
            </div>

            <el-button type="danger" class="tab5" @click="clickB">删除全部</el-button>
          </div>
          <div v-else>暂无数据了！</div>
        </div>
      </el-tab-pane>
      <el-tab-pane :label="recycleBin" name="recycle bin">
        <div class="tab">
          <div v-if=" asr.length > 0">
            <div v-for="(item,index) in asr" :key="index">
              <div class="box1">
                <div class=" tab2">{{item.name}}</div>
                <div class=" tab3">
                  <div class="box2">{{item.time}}</div>
                  <el-button class="tab-item1" type="warning" @click="clickReduction(item, index)">还原</el-button>
                </div>
              </div>
              <div class="tab1"></div>
            </div>
            <el-button type="info" class="tab5" @click="clickC">清空回收站</el-button>
          </div>
          <div v-else>暂无数据了！</div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Label",
  props: {},
  components: {},
  data() {
    return {
      activeName: "unread",
      arr: [
        {
          name: "[系统通知]该系统将于今晚凌晨2点到5点进行升级维护",
          time: "2018-04-19 20:00:00"
        },
        {
          name: "今晚12点整发大红包,先到先得",
          time: "2018-04-19 21:00:00"
        }
      ],
      ass: [
        {
          name: "[系统通知]该系统将于今晚凌晨2点到5点进行升级维护",
          time: "2020-6-13 15:32"
        }
      ],
      asr: [
        {
          name: "[系统通知]您的优惠券已经过期",
          time: "2020-6-13 15:32"
        }
      ]
    };
  },
  methods: {
    clickRead(item, index) {
      this.arr.splice(index, 1);
      this.ass.push(item);
    },
    clickDelete(item, index) {
      this.ass.splice(index, 1);
      this.asr.push(item);
    },
    clickReduction(item, index) {
      this.asr.splice(index, 1);
      this.arr.push(item);
    },
    clickA() {
      this.ass = this.ass.concat(this.arr);
      this.arr = [];
    },
    clickB() {
      this.asr = this.asr.concat(this.ass);
      this.ass = [];
    },
    clickC() {
      this.arr = this.ass.concat(this.arr);
      this.asr = [];
    }
  },
  mounted() {},
  watch: {},
  computed: {
    Unread() {
      return "未读消息" + "(" + this.arr.length + ")";
    },
    Read() {
      return "已读消息" + "(" + this.ass.length + ")";
    },
    recycleBin() {
      return "回收站" + "(" + this.asr.length + ")";
    }
  }
};
</script>

<style scoped lang='scss'>
.rab {
  height: 622px;
}
.tab {
  background: white;
  width: 1280px;
  height: 450px;
}
.tab2 {
  margin-left: 30px;
  margin-top: 28px;
}
.tab3 {
  margin-right: 50px;
  margin-top: 10px;
  display: flex;
}

.tab1 {
  width: 1200px;
  height: 1px;
  margin-left: 30px;
  margin-top: 20px;
  background: rgb(151, 146, 146);
}
.tab5 {
  margin-left: 30px;
  margin-top: 30px;
}
.tab-item1 {
  margin-top: 10px;
  margin-left: 15px;
}
.box1 {
  display: flex;
  justify-content: space-between;
  align-content: center;
}
.box2 {
 margin-top: 18px;
}
</style>