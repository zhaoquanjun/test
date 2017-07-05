<template>
  <ul class="songSheetContainer">
    <router-link to="/Item">
      <li class="songSheetItem" v-for="category in categories">
        <div class="imgContainer">
          <img src="src" alt="" :src="category.img">
        </div>
        <ul class="infoList">
          <h3>{{ category.item }}</h3>
          <li  v-for="songIn in songInfos">{{ songIn.name }}&nbsp&nbsp<p>{{ songIn.singer }}</p></li>
        </ul>
      </li>
    </router-link>
  </ul>
</template>

<script>
  import Item from '../components/songSheetItem.vue'
  export default{
    data(){
      return {
        categories: [
          {item: '巅峰榜·福特新蒙迪欧·流行指数', img: '/static/images/groom_01.jpg'},
          {item: '巅峰榜·热歌', img: '/static/images/groom_02.jpg'},
          {item: '巅峰榜·新歌', img: '/static/images/groom_03.jpg'},
          {item: '巅峰榜·网络歌曲', img: '/static/images/groom_04.jpg'},
          {item: '巅峰榜·内地', img: '/static/images/groom_05.jpg'},
          {item: '巅峰榜·港台', img: '/static/images/groom_06.jpg'},
          {item: '巅峰榜·欧美', img: '/static/images/groom_07.jpg'},
          {item: '巅峰榜·韩国', img: '/static/images/groom_08.jpg'},
          {item: '巅峰榜·日本', img: '/static/images/groom_09.jpg'},
          {item: '巅峰榜·MV', img: '/static/images/groom_10.jpg'},
          {item: '巅峰榜·音乐人', img: '/static/images/groom_11.jpg'},
          {item: '巅峰榜·K歌金曲', img: '/static/images/groom_12.jpg'},
        ],
        songInfos: [
              {name: '1 追光者', singer: '-岑宁儿'},
              {name: '2 那个男孩', singer: '--汪苏泷'},
              {name: '3 拜托 (Live)', singer: '--孙晨'},
        ]

      }
    },
    components: {
        Item
    }

  }


</script>
