<template>
    <ul class="tab-navList">
      <p class="song-sheet">热门歌单</p>
      <a href="">
        <li v-for="song in songSheets">
          <router-link to="/Item">
            <img src=src   alt="" v-bind:src="song.img ">
            <p class="title">{{ song.title }}</p>
            <p class="author">{{ song.author }}</p>
          </router-link>
        </li>
      </a>
    </ul>
</template>

<script>

  export default{
    data(){
      return {
        songSheets: [
          {img: '/static/images/songsheets_01.jpg', title: '直戳泪点｜哭腔与感情的融合竟如此虐心', author: 'Tyrone'},
          {img: '/static/images/songsheets_02.jpg', title: '超燃神曲：这些小提琴挑动你每一条神经', author: 'Fatalism'},
          {img: '/static/images/songsheets_03.jpg', title: '人生所有的酒，都不如听民谣一首', author: '念安娜'},
          {img: '/static/images/songsheets_04.jpg', title: '因为这些偶像剧，所以我们青春过', author: '开心地笑'},
          {img: '/static/images/songsheets_05.jpg', title: '韩式R&B，魅惑男声挑逗你的听觉', author: '繁华的夏'},
          {img: '/static/images/songsheets_06.jpg', title: '后摇人声采样，通往心灵的独白', author: '清凉暖夏'},
          {img: '/static/images/songsheets_07.jpg', title: '暑假必备：和闺蜜一起在夏日里闹腾', author: '念葳蕊'},
          {img: '/static/images/songsheets_08.jpg', title: '这才是游戏：芯片电子掀起的复古情怀', author: 'Fatalism'},
          {img: '/static/images/songsheets_09.jpg', title: '伴你到最后的不是旧人的手，而是伤喉的酒', author: '岸浪情拍'},
          {img: '/static/images/songsheets_10.jpg', title: '东方同人曲｜东方梦，沁人心', author: '鹿泺'},
          {img: '/static/images/songsheets_11.jpg', title: '一曲揾酒年少狂，一人独看风霜雪', author: '鹿尔'},
          {img: '/static/images/songsheets_12.jpg', title: '百首ACG｜久听不腻的清新小调', author: 'L岺'},
        ],

      }
    },
  }


</script>
