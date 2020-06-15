<template>
  <div class="rab">
    <el-tabs v-model="activeName">
      <el-tab-pane :label="one" name="first">
        <div class="tab">
          <div v-if=" arr.length > 0">
            <div v-for="(item,index) in arr" :key="index">
              <div class="d-f j-c-s-b">
                <div class="m-t-20 tab2">{{item.name}}</div>
                <div class="d-f tab3">
                  <div class="m-t-20">{{item.time}}</div>
                  <el-button class="tab-item1" @click="clickq(item, index)">标为已读</el-button>
                </div>
              </div>
              <div class="tab1"></div>
            </div>
            <el-button type="primary" class="tab5" @click="clicka">全部标为已读</el-button>
          </div>
          <div v-else>暂无数据了！</div>
        </div>
      </el-tab-pane>
      <el-tab-pane :label="two" name="second">
        <div class="tab">
          <div v-if=" ass.length > 0">
            <div v-for="(item,index) in ass" :key="index">
              <div class="d-f j-c-s-b">
                <div class="m-t-20 tab2">{{item.name}}</div>
                <div class="d-f tab3">
                  <div class="m-t-20">{{item.time}}</div>

                  <el-button class="tab-item1" @click="clicked(item, index)">删除</el-button>
                </div>
              </div>
              <div class="tab1"></div>
            </div>

            <el-button type="danger" class="tab5" @click="clickb">删除全部</el-button>
          </div>
          <div v-else>暂无数据了！</div>
        </div>
      </el-tab-pane>
      <el-tab-pane :label="three" name="third">
        <div class="tab">
          <div v-if=" asr.length > 0">
            <div v-for="(item,index) in asr" :key="index">
              <div class="d-f j-c-s-b">
                <div class="m-t-20 tab2">{{item.name}}</div>
                <div class="d-f tab3">
                  <div class="m-t-20">{{item.time}}</div>
                  <el-button class="tab-item1" type="warning" @click="clickess(item, index)">还原</el-button>
                </div>
              </div>
              <div class="tab1"></div>
            </div>
            <el-button type="info" class="tab5" @click="clickc">清空回收站</el-button>
          </div>
          <div v-else>暂无数据了！</div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "Label",
  props: {},
  components: {},
  data() {
    return {
       activeName: "first",
      arr: [
        {
          name: "[系统通知]该系统将于今晚凌晨2点到5点进行升级维护",
          time: "2020-6-12 9:03"
        },
        {
          name: "今晚12点整发大红包,先到先得",
          time: "2020-6-12 9:03"
        }
      ],
      ass: [
        {
          name: "[系统通知]该系统将于今晚凌晨2点到5点进行升级维护",
          time: "2020-6-12 9:03"
        }
      ],
      asr: [
        {
          name: "[系统通知]您的优惠券已经过期",
          time: "2020-6-12 9:03"
        }
      ]
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