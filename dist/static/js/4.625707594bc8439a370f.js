webpackJsonp([4],{"Wh/4":function(s,e){},tCO0:function(s,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});t("bGai"),t("v2ns");var i=t("7QTg"),l={data:function(){return{items:[{class:"slide-1"},{class:"slide-2"},{class:"slide-3"},{class:"slide-4"},{class:"slide-5"},{class:"slide-6"},{class:"slide-7"},{class:"slide-8"},{class:"slide-9"},{class:"slide-10"},{class:"slide-11"},{class:"slide-12"},{class:"slide-13"},{class:"slide-14"},{class:"slide-15"}],swiperOptionTop:{spaceBetween:10,loop:!0,loopedSlides:5,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},swiperOptionThumbs:{spaceBetween:10,slidesPerView:4,touchRatio:.2,loop:!0,loopedSlides:5,slideToClickedSlide:!0}}},components:{swiper:i.swiper,swiperSlide:i.swiperSlide},created:function(){},mounted:function(){var s=this;this.$nextTick(function(){var e=s.$refs.swiperTop.swiper,t=s.$refs.swiperThumbs.swiper;e.controller.control=t,t.controller.control=e})},methods:{goBackPage:function(){this.$router.push({name:"Home"})},goToNextProject:function(){this.$router.push({name:"ShowProjectWechat"})}}},o={render:function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",[t("div",{staticStyle:{height:"800px"}},[t("swiper",{ref:"swiperTop",staticClass:"gallery-top",attrs:{options:s.swiperOptionTop}},[s._l(s.items,function(s){return t("swiper-slide",{key:s.id,class:s.class})}),s._v(" "),t("div",{staticClass:"swiper-button-next swiper-button-blue",attrs:{slot:"button-next"},slot:"button-next"}),s._v(" "),t("div",{staticClass:"swiper-button-prev swiper-button-blue",attrs:{slot:"button-prev"},slot:"button-prev"})],2),s._v(" "),t("swiper",{ref:"swiperThumbs",staticClass:"gallery-thumbs",attrs:{options:s.swiperOptionThumbs}},s._l(s.items,function(s){return t("swiper-slide",{key:s.id,class:s.class})}),1),s._v(" "),t("div",{staticClass:"button",on:{click:s.goBackPage}},[s._v("返回首页")]),s._v(" "),t("div",{staticClass:"button-right",on:{click:s.goToNextProject}},[s._v("下个项目")])],1)])},staticRenderFns:[]};var r=t("VU/8")(l,o,!1,function(s){t("Wh/4")},"data-v-6f28d20a",null);e.default=r.exports}});
//# sourceMappingURL=4.625707594bc8439a370f.js.map