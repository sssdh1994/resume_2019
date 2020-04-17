<template>
  <div>
    <div  style="height: 800px">
      <!-- swiper1 -->
      <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
        <swiper-slide v-for="item in items" :key="item.id" :class="item.class"></swiper-slide>
   

        <div class="swiper-button-next swiper-button-blue" slot="button-next"></div>
        <div class="swiper-button-prev swiper-button-blue" slot="button-prev"></div>
      </swiper>
      <!-- swiper2 Thumbs -->
      <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
        <swiper-slide v-for="item in items" :key="item.id" :class="item.class"></swiper-slide>

      </swiper>

      <div class="button"  @click='goBackPage'>返回首页</div>
      <div class="button-right"  @click='goToNextProject'>下个项目</div>
    </div>
  </div>
</template>

<script>
import mybutton from './index.js'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  data () {
    return {
      items:[
        {class:"slide-1"},
        {class:"slide-2"},
        {class:"slide-3"},
        {class:"slide-4"},
        {class:"slide-5"},
        {class:"slide-6"},
        {class:"slide-7"},
        {class:"slide-8"},
        {class:"slide-9"},
        {class:"slide-10"},
        {class:"slide-11"},
        {class:"slide-12"},
        {class:"slide-13"},
        {class:"slide-14"},
        {class:"slide-15"},
        {class:"slide-16"},
        {class:"slide-17"},
        {class:"slide-18"},
      ],
      swiperOptionTop: {
        spaceBetween: 10,
        loop: true,
        loopedSlides: 5, //looped slides should be the same
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperOptionThumbs: {
        spaceBetween: 10,
        slidesPerView: 4,
        touchRatio: 0.2,
        loop: true,
        loopedSlides: 5, //looped slides should be the same
        slideToClickedSlide: true,
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  created(){
    // console.log(this.$route.query.index)
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.swiper
      const swiperThumbs = this.$refs.swiperThumbs.swiper
      swiperTop.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperTop
    })
  },
  methods:{
    goBackPage(){
        this.$router.push({
        name: "Home",
      })
    },
    goToNextProject(){
      this.$router.push({
        name: "ShowProjectYipai",
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .swiper-container {
    background-color: #000;
  }
  
  .slide-1 {
    background-image:url('../common/images/wechat/1.png');
    background-size: contain;
    background-position: repeat;
  }
  .slide-2 {
    background-image:url('../common/images/wechat/2.png');
    background-size: contain;
    background-position: no-repeat;
  }
  .slide-3 {
    background-image:url('../common/images/wechat/3.png');
    background-size: contain;
    background-position: no-repeat;
  }
  .slide-4 {
    background-image:url('../common/images/wechat/4.png');
    background-size: contain;
    background-position: no-repeat;
  }
  .slide-5 {
    background-image:url('../common/images/wechat/5.png');
    background-size: contain;
    background-position: no-repeat;
  }
  .slide-6 {
    background-image:url('../common/images/wechat/6.png');
    background-size: contain;
    background-position: no-repeat;
  }
  .slide-7 {
    background-image:url('../common/images/wechat/7.png');
    background-size: contain;
    background-position: no-repeat;
  }
  .slide-8 {
    background-image:url('../common/images/wechat/8.png');
    background-size: contain;
    background-position: no-repeat;
  }
  .slide-9 {
    background-image:url('../common/images/wechat/9.png');
    background-size: contain;
    background-position: no-repeat;
  }
  .slide-10 {
    background-image:url('../common/images/wechat/10.png');
    background-size: contain;
    background-position: no-repeat;
  }
  .slide-11 {
    background-image:url('../common/images/wechat/11.png');
    background-size: contain;
    background-position: no-repeat;
  }
  .slide-12 {
    background-image:url('../common/images/wechat/12.png');
    background-size: contain;
    background-position: no-repeat;
  }
  .slide-13 {
    background-image:url('../common/images/wechat/13.png');
    background-size: contain;
    background-position: no-repeat;
  }
  .slide-14 {
    background-image:url('../common/images/wechat/14.png');
    background-size: contain;
    background-position: no-repeat;
  }
  .slide-15 {
    background-image:url('../common/images/wechat/15.png');
    background-size: contain;
    background-position: no-repeat;
  }
  .slide-15 {
    background-image:url('../common/images/wechat/16.png');
    background-size: contain;
    background-position: no-repeat;
  }
  .slide-15 {
    background-image:url('../common/images/wechat/17.png');
    background-size: contain;
    background-position: no-repeat;
  }
  .slide-15 {
    background-image:url('../common/images/wechat/18.png');
    background-size: contain;
    background-position: no-repeat;
  }
  .gallery-top {
    height: 80%!important;
    width: 100%;
  }
  .gallery-thumbs {
    height: 20%!important;
    box-sizing: border-box;
    padding: 10px 0;
  }
  .gallery-thumbs .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }
  .gallery-thumbs .swiper-slide-active {
    opacity: 1;
  }
  .button{
    display: inline-block;
     font-size:36px;
     color:white;
     background-color:rgb(62, 158, 255);
     text-align:center;
     width: 15%;
     margin-left:30% ;
     border: black 1px solid;
  }
  .button:hover{
    background-color:rgb(102, 177, 255);
    cursor:pointer;
  }
  .button-right{
    display: inline-block;
     font-size:36px;
     color:white;
     background-color:rgb(62, 158, 255);
     text-align:center;
     width: 15%;
     margin-left:10% ;
     border: black 1px solid;
  }
  .button-right:hover{
    background-color:rgb(102, 177, 255);
    cursor:pointer;
  }
</style>
