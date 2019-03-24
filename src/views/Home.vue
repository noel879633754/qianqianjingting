<template>
<div >
  <header class="hd">
    <span class="left-music">Music</span>
    <i class="fa fa-search right-fa" aria-hidden="true"></i>
  </header>
  <div class="banner">
    <img src="../assets/img/banner.jpg" alt="">
  </div>
  <TodayRecommend title="今日推荐" type="1"></TodayRecommend>
  <NewsMusic></NewsMusic>
  <SwiperBanner></SwiperBanner>
  <MusicListNav></MusicListNav>
  <TodayRecommend title="热门歌单" type="24"/>
</div>
</template>

<script>
import TodayRecommend from '../components/Today_Recommend'
import NewsMusic from '../components/News_Music'
import SwiperBanner from '../components/Swiper_Banner'
import MusicListNav from './musiclist/music_listnav.vue'


export default {
  components: {
    TodayRecommend,
    NewsMusic,
    SwiperBanner,
    MusicListNav
  }
}
</script>

<style lang="scss" scoped>
div{
  margin-bottom: 50px;
  .hd{
    padding: 18px 17px ;
    background: #fff;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .right-fa{
      font-size: 30px;
      flex: 1;
      text-align: right;
    } 
    .left-music{
      flex: 1;
      font-size: 30px;
    }
    img{
      width: 100%;
      // height: auto;
      display: block;
      flex-basis: 100%;
    }
  }
  .banner{
    margin-bottom: 0;
    img{
      width: 100%;
      height: auto;
      display: block;
    }
  }
}
</style>
