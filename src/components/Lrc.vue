<template>
  <div class="lrcContainer">
    <div class="lrc" ref="lrc">
      <p
        class="lrc-p"
        v-for="(item,key,i) in lrcData"
        :key="i"
        v-show="f"
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      id: this.$route.params.id,
      lrc: {},
      lrcData: {},
      lrcArr: []
    }
  },
  created(){
    const LRCUrl = "/v1/restserver/ting?method=baidu.ting.song.lry&songid="+this.id;
    this.axios.get(LRCUrl)
     .then(res => {
       this.lrc = res.data
       var lyrics = res.data.lrcContent.split("\n");
        var lrcObj = {};
        for(var i = 0 ;i<lyrics.length;i++){
          var lyric = decodeURIComponent(lyrics[i]);
          var timeReg = /\[\d*:\d*((\.|\:)\d*)*\]/g;
          var timeRegExpArr = lyric.match(timeReg);
          if(!timeRegExpArr)continue;
          var clause = lyric.replace(timeReg,'');
             for(var k = 0,h = timeRegExpArr.length;k < h;k++) {
                 var t = timeRegExpArr[k];
                 var min = Number(String(t.match(/\[\d*/i)).slice(1)),
                     sec = Number(String(t.match(/\:\d*/i)).slice(1));
                 var time = min * 60 + sec;
                 lrcObj[time] = clause;
             }
           }
           this.lrcData = lrcObj;
     })
     .catch(error => {
       console.log(error);
     })
  },
  computed: {
    getAllKey(){
      for(let key in this.lrcData){
        this.lrcArr.push(key)
      }
    }
  },
  props: {
    currentTime:{
      type:[String,Number],
      default:0
    },
    durationTime:{
      type:[String,Number],
      default:0
    }
  }
}
</script>

<style lang="scss" scoped>
// .lrcContainer{
//   width: 100%;
//   height: 150px;
//   overflow: hidden;
//   position: relative;
//   .lrc{
//     width: 100%;
//     position: absolute;
//     top: 0;
//     .active{
//       color: red !important;
//     }
//     .lrc-p{
//       height: 30px;
//       line-height: 30px;
//     }
//   }
// }
// .up30{
// 	margin-top: -30px;
// }
</style>

