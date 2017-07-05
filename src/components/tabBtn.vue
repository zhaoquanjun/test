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
  export default{
    data(){
      return {}
    },
    components: {
      GroomNav,
      SongSheet,
      Banner,
      Swiper
    },
    methods: {}
  }
</script>
