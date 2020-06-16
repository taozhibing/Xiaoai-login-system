<template>
  <div>
    <div class="list">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <div>
            <i class="el-icon-arrow-down"></i>
          </div>
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
          <div class="all" @click="selectAll" :v-model="checkedAll">All</div>
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
      checkedAll: false
    };
  },
  methods: {
    // 全选按钮
    selectAll() {
      this.checkedAll = !this.checkedAll;
      this.list.map(item => {
        item.checked = this.checkedAll;
      });
    },
    // 删除按钮
    clickDelete(item1) {
      this.list = this.list.filter(item => {
        return item !== item1;
      });
    },
    // // 展示全部的
    // clickSelectAll() {
    //   this.list = this.list.map(item => {
    //     return item;
    //   });
    // },
    // 正在进行的
    clickActive() {
      this.list = this.list.filter(item => {
        return !item.checked;
      });
    },
    // 已完成
    clickCompleted() {
      this.list = this.list.filter(item => {
        return item.checked === true;
      });
    }
  },
  mounted() {},
  watch: {},
  computed: {
    // 显示未完成的
    sum() {
      let num = 0;
      this.list.map(item => {
        if (item.checked === false) {
          num++;
        }
      });
      return num;
    }
  }
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
  margin-left: 30px;
}
.foot {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  border-top: 1px solid #bfc5cb;
}
.items-left {
  font-size: 10px;
}
.all {
  width: 70px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  font-size: 10px;
  border: 1px solid #bfc5cb;
}
.active {
  font-size: 10px;
}
.completed {
  font-size: 10px;
}
.hover {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.hover:hover {
  .el-icon-close {
    display: block;
    background: #fc427b;
  }
}
</style>