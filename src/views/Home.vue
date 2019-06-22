<template>
  <div class="home">
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <Header/>
    <div class="wrap">
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

    <div class="main">
      <div class="wrap">
        <div class="content">
          <content-top :list="newList" :title="newTitle" />
          <content-top :list="hotList" :title="hotTitle" />
<!--          <div class="content_top">-->
<!--            <div class="heading">-->
<!--              <h3>New Products</h3>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="section group">-->
<!--            <div class="grid_1_of_5 images_1_of_5" v-for="(item, index) in newList" :key="index">-->
<!--              <router-link :to=item.path><img :src=item.img alt="" /></router-link>-->
<!--              <h2><router-link :to=item.path>{{ item.title }}</router-link></h2>-->
<!--              <div class="price-details">-->
<!--                <div class="price-number">-->
<!--                  <p><span class="rupees">${{ item.price }}</span></p>-->
<!--                </div>-->
<!--                <div class="add-cart">-->
<!--                  <h4><a href="preview.html">Add to Cart</a></h4>-->
<!--                </div>-->
<!--                <div class="clear"></div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="content_bottom">-->
<!--            <div class="heading">-->
<!--              <h3>Feature Products</h3>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="section group">-->
<!--            <div class="grid_1_of_5 images_1_of_5" v-for="(item, index) in hotList" :key="index">-->
<!--              <router-link :to=item.path><img :src=item.img alt="" /></router-link>-->
<!--              <h2><router-link :to=item.path>{{ item.title }}</router-link></h2>-->
<!--              <div class="price-details">-->
<!--                <div class="price-number">-->
<!--                  <p><span class="rupees">${{ item.price }}</span></p>-->
<!--                </div>-->
<!--                <div class="add-cart">-->
<!--                  <h4><a href="preview.html">Add to Cart</a></h4>-->
<!--                </div>-->
<!--                <div class="clear"></div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';
import ContentTop from '@/components/content-list.vue';

export default {
  name: 'home',
  components: {
    // HelloWorld,
    Header,
    Footer,
    ContentTop,
  },
  mounted() {
    $('#slider').nivoSlider();
  },
  data() {
    return {
      newTitle: '最新',
      newList: [
        {
          img: './static/images/black-swan.jpg',
          title: 'black swan',
          price: '1234',
          path: '/preview',
        },
        {
          img: './static/images/black-swan.jpg',
          title: 'black swan',
          price: '12345',
          path: '/preview',
        },
        {
          img: './static/images/black-swan.jpg',
          title: 'black swan',
          price: '12345',
          path: '/preview',
        },
        {
          img: './static/images/black-swan.jpg',
          title: 'black swan',
          price: '12345',
          path: '/preview',
        },
        {
          img: './static/images/black-swan.jpg',
          title: 'black swan',
          price: '12345',
          path: '/preview',
        },
        {
          img: './static/images/black-swan.jpg',
          title: 'black swan',
          price: '12345',
          path: '/preview',
        },
        {
          img: './static/images/black-swan.jpg',
          title: 'black swan',
          price: '12345',
          path: '/preview',
        },
        {
          img: './static/images/black-swan.jpg',
          title: 'black swan',
          price: '12345',
          path: '/preview',
        },
      ],
      hotTitle: '最热',
      hotList: [
        {
          img: './static/images/bg1_02.jpg',
          title: 'black swan',
          price: '1234',
          path: '/preview',
        },
        {
          img: './static/images/Eclipse.jpg',
          title: 'black swan',
          price: '1234',
          path: '/preview',
        },
        {
          img: './static/images/Eclipse.jpg',
          title: 'black swan',
          price: '1234',
          path: '/preview',
        },
        {
          img: './static/images/Eclipse.jpg',
          title: 'black swan',
          price: '1234',
          path: '/preview',
        },
        {
          img: './static/images/Eclipse.jpg',
          title: 'black swan',
          price: '1234',
          path: '/preview',
        },
        {
          img: './static/images/Eclipse.jpg',
          title: 'black swan',
          price: '1234',
          path: '/preview',
        },
        {
          img: './static/images/Eclipse.jpg',
          title: 'black swan',
          price: '1234',
          path: '/preview',
        },
      ],
    };
  },
};

</script>

<style lang="stylus" scoped>
  h3
    text-align left
</style>
