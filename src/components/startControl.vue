<template>
  <div class="controler-bar">
    <div class="controler-barImg">
      <img src="/static/images/controller.png" alt="">
    </div>
    <p class="songName">Fantastic Baby</p>
    <div class="controler-barBtn" @click="startOrEnd()" :flag = flag >
      <img v-if="flag" src="/static/images/stop_btn_01.png" alt="">
      <img v-else="flag" src= '/static/images/start_btn_01.png' alt="" >
    </div>
  </div>
</template>

<script>
  export default{
      data(){
          return {
              flag:false,
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
