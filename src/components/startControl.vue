<template>
  <div class="controler-bar">
    <div class="controler-barImg">
      <img :src= img1 alt="">
    </div>
    <p class="songName">Fantastic Baby</p>
    <div class="controler-barBtn" @click="startOrEnd()" :flag = flag >
      <img v-if="flag" :src= img2 alt="">
      <img v-else="flag" :src= img3 alt="" >
    </div>
  </div>
</template>

<script>
  export default{
      data(){
          return {
              flag:false,
              img1: require('../../static/images/controller.png'),
              img2: require('../../static/images/stop_btn_01.png'),
              img3: require('../../static/images/start_btn_01.png')

          }
      },
    methods:{
          startOrEnd(){
              this.flag= !this.flag;
              if(this.flag){
                this.src= this.endImg;
              }else{
                this.src= this.startImg
              }
          }
    }
  }
</script>
