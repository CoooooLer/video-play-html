<template>
    <div class="">
      <div class="header">
        <div class="headertop_desc">
          <div class="wrap">
            <div class="nav_list">
              <ul>
                <ul>
                  <li><router-link to="/">首页</router-link></li>
<!--                  <li><router-link :to="{ name: 'preview', params: { order: '电影' }}">电影</router-link></li>-->
<!--                  <li><router-link :to="{ name: 'preview', params: { order: '电视剧' }}">电视剧</router-link></li>-->
                  <li><router-link to="/order">电影</router-link></li>
                  <li><router-link to="/preview">电影</router-link></li>
                  <li><router-link to="/about">电影000</router-link></li>
                </ul>
              </ul>
            </div>
            <div class="account_desc">
              <ul>
                <li><router-link to="/login">登录</router-link></li>
                <li><router-link to="/register">注册</router-link></li>
              </ul>
            </div>
            <div class="clear"></div>
          </div>
        </div>
        <div class="wrap">
          <div class="header_top">
            <div class="logo">
              <a href="index.html"><img src="../../public/static/images/logo.png" alt="" /></a>
            </div>
            <div class="header_top_right">
              <div class="search_box">
                <form>
                  <input type="text" value="请输入" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Search';}"><input type="submit" value="">
                </form>
              </div>
              <div class="clear"></div>
            </div>

            <div class="clear"></div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'header-other',
};
</script>

<style scoped>
  .router-link-exact-active {
    text-decoration: none;
    color: #fff;
  }
</style>
