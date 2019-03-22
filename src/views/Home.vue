<template>
<div>
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

<style>

</style>
