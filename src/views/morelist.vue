<template>
 <div class="mod-albums">
    <div class="hd log url">
        <h2>{{this.$route.params.title}}</h2>
    </div>
    <div class="container">
        <div class="gallery">
            <div class="scroller">
                <router-link :to="{name: 'MusicPlay',params: {id: item.song_id}}" tag="div" class="card url" v-for="(item,i) in todayRecommend" :key="i">
                    <div class="album">
                        <img :src="item.pic_big" :alt="item.title">
                        <div class="name">{{item.title}}</div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'morelist',
  data() {
    return{
      todayRecommend: []
    }
  },
  created() {
    var url = `/v1/restserver/ting?method=baidu.ting.billboard.billList&type=${this.$route.params.type}&size=20&offset=0`
    this.axios.get(url)
    .then(res => {
      this.todayRecommend = res.data.song_list
    })
    .catch(err => {
    })
  }
}

</script>

<style lang="scss" scoped>
  .mod-albums {
    background-color: #fff;
    padding: 10px 17px;
    .hd {
      display: flex;
      margin: 14px 0 18px 0;
      h2{
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        margin: 0;
        padding: 0;
        font-size: 20px;
      }
      div{
        width: 64px;
        font-size: 12px;
        text-align: right;
      }
    }
    .gallery{
      overflow: hidden;
      margin: 0 -5px;
      .card{
        width: 33.3%;
        float: left;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        padding: 0 5px 10px;
        .album{
          position: relative;
        }
        img{
          width: 100%;
          height: auto;
          border: 1px solid #eee;
        }
        .name{
          font-size: 12px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin-top: 4px;
          line-height: 14px;
          max-height: 28px;
          margin-bottom: 2px;
        }
      }
    }
  }
</style>

