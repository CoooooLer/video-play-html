<template>
  <div>
    <div class="content_top">
      <div class="heading">
        <h3 style="text-align: left;padding-left: 1rem">{{ title }}</h3>
      </div>
    </div>
    <div class="section group" style="padding-bottom: 2rem;">
      <div class="grid_1_of_5 images_1_of_5" v-for="(item, index) in list" :key="index">
        <router-link :to=item.path><img :src=item.img alt="" /></router-link>
        <h2><router-link :to=item.path>{{ item.title }}</router-link></h2>
        <div class="price-details">
          <div class="price-number">
            <p><span class="rupees">${{ item.price }}</span></p>
          </div>
          <div class="add-cart">
            <h4><a href="preview.html">Add to Cart</a></h4>
          </div>
          <div class="clear"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'content-top',
  props: {
    title: {
      type: String,
    },
    list: {
      type: Array,
    },
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="stylus" scoped>
  h3
    text-align left
</style>
