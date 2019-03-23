<template>
  <div class="play">
    <div class="header">
     <div class="title">
       <router-link to="/">
         <i class="iconfont icon-shouye left"></i>
       </router-link>
       <div class="music-info">
         <p>{{ currentUrl.songinfo.title }}</p>
         <p class="author">{{ currentUrl.songinfo.author }}</p>
       </div>
       <router-link to="/search"><i class="iconfont icon-sousuo right"></i></router-link>
     </div>
   </div>

   <div class="song-info">
			<div class="song-info-img">
        <img :src="currentUrl.songinfo.pic_big" alt="">
			</div>
			<div class="iconbox">
				<i class="iconfont icon-shoucang2 left"></i>
				<i class="box"></i>
				<i class="iconfont icon-xiazai right"></i>
			</div>
		</div>
    <Lrc :currentTime="abc" :durationTime="durationTime"></Lrc>

    <div class="song">
      <audio ref="player" :src="currentUrl.bitrate.show_link" controls autoplay></audio>
		</div>
  </div>
</template>

<script>
import Lrc from '../components/Lrc.vue'

export default {
  data() {
    return {
      id: this.$route.params.id,
      currentUrl: {
        songinfo: {
          author: '',
          title: ''
        },
        bitrate: {
          show_link: ''
        }
      },
      durationTime:0,
      currentTime: 0,
      abc: 0
    }
  },
  mounted(){
    this.axios.get('/v1/restserver/ting?method=baidu.ting.song.play&songid=' + this.id)
    .then(res => {
      this.currentUrl = res.data
      console.log(res)
      console.log(this.currentUrl)
      console.log(this.id)
    })
    .catch(err => {
      console.log(err)
    })
    this.addEventListeners()
  },
  beforeDestroyed(){
    this.removeEventListeners()
  },
  methods: {
    addEventListeners(){
      this.$refs.player.addEventListener('timeupdate', this._currentTime),
      this.$refs.player.addEventListener('canplay', this._durationTime)
     },
     removeEventListeners: function () {
       this.$refs.player.removeEventListener('timeupdate', this._currentTime)
       this.$refs.player.removeEventListener('canplay', this._durationTime)
     },
    _currentTime(){
      this.abc = this.$refs.player.currentTime 
    },
    _durationTime(){
      this.durationTime = this.$refs.player.duration
    }
  },
  components: {
    Lrc
  }
}
</script>

<style lang="scss" scoped>
.header{
	padding:15px;
}

.music-info{
	flex: 1;
	font-size: 20px;
}

.title{
	display: flex;
	text-align: center;
}

.left{
	font-size: 30px;
}

.ca{
  color: red;
}

.right{
	font-size: 30px;
}

.song-info{
	padding: 15px;
}

.song-info-img{
	text-align: center;
}

.song-info-img img{
	width: 50%;
	border-radius: 5px;
	box-shadow: 0 0 10px 0 rgba(50,50,50,.31);
}

.song-lrc{
	margin-top: 10px;
  min-height: 50px;
}

.iconbox{
	display: flex;
	margin-top: 30px;
}

.iconbox .box{
	flex: 1;
}

.song{
	width: 100%;
	text-align: center;
}

.song audio{
	width: 80%;
}

.active{
  color: #222;
}

.author{
  font-size: 12px;
  color: #999;
}
</style>
