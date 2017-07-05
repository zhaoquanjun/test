<template>
  <div class="view">
    <div class="search">
      <input type="search" :class="{ focus: isTrue }" placeholder="搜索歌曲/专辑/歌手" @click="cLength()" onfocus="this.setAttribute('placeholder','');" onblur="this.setAttribute('placeholder','搜索歌曲/专辑/歌手')">
      <div :class="{ cancelBtn: true , visible: isTrue}" @click="disAppear()">取消</div>
    </div>
    <ul class="searchList" v-if="isTrue">
      <li v-for="favourite in favourites"><a :href=favourite.href><p>{{ favourite.name }}</p><p>{{ favourite.num }}</p></a></li>
    </ul>
    <shadowFloor v-if="isTrue"></shadowFloor>
  </div>

</template>

<script>

  import ShadowFloor from './shadow.vue'


  export default {
    data () {
      return {
        msg: '搜索歌曲/专辑/歌手',
        isTrue:false,
        favourites:[
          {name:'齐天大圣',num:36.6+'万',href:'http://music.163.com/m/song/442869498?autoplay=true'},
          {name:'少年西游行',num:25.6+'万',href:'http://music.163.com/m/song?id=487190457'},
          {name:'微光',num:12.4+'万',href:'http://music.163.com/m/song?id=482386220'},
          {name:'离人殇',num:10.6+'万',href:'http://music.163.com/m/song?id=485960291'}
        ]
      }
    },
    methods: {
      cLength(){
        this.isTrue = true;
      },
      disAppear(){
         this.isTrue = false;
      }
    },
    components:{
        ShadowFloor
    }
  }

</script>

