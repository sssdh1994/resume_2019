<template>
  <div>
    <div  style="height: 800px">
      <!-- swiper1 -->
      <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
        <swiper-slide v-for="item in items" :key="item.id" :class="item.class"></swiper-slide>
   

        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      </swiper>
      <!-- swiper2 Thumbs -->
      <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
        <swiper-slide v-for="item in items" :key="item.id" :class="item.class"></swiper-slide>

      </swiper>

      <mybutton></mybutton>
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
        {class:"slide-15"}
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
    console.log(this.$route.query.index)
    if(this.$route.query.index===0){
      this.items = [
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
        {class:"slide-15"}
      ]
    }else if(this.$route.query.index===1){
      this.items = [
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
        {class:"slide-15"}
      ]
    }else if(this.$route.query.index===2){
      this.items = [
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
        {class:"slide-15"}
      ]
    }else{
      this.items = [
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
        {class:"slide-15"}
      ]
    }
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.swiper
      const swiperThumbs = this.$refs.swiperThumbs.swiper
      swiperTop.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperTop
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .swiper-container {
    background-color: #000;
  }
  swiper-slide {
    background-size: cover;
    background-position: center;
  }
  .slide-1 {
    background-image:url('../common/images/vuecms/1.png');
  }
  .slide-2 {
    background-image:url('../common/images/vuecms/2.png');
  }
  .slide-3 {
    background-image:url('../common/images/vuecms/3.png');
  }
  .slide-4 {
    background-image:url('../common/images/vuecms/4.png');
  }
  .slide-5 {
    background-image:url('../common/images/vuecms/5.png');
  }
  .slide-6 {
    background-image:url('../common/images/vuecms/6.png');
  }
  .slide-7 {
    background-image:url('../common/images/vuecms/7.png');
  }
  .slide-8 {
    background-image:url('../common/images/vuecms/8.png');
  }
  .slide-9 {
    background-image:url('../common/images/vuecms/9.png');
  }
  .slide-10 {
    background-image:url('../common/images/vuecms/10.png');
  }
  .slide-11 {
    background-image:url('../common/images/vuecms/11.png');
  }
  .slide-12 {
    background-image:url('../common/images/vuecms/12.png');
  }
  .slide-13 {
    background-image:url('../common/images/vuecms/13.png');
  }
  .slide-14 {
    background-image:url('../common/images/vuecms/14.png');
  }
  .slide-15 {
    background-image:url('../common/images/vuecms/15.png');
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
</style>
