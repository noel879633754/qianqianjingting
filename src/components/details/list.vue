<template>
  <div class="art-list">
    <ul class="list">
      <router-link tag="li" class="song" 
      :to="{name: 'MusicPlay', params: {id: item.song_id}}"
      v-for="(item,i) in listArr" :key="i">
        <div class="left">
          {{item.title}}
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listArr: []
    }
  },
  mounted() {
    const ArtList = "/v1/restserver/ting?method=baidu.ting.artist.getSongList&tinguid="+ this.id +"&limits=10&use_cluster=1&order=2"
    this.axios.get(ArtList)
    .then(res => {
      this.listArr = res.data.songlist
    })
    .catch(err => {
      console.log(err)
    })
  },
  props: {
    id: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

.art-list{
  padding: 0 17px;
}

.song{
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #999;
}
.left{
  font-size: 18;
}


</style>
