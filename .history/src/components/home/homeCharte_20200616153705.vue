<template>
  <div>
    <div class="list">
      <div class="todoList">
        <div @click="selectAll" :v-model="checkedAll">
        <i class="el-icon-arrow-down"></i>
        </div>
        <div class="todo">Todo List</div>
      </div>
      <div class="numberList" v-for="(item,index) in list" :key="index">
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
            <img src="../assets/关闭.png" class="icon" />
          </div>
        </div>
      </div>
      <div class="foot">
        <div class="items-left">{{sum}} items left</div>
        <div class="all" @click="clickSelectall">All</div>
        <div class="active" @click="clickActive">Active</div>
        <div class="completed" @click="clickCompleted">Completed</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>