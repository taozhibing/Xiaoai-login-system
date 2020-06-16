<template>
  <div>
    <div class="list">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <div @click="selectAll" :v-model="checkedAll"><i class="el-icon-arrow-down"></i></div>
          <div style="float: right; padding: 3px 0" type="text">Todo List</div>
        </div>
        <div v-for="(item,index) in list" :key="index" class="text item">
          <div class="hover">
            <div class="leftList">
              <div>
                <input type="checkbox" v-model="item.checked" />
              </div>
              <div>
                <div class="itemName">{{item.name}}</div>
              </div>
            </div>
            <div @click="clickDelete(item)" class="delete">
            <i class="el-icon-close"></i>
            </div>
          </div>
        </div>
        <div class="foot">
        <div class="items-left">{{sum}} items left</div>
        <div class="all" @click="clickSelectAll">All</div>
        <div class="active" @click="clickActive">Active</div>
        <div class="completed" @click="clickCompleted">Completed</div>
        </div>
      </el-card>
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
      list: [
        {
          name: "satr this repository",
          checked: false
        },
        {
          name: "fork this repository",
          checked: false
        },
        {
          name: "follow author",
          checked: false
        },
        {
          name: "vue-admin",
          checked: false
        },
        {
          name: "vue",
          checked: false
        },
        {
          name: "element-ui",
          checked: false
        },
        {
          name: "axios",
          checked: true
        },
        {
          name: "wepback",
          checked: true
        }
      ],
      checkedAll : false,
    };
  },
  methods: {
    selectAll() {
      this.checkedAll = !this.checkedAll;

    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 350px;
}
</style>