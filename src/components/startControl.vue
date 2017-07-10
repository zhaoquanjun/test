<template>
  <div class="controler-bar">
    <div class="controler-barImg">
      <img :src=img1 alt="">
    </div>
    <p class="songName">Fantastic Baby</p>
    <div class="controler-barBtn" @click="startOrEnd()" :flag=flag>
      <img v-if="this.flag" :src=img2 alt="">
      <img v-else="this.flag" :src=img3 alt="">
    </div>
  </div>
</template>

<script>
  import bus from '../bus'
  export default{
    data(){
      return {
        img1: require('../../static/images/controller.png'),
        img2: require('../../static/images/stop_btn_01.png'),
        img3: require('../../static/images/start_btn_01.png'),
        flag: false

      }
    },
    created(){
      bus.$on('toControl', (msg) => {
        this.flag = msg;
      });
    },
    methods: {
      startOrEnd(){
        this.flag = !this.flag;
      }
    }
  }
</script>
