<template>
<div class="music-nav">
  <div class="log url hd">
      <h2>音乐榜单</h2>
      <div>更多</div>
  </div>
  <ul>
    <li>
      <router-link to="/home/hot">热歌榜</router-link>
      <span class="gap-line"> </span>
    </li>
    <li>
      <router-link to="/home/news">新歌榜</router-link>
      <span class="gap-line"> </span>
    </li>
    <li>
      <router-link to="/home/king">King榜</router-link>
      <span class="gap-line"> </span>
    </li>
  </ul>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
</div>
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>
.music-nav{
  background: #fff;
  margin-top: 10px;
  padding: 10px 17px;
  .hd{
    margin: 14px 0 18px 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    margin-bottom: 0;
    h2{
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      flex: 1;
      margin: 0;
      padding: 0;
      font-size: 20px;
    }
  }
  ul{
    display: flex;
    li{
      padding: 18px 0 12px 0;
      font-size: 16px;
      flex: 1;
      text-align: center;
      color: #999;
      position: relative;
      z-index: 2;
      a{
        display: block;
        &.active{
          color: #299DE7 !important;
        }
      }
      .gap-line{
        position: absolute;
        right: 0;
        top: 20px;
        height: 18px;
        width: 1px;
        border-left: 1px solid #eee;
      }
    }
  }
}
</style>

