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
          <div class="h-font">New Visits</div>
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
          <div class="h-font">New Visits</div>
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
          <div class="h-font">New Visits</div>
          <div class="h-font1">
            <countTo :startVal="startVal" :endVal="arr.visits" :duration="3000"></countTo>
          </div>
        </div>
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