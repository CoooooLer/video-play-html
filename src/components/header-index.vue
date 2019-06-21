<template>
  <div>
    <div class="header">
      <div class="headertop_desc">
        <div class="wrap">
          <div class="nav_list">
            <ul>
              <li><router-link to="/">首页</router-link></li>
              <li><router-link :to="{ name: 'preview', params: { order: '电影' }}">电影</router-link></li>
              <li><router-link :to="{ name: 'preview', params: { order: '电视剧' }}">电视剧</router-link></li>
              <li><router-link to="/preview">电影</router-link></li>
              <li><router-link to="/preview">电影</router-link></li>
              <li><router-link to="/preview">电影</router-link></li>
              <li><router-link to="/preview">电影</router-link></li>
              <li><router-link to="/preview">电影</router-link></li>
            </ul>
          </div>
          <div class="account_desc">
            <ul>
              <li><a href="contact.html">登录</a></li>
              <li><a href="contact.html">注册</a></li>
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
        <div class="header_bottom">
          <div class="header_bottom_left">
            <div class="categories">
              <ul>
                <h3>分类</h3>
                <li><a href="#">所有</a></li>
                <li><a href="#">电影</a></li>
                <li><a href="#">电视剧</a></li>
              </ul>
            </div>
          </div>
          <div class="header_bottom_right">
            <!------ Slider ------------>
            <div class="slider">
              <div class="slider-wrapper theme-default">
                <div id="slider" class="nivoSlider">
                  <img src="../../public/static/images/1.jpg" data-thumb="images/1.jpg" alt="" />
                  <img src="../../public/static/images/2.jpg" data-thumb="images/2.jpg" alt="" />
                  <img src="../../public/static/images/3.jpg" data-thumb="images/3.jpg" alt="" />
                  <img src="../../public/static/images/4.jpg" data-thumb="images/4.jpg" alt="" />
                  <img src="../../public/static/images/5.jpg" data-thumb="images/5.jpg" alt="" />
                </div>
              </div>
            </div>
            <!------End Slider ------------>
          </div>
          <div class="clear"></div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

// $(document).ready(function() {
//   $().UItoTop({ easingType: 'easeOutQuart' });
// });

export default {
  name: 'header-index',
  created() {
    // $('#slider').nivoSlider();
  },
};

</script>

<style scoped>
  .router-link-active {
    text-decoration: none;
    color: #fff;
  }
</style>
