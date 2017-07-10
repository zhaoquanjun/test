<template>
  <div class="view">
    <search></search>
    <tabBtn></tabBtn>
    <controller :flag="flag"></controller>
  </div>

</template>

<script>

  import {Search, GroomNav, SongSheet,TabBtn,Controller} from '../components'
  import bus from '../bus.js'

  export default{
    data(){
      return {
          flag:false
      }
    },
    mounted(){
        bus.$on('change',(msg)=>{
            console.log(msg)
        })
    },
    methods: {
    },
    components: {
      Search,
      GroomNav,
      SongSheet,
      TabBtn,
      Controller
    }
  }
</script>

