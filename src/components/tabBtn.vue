<template>
  <div class="tab-nav">
    <div class="tab-title">
      <div class="groom">
        <router-link to="/GroomNav">推荐</router-link>
      </div>
      <div class="topList">
        <router-link to="/SongSheet">排行榜</router-link>
      </div>
    </div>
    <banner></banner>
    <div class="tabs">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Swiper from 'vue-swiper'
  import Banner from './banner.vue'
  import {GroomNav, SongSheet} from '../components'
  import bus from '../bus'
  export default{
    data(){
      return {
          flag:Boolean
      }
    },
    components: {
      GroomNav,
      SongSheet,
      Banner,
      Swiper
    },
    methods: {},
    mounted(){
        bus.$on('change',function (msg) {
          this.flag = msg;
        })
    }
  }
</script>
