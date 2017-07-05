<template>
  <div class="view" id="view" onscroll="bgChange()">
    <div class="header" onclick="window.history.back()" > < 歌单 </div>
    <div class="singerPhoto" >
      <img :src=img alt="">
    </div>
    <div class="sheetTitle">
      <div class="sheetTitle_left">
        <h1>2017走心歌曲 | 敲击人类心灵最深处</h1>
        <p>44.6万播放 来自：Carlton</p>
      </div>
      <div class="sheetTitle_right">
        <div class="sheetTitle_inner">
          <img src="/src/assets/images/start_btn_01.png" alt="">
        </div>
      </div>
    </div>
    <div class="sheetContent">
      <ul>
        <li class="contentItem" v-for="info in infos">
          <div class="content_left" @click="audioPlay($event)">
            <audio src=src :src="info.url" :name = info.name></audio>
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
  import jquery from 'jquery'
  var $ = jquery;
  document.onscroll = function () {
    var scrollT = document.body.scrollTop,
        a = Number(scrollT/37.5*0.1);
    a = a.toFixed(2);
    if(a<1){
      $('.header').css('background','rgba(178, 83, 122,'+a+')');
    }else{
      $('.header').css('background','rgba(178, 83, 122,1)');
    }
  };

  export default{
      data(){
          return{
              img:'/assets/images/songsheets_01.jpg',
            infos:[
              {name:'Fantastic Baby',singer:'BingBang',url:'/static/music/fantastic_baby.m4a'},
              {name:'The Dawn',singer:'Dreamtale',url:'/static/music/Dreamtale - Intro：The Dawn.mp3'},
              {name:'一剪梅·舟过吴江',singer:'毛泽少',url:'/static/music/一剪梅·舟过吴江.mp3'},
              {name:'雪(独唱版)',singer:'韩雪',url:'/static/music/雪(独唱版).mp3'},
              {name:'我很快乐',singer:'刘惜君',url:'/static/music/我很快乐.mp3'},
              {name:'雪（独唱版）',singer:'杜雯媞',url:'/static/music/雪(独唱版).mp3'},
              {name:'让我留在你身边 (原唱作版)',singer:'唐汉霄',url:'/static/music/让我留在你身边 (原唱作版).mp3'},
              {name:'Jar Of Love',singer:'曲婉婷',url:'/static/music/Jar Of Love.mp3'},
              {name:'寻水的鱼',singer:'许飞',url:'/static/music/寻水的鱼.mp3'},
              {name:'Victory',singer:'Two Steps From Hell',url:'/static/music/Victory.mp3'},
              {name:'说散就散',singer:'JC',url:'/static/music/说散就散.mp3'},
              {name:'离人殇',singer:'赵方婧,音阙诗听 ',url:'/static/music/离人殇.mp3'},
              {name:'微光',singer:'蔚雨芯',url:'/static/music/微光.mp3'},
              {name:'下一站茶山刘',singer:'房东的猫',url:'/static/music/下一站茶山刘.mp3'},
            ],
          }
      },
    components:{
      Controller
    },
   watch:{

   },
    methods:{
      bgChange(){
          alert(1);

      },
      audioPlay(event){
        var el = event.currentTarget,
           $audio = $(el).children('audio'),
           audio = $audio[0],
           $audioSibis = $('audio').not($audio),
           n=[];
           $audioSibis.each(function (index,element) {
              n.push(element);
        });
        if(audio.paused){
            audio.play();
            for(var i =0; i<n.length;i++){
                n[i].pause();
            }
        }else{
            audio.pause();
        }
      },



    }



  }

</script>
