<template>
    <div class="preview">
      <Header/>
      <div class="main">
        <div class="wrap">
<!--          <div class="content_top">-->
<!--            <div class="back-links">-->
<!--              <router-link :to=fromPath>首页</router-link>&gt;&gt;&gt;&gt;<router-link :to=toPath>{{ toName }}</router-link>-->
<!--            </div>-->
<!--            <div class="clear"></div>-->
<!--          </div>-->
          <div class="content_top">
            <div class="back-links" style="display: flex;flex-wrap: wrap">
              <span class="item"><router-link :to=fromPath>动作001</router-link></span>
              <span class="item"><router-link :to=fromPath>动作1313</router-link></span>
              <span class="item"><router-link :to=fromPath>动作</router-link></span>
              <span class="item"><router-link :to=fromPath>动作</router-link></span>
              <span class="item"><router-link :to=fromPath>动作</router-link></span>
              <span class="item"><router-link :to=fromPath>动作15641651</router-link></span>
              <span class="item"><router-link :to=fromPath>动作</router-link></span>
              <span class="item"><router-link :to=fromPath>动作sdfsd</router-link></span>
              <span class="item"><router-link :to=fromPath>动作</router-link></span>
            </div>
            <div class="clear"></div>
          </div>
          <div class="section group">
            <div class="cont-desc span_1_of_2">
              <div class="product-details">
                <div class="grid images_3_of_2">
<!--                  <img src="images/preview.jpg" alt="">-->
                  <video style="width: 100%;height: 100%;outline: none" controls>
                    <source :src=urlMp4 type="video/mp4">
                    <source src="movie.ogg" type="video/ogg">
                    您的浏览器不支持 HTML5 video 标签。
                  </video>
                </div>
                <div class="desc span_3_of_2">
                  <h2>Wrath of the Titans </h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                  <div class="price">
                    <p>Price: <span>$500</span></p>
                  </div>
                  <div class="available">
                    <ul>
                      <li><span>Model:</span> &nbsp; Model 1</li>
                      <li><span>Shipping Weight:</span>&nbsp; 5lbs</li>
                      <li><span>Units in Stock:</span>&nbsp; 566</li>
                    </ul>
                  </div>
                  <div class="share-desc">
                    <div class="share">
                      <p>Number of units :</p><input class="text_box" type="text">
                    </div>
                    <div class="button"><span><a href="#">Add to Cart</a></span></div>
                    <div class="clear"></div>
                  </div>
                  <div class="wish-list">
                    <ul>
                      <li class="wish"><a href="#">Add to Wishlist</a></li>
                      <li class="compare"><a href="#">Add to Compare</a></li>
                    </ul>
                  </div>
                </div>
                <div class="clear"></div>
              </div>
              <div class="product_desc">
                <h2>Details :</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              </div>
            </div>
            <div class="rightsidebar span_3_of_1 sidebar">
              <h2>Specials</h2>
              <div class="special_movies" style="display: flex" v-for="(item, index) in specialList" :key="index">
                <div class="movie_poster">
                  <a href="preview.html"><img :src=item.img alt="" style="height: 100%;width: 100%"></a>
                </div>
                <div class="movie_desc">
                  <h3><a href="preview.html">{{ item.title }}</a></h3>
                  <p><span>$620.87</span> &nbsp; ${{ item.price }}</p>
                  <span><a href="#">Add to Cart</a></span>
                </div>
                <div class="clear"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
</template>

<script>
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';

export default {
  name: 'preview',
  components: {
    // HelloWorld,
    Header,
    Footer,
  },
  mounted: function() {
    this.toName = this.$route.params.order;
    // console.log(this.$route.params);
  },
  data() {
    return {
      urlMp4: './static/video/test02.mp4',
      toPath: '',
      toName: '',
      fromPath: '',
      fromName: '',
      specialList: [
        { img: './static/images/Eclipse.jpg', title: 'Coraline', price: '123456' },
        { img: './static/images/Eclipse.jpg', title: 'Coraline', price: '123456' },
        { img: './static/images/Eclipse.jpg', title: 'Coraline', price: '123456' },
        { img: './static/images/Eclipse.jpg', title: 'Coraline', price: '123456' },
        { img: './static/images/Eclipse.jpg', title: 'Coraline', price: '123456' },
      ],
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.toPath = to.path;
      vm.fromPath = from.path;
      vm.fromName = from.name;
    });
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
</style>
