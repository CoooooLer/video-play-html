<template>
    <div class="preview">
      <Header/>
      <div class="main">
        <div class="wrap">
          <div class="content">
<!--            <div class="content_top" style="display: flex">-->
<!--              <div class="back-links" style="display: flex;flex-wrap: wrap">-->
<!--                <span class="item"><router-link to="32132">动作</router-link></span>-->
<!--                <span class="item"><router-link to="32132">动作</router-link></span>-->
<!--                <span class="item"><router-link to="32132">动作001</router-link></span>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="section group">-->
<!--              <div class="grid_1_of_5 images_1_of_5" v-for="(item, index) in newList" :key="index">-->
<!--                <router-link :to=item.path><img :src=item.img alt="" /></router-link>-->
<!--                <h2><router-link :to=item.path>{{ item.title }}</router-link></h2>-->
<!--                <div class="price-details">-->
<!--                  <div class="price-number">-->
<!--                    <p><span class="rupees">${{ item.price }}</span></p>-->
<!--                  </div>-->
<!--                  <div class="add-cart">-->
<!--                    <h4><a href="preview.html">Add to Cart</a></h4>-->
<!--                  </div>-->
<!--                  <div class="clear"></div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
            <order-list :list="newList" />
            <page  :page-config="pageConfigTotal" @changeCurrentPage="changePage"/>
            <page :page-config="pageConfigPageTotal"/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
</template>

<script>
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';
import OrderList from '@/components/order-list.vue';
import Page from '@/components/page.vue';

export default {
  name: 'preview',
  components: {
    // HelloWorld,
    Header,
    Footer,
    OrderList,
    Page,
  },
  data() {
    return {
      pageConfigTotal: { total: 21, pageSize: 10, pageNo: 1 },
      pageConfigPageTotal: { total: 21, pageSize: 10, pageNo: 1, pageTotal: 50 },
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
  methods: {
    changePage(page) {
      this.pageConfigTotal.pageNo = page;
    },
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
