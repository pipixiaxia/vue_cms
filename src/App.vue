<template>
 <div class="app-container">
  <!-- 顶部Header区域 -->
  <mt-header fixed title="CMS"></mt-header>
  <!-- 中间router-view区域 -->
  <nav class="mui-bar mui-bar-tab">
    <router-link class="mui-tab-item mui-active" to="/tabbar">
      <span class="mui-icon mui-icon-home"></span>
      <span class="mui-tab-label">首页</span>
    </router-link>
    <router-link class="mui-tab-item" to="/member">
      <span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
      <span class="mui-tab-label">消息</span>
    </router-link>
    <router-link class="mui-tab-item" to="/news">
      <span class="mui-icon mui-icon-contact"></span>
      <span class="mui-tab-label">通讯录</span>
    </router-link> 
    <router-link class="mui-tab-item" to="/setting">
      <span class="mui-icon mui-icon-gear"></span>
      <span class="mui-tab-label">设置</span>
    </router-link>
  </nav>
  <!-- 底部Tabbar区域 -->
 </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {}
};
</script>

<style>
.app-container {
  padding-top: 40px;
  padding-bottom: 50px;
}
</style>
