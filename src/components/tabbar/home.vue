<template>
    <div>
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item, i) in lunboList" :key="i">
          <img :src="apis + item.img" alt="">
        </mt-swipe-item>
      </mt-swipe>
    </div>
</template>

<script>
export default {
  data() {
    return {
      lunboList: [],
      apis: "http://127.0.0.1:8899"
    };
  },
  methods: {
    getLunbo() {
      this.$axios.get("/api/getlunbo").then(res => {
        console.log(res);
        if (res.data.status === 0) {
          this.lunboList = res.data.message;
        }
      });
    }
  },
  created() {
    this.getLunbo();
  }
};
</script>

<style lang="less" scoped>
.mint-swipe {
  height: 150px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
