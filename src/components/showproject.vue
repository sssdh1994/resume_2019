<template>
  <div>
    <div  style="height: 800px">
      <!-- swiper1 -->
      <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
        <swiper-slide class="slide-1"></swiper-slide>
        <swiper-slide class="slide-2"></swiper-slide>
        <swiper-slide class="slide-3"></swiper-slide>
        <swiper-slide class="slide-4"></swiper-slide>
        <swiper-slide class="slide-5"></swiper-slide>
        <swiper-slide class="slide-6"></swiper-slide>
        <swiper-slide class="slide-7"></swiper-slide>
        <swiper-slide class="slide-8"></swiper-slide>
        <swiper-slide class="slide-9"></swiper-slide>
        <swiper-slide class="slide-10"></swiper-slide>
        <swiper-slide class="slide-11"></swiper-slide>
        <swiper-slide class="slide-12"></swiper-slide>
        <swiper-slide class="slide-13"></swiper-slide>
        <swiper-slide class="slide-14"></swiper-slide>
        <swiper-slide class="slide-15"></swiper-slide>

        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      </swiper>
      <!-- swiper2 Thumbs -->
      <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
        <swiper-slide class="slide-1"></swiper-slide>
        <swiper-slide class="slide-2"></swiper-slide>
        <swiper-slide class="slide-3"></swiper-slide>
        <swiper-slide class="slide-4"></swiper-slide>
        <swiper-slide class="slide-5"></swiper-slide>
        <swiper-slide class="slide-6"></swiper-slide>
        <swiper-slide class="slide-7"></swiper-slide>
        <swiper-slide class="slide-8"></swiper-slide>
        <swiper-slide class="slide-9"></swiper-slide>
        <swiper-slide class="slide-10"></swiper-slide>
        <swiper-slide class="slide-11"></swiper-slide>
        <swiper-slide class="slide-12"></swiper-slide>
        <swiper-slide class="slide-13"></swiper-slide>
        <swiper-slide class="slide-14"></swiper-slide>
        <swiper-slide class="slide-15"></swiper-slide>

      </swiper>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data () {
    return {
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
  .slide-60 {
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
