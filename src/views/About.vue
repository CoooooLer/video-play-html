<template>
  <div class="about">
    <Header/>
    <h1>This is an about page</h1>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';

export default {
  name: 'home',
  components: {
    // HelloWorld,
    Header,
    Footer,
  },
}
</script>
