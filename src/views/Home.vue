<template>
<div >
  <header class="hd">
    <span class="left-music">Music</span>
    <i class="fa fa-search right-fa" aria-hidden="true"></i>
  </header>
  <nav>
    <div class="left-nav">
      <span>随心听</span>
      <p>根据您的喜好定制</p>
    </div>
    <div class="right-nav">
      <div class="info-box"><span>25</span><p>今日推荐</p></div>
      <div class="info-box"><span><i class="fa fa-user-o" aria-hidden="true"></i></span><p>歌手</p></div>
      <div class="info-box"><span><i class="fa fa-rebel" aria-hidden="true"></i></span><p>榜单</p></div>
    </div>
  </nav>
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
    margin-top: -15px;
    margin-bottom: 0;
    img{
      width: 100%;
      height: auto;
      display: block;
    }
  }
  nav{
    width: 100%;
    display: flex;
    background: #fff;
    flex-wrap: wrap;
    padding: 5px 0;
    .left-nav{
      flex: 1;
      font-size: 12px;
        margin-left: 5px;
      margin-bottom: 0;
      span{
        color: #fff;
        display: block;
        width: 100%;
        height: 50px;
        background-color: #FF0000;
        border-radius: 22px;
        font-size: 20px;
        text-align: center;
        line-height: 50px;
      }
      p{
        font-size: 12px;
          text-align: center;
          margin: 7px 0;
          color: rgb(160, 158, 158);
      }
    }
    .right-nav{
      margin-bottom: 0;

        margin-right: 5px;
      display: flex;
      .info-box{
        width: 50px;
        height: 50px;
        padding-left: 5px;
        span{
          display: block;
          width: 100%;
          height: 100%;
          background: #FF0000;
          border-radius: 50%;
          color: #fff;
          text-align: center; 
          line-height: 50px;
          font-size: 25px;
        }
        p{
          font-size: 12px;
          text-align: center;
          margin: 7px 0;
          color: rgb(160, 158, 158);
        }
      }
    }
  }
}
</style>
