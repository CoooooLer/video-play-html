<template>
  <div class="preview">
    <Header/>
    <div class="main">
      <div class="wrap">
        <div class="content">
<!--          <div class="content_top" style="display: flex">-->
<!--              历史记录-->
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
          <content-list :list="newList" :title="title" />
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';
import ContentList from '@/components/content-list.vue';

export default {
  name: 'preview',
  components: {
    ContentList,
    Header,
    Footer,
  },
  data() {
    return {
      title: '历史记录',
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
      ],
    };
  },
};
</script>

<style scoped lang="stylus">
  h2
    text-align left
  p
    text-align left
  li
    text-align left
  .item
    padding 5px 15px
    margin 5px
    background #eee
    border-radius 15px
    font-size 0.9rem
    a
      color #000

</style>
