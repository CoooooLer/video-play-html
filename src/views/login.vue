<template>
  <div class="preview">
    <Header/>
    <div class="main">
      <div class="wrap">
        <div class="content">
          <div class="content_top">
            <div class="back-links">
              <router-link to="forgetPassword">找回密码</router-link> &gt;&gt;&gt;&gt; <router-link to="register">注册</router-link>
            </div>
            <div class="clear"></div>
          </div>
          <div class="section group">
            <div class="col span_2_of_3">
              <div class="contact-form">
<!--                <h2>Contact Us</h2>-->
                <form method="post" action="contact-post.html">
                  <div>
                    <span class="addFlex"><label>用户名</label><span :class=" isUser ? 'addColorGreen' : 'addColorRed' ">{{ userInfo }}</span></span>
                    <span><input name="userName" @blur="verifyUsername" ref="username" type="text" class="textbox" ></span>
                  </div>
                  <div>
                    <span class="addFlex"><label>密码</label><span :class=" isPass ? 'addColorGreen' : 'addColorRed' ">{{ passInfo }}</span></span>
                    <span><input name="" @blur="verifyPassword" ref="password" type="password" class="textbox" ></span>
                  </div>
                  <div>
                    <span><input type="button" value="登录"  class="mybutton" @click="login"></span>
                  </div>
                </form>
              </div>
            </div>
            <div class="col span_1_of_3">
              <div class="contact_info">
                <h2>Find Us Here</h2>
                <div class="map">
                  <iframe width="100%" height="175" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.co.in/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Lighthouse+Point,+FL,+United+States&amp;aq=4&amp;oq=light&amp;sll=26.275636,-80.087265&amp;sspn=0.04941,0.104628&amp;ie=UTF8&amp;hq=&amp;hnear=Lighthouse+Point,+Broward,+Florida,+United+States&amp;t=m&amp;z=14&amp;ll=26.275636,-80.087265&amp;output=embed"></iframe><br><small><a href="https://maps.google.co.in/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=Lighthouse+Point,+FL,+United+States&amp;aq=4&amp;oq=light&amp;sll=26.275636,-80.087265&amp;sspn=0.04941,0.104628&amp;ie=UTF8&amp;hq=&amp;hnear=Lighthouse+Point,+Broward,+Florida,+United+States&amp;t=m&amp;z=14&amp;ll=26.275636,-80.087265" style="color:#888;text-align:left;font-size:0.85em">View Larger Map</a></small>
                </div>
              </div>
              <div class="company_address">
                <h2>Information :</h2>
                <p>500 Lorem Ipsum Dolor Sit,</p>
                <p>22-56-2-9 Sit Amet, Lorem,</p>
                <p>USA</p>
                <p>Phone:(00) 222 666 444</p>
                <p>Fax: (000) 000 00 00 0</p>
                <p>Email: <span><a href="#">info(at)mycompany.com</a></span></p>
                <p>Follow on: <span><a href="#">Facebook</a></span>, <span><a href="#">Twitter</a></span></p>
              </div>
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
  data() {
    return {
      isUser: false,
      userInfo: '',
      isPass: false,
      passInfo: '',
      isRPass: false,
      rPassInfo: '',
      isPhone: false,
      phoneInfo: '',
    };
  },
  methods: {
    login() {
      this.$axios.post('login', {
        'username': this.$refs.username.value,
        'password': this.$refs.password.value,
      }).then((res) => {
        console.log(res);
        if (res.data.code == '000000') {
          window.localStorage.setItem('login', this.$refs.username.value);
          this.$router.push({ path: '/' });
        } else {
          alert(res.data.errorMessage);
        }
      }).catch((err) => {
        console.log(err);
      });
    },
    verifyUsername() {
      if (!this.$refs.username.value) {
        this.isUser = false;
        this.userInfo = '用户名不能为空！';
      } else {
        this.isUser = true;
        this.userInfo = '用户名可用！';
      }
    },
    verifyPassword() {
      if (!this.$refs.password.value) {
        this.isPass = false;
        this.passInfo = '密码不能为空！';
      } else {
        this.isPass = true;
        this.passInfo = '密码可用！';
      }
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
  span
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
