webpackJsonp([3],{"6Avw":function(e,s){},idny:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});t("bGai"),t("v2ns");var i=t("7QTg"),o={data:function(){return{items:[{class:"slide-1"},{class:"slide-2"},{class:"slide-3"},{class:"slide-4"},{class:"slide-5"},{class:"slide-6"},{class:"slide-7"},{class:"slide-8"}],swiperOptionTop:{spaceBetween:10,loop:!0,loopedSlides:5,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},swiperOptionThumbs:{spaceBetween:10,slidesPerView:4,touchRatio:.2,loop:!0,loopedSlides:5,slideToClickedSlide:!0}}},components:{swiper:i.swiper,swiperSlide:i.swiperSlide},created:function(){},mounted:function(){var e=this;this.$nextTick(function(){var s=e.$refs.swiperTop.swiper,t=e.$refs.swiperThumbs.swiper;s.controller.control=t,t.controller.control=s})},methods:{goBackPage:function(){this.$router.push({name:"Home"})},goToNextProject:function(){this.$router.push({name:"ShowProjectCms"})}}},n={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("div",{staticStyle:{height:"800px"}},[t("swiper",{ref:"swiperTop",staticClass:"gallery-top",attrs:{options:e.swiperOptionTop}},[e._l(e.items,function(e){return t("swiper-slide",{key:e.id,class:e.class})}),e._v(" "),t("div",{staticClass:"swiper-button-next swiper-button-blue",attrs:{slot:"button-next"},slot:"button-next"}),e._v(" "),t("div",{staticClass:"swiper-button-prev swiper-button-blue",attrs:{slot:"button-prev"},slot:"button-prev"})],2),e._v(" "),t("swiper",{ref:"swiperThumbs",staticClass:"gallery-thumbs",attrs:{options:e.swiperOptionThumbs}},e._l(e.items,function(e){return t("swiper-slide",{key:e.id,class:e.class})}),1),e._v(" "),t("div",{staticClass:"button",on:{click:e.goBackPage}},[e._v("返回首页")]),e._v(" "),t("div",{staticClass:"button-right",on:{click:e.goToNextProject}},[e._v("下个项目")])],1)])},staticRenderFns:[]};var r=t("VU/8")(o,n,!1,function(e){t("6Avw")},"data-v-83ccf726",null);s.default=r.exports}});
//# sourceMappingURL=3.9a937071fc9a8be65fdc.js.map