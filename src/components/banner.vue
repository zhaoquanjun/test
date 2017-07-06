<template>
  <swiper  :mySwiper="swiperOption" class="swiper-container">
    <swiper-slide v-for="image in images" :key="image.id" class="swiper-slide">
      <a :href="image.url"><img src=src  :src="image.img"></a>
    </swiper-slide>
    <div class="swiper-pagination swiper-pagination-bullets" slot="pagination" ></div>
  </swiper>
</template>
<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  export default{
    data(){
      return {
        images: [
          {img: require('../../static/images/banner_01.jpg'),url:'http://y.qq.com/msa/luhani/index_new.html?g_f=yqqjiaodian',id:1},
          {img: require('../../static/images/banner_02.jpg'),url:'https://y.qq.com/m/digitalbum/gold/index.html?_video=true&id=2127545#index/fans',id:2},
          {img: require('../../static/images/banner_03.jpg'),url:'https://y.qq.com/w/album.html?albummid=004ZsFlR3XjpE0&ADTAG=myqq&from=myqq&channel=10007100',id:3},
          {img: require('../../static/images/banner_04.jpg'),url:'https://y.qq.com/msa/215/0_3810.html?ADTAG=myqq&from=myqq&channel=10007100',id:4},
          {img: require('../../static/images/banner_05.jpg'),url:'https://y.qq.com/w/album.html?albummid=003gWRvo0Pc8R1&ADTAG=myqq&from=myqq&channel=10007100',id:5},
          {img: require('../../static/images/banner_06.jpg'),url:'https://y.qq.com/w/singer.html?singermid=000aHmbL2aPXWH&ADTAG=myqq&from=myqq&channel=10007100',id:6}
        ],
        swiperOption: {
          autoplay: 3000,
          pagination: '.swiper-pagination',
          slidesPerView: 'auto',
          centeredSlides: true,
          paginationClickable: true,
          onSlideChangeEnd: swiper => {
            //这个位置放swiper的回调方法
            this.page = swiper.realIndex + 1;
            this.index = swiper.realIndex;
          },
        },
        swiperSlides: [1, 2, 3, 4, 5],
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    methods: {
      onSlideChangeStart: function (currentPage) {

      },
      onSlideChangeEnd: function (currentPage) {

      }
    }
  }
</script>
