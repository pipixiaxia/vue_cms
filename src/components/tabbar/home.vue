<template>
    <div>
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item, i) in lunboList" :key="i">
          <img :src="apis + item.img" alt="">
        </mt-swipe-item>
      </mt-swipe>
      <ul class="mui-table-view mui-grid-view mui-grid-9">
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
              <img height="60" src="../../../static/img/menu1.png" alt="">
              <div class="mui-media-body">新闻资讯</div>
            </a>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
              <img height="60" src="../../../static/img/menu2.png" alt="">
              <div class="mui-media-body">图片分享</div>
            </a>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
              <img height="60" src="../../../static/img/menu3.png" alt="">
              <div class="mui-media-body">商品购买</div>
            </a>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
              <img height="60" src="../../../static/img/menu4.png" alt="">
              <div class="mui-media-body">留言反馈</div>
            </a>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
              <img height="60" src="../../../static/img/menu5.png" alt="">
              <div class="mui-media-body">视频专区</div>
            </a>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
              <img height="60" src="../../../static/img/menu6.png" alt="">
              <div class="mui-media-body">联系我们</div>
            </a>
          </li>
      </ul>
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

.mui-table-view.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  li {
    border: none;
    .mui-media-body {
      font-size: 14px;
    }
  }
}
</style>
