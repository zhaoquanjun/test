<template>
  <div class="view" id="view" onscroll="bgChange()">
    <div class="header" onclick="window.history.back()"> < 歌单 </div>
    <div class="singerPhoto">
      <img :src=img1 alt="">
    </div>
    <div class="sheetTitle">
      <div class="sheetTitle_left">
        <h1>2017走心歌曲 | 敲击人类心灵深处的音符</h1>
        <p>44.6万播放 来自：Carlton</p>
      </div>
      <div class="sheetTitle_right">
        <div class="sheetTitle_inner">
          <img :src=img2 alt="">
        </div>
      </div>
    </div>
    <div class="sheetContent">
      <ul>
        <li class="contentItem" v-for="info in infos">
          <div class="content_left" @click="audioPlay($event)">
            <audio src=src :src="info.url" :name=info.name preload="metadata"></audio>
            <h2>{{ info.name }}</h2>
            <p>{{ info.singer }}</p>
          </div>
          <div class="content_right">
            <span></span><span></span><span></span>
          </div>
        </li>
      </ul>
    </div>
    <div class="space"></div>
    <controller></controller>
  </div>


</template>

<script>

  import Controller from '../components/startControl.vue'
  import bus from '../bus.js'
  import jquery from 'jquery'
  var $ = jquery;
  document.onscroll = function () {
    var scrollT = document.body.scrollTop,
      a = Number(scrollT / 37.5 * 0.1);
    a = a.toFixed(2);
    if (a < 1) {
      $('.header').css('background', 'rgba(178, 83, 122,' + a + ')');
    } else {
      $('.header').css('background', 'rgba(178, 83, 122,1)');
    }
  };

  export default{
    data(){
      return {
        img1: require('../../static/images/songsheets_01.jpg'),
        img2: require('../../static/images/start_btn_01.png'),
        infos: [
          {name: 'Fantastic Baby', singer: 'BingBang', url: require('../../static/music/fantastic_baby.m4a')},
          {name: 'The Dawn', singer: 'Dreamtale', url: require('../../static/music/Dreamtale - Intro：The Dawn.mp3')},
          {name: '一剪梅·舟过吴江', singer: '毛泽少', url: require('../../static/music/一剪梅·舟过吴江.mp3')},
          {name: '雪(独唱版)', singer: '韩雪', url: require('../../static/music/雪(独唱版).mp3')},
          {name: '我很快乐', singer: '刘惜君', url: require('../../static/music/我很快乐.mp3')},
          {name: '雪（独唱版）', singer: '杜雯媞', url: require('../../static/music/雪(独唱版).mp3')},
          {name: '让我留在你身边 (原唱作版)', singer: '唐汉霄', url: require('../../static/music/让我留在你身边 (原唱作版).mp3')},
          {name: 'Jar Of Love', singer: '曲婉婷', url: require('../../static/music/Jar Of Love.mp3')},
          {name: '寻水的鱼', singer: '许飞', url: require('../../static/music/寻水的鱼.mp3')},
          {name: 'Victory', singer: 'Two Steps From Hell', url: require('../../static/music/Victory.mp3')},
          {name: '说散就散', singer: 'JC', url: require('../../static/music/说散就散.mp3')},
          {name: '离人殇', singer: '赵方婧,音阙诗听 ', url: require('../../static/music/离人殇.mp3')},
          {name: '微光', singer: '蔚雨芯', url: require('../../static/music/微光.mp3')},
          {name: '下一站茶山刘', singer: '房东的猫', url: require('../../static/music/下一站茶山刘.mp3')},
        ],
        player: false
      }
    },
    components: {
      Controller
    },
    methods: {
      audioPlay(event){
        this.player = !this.player;
        bus.$emit('toControl', this.player);
        var el = event.currentTarget,
          $audio = $(el).children('audio'),
          audio = $audio[0],
          $audioSibis = $('audio').not($audio),
          n = [];
        $audioSibis.each(function (index, element) {
          n.push(element);
        });
        if (audio.paused) {
          if (this.player) {
            audio.play();
            for (var i = 0; i < n.length; i++) {
              n[i].pause();
            }
          } else {
            audio.pause();
          }
        } else {
          audio.pause();
        }
      }

    }


  }

</script>
