<template>
<div class="search">
    <div class="search-title">
      <input type="text" name="" placeholder="输入搜索内容" v-model="searchContent">
      <button type="button" @click="searchHandler" name="button">搜索</button>
    </div>
    <ul class="list searchlist">
        <div style="text-align: center">
            {{err}}
        </div>
     <router-link  class="song" 
     v-for="(item,i) in searchList" :key="i"
     :to="{name: 'MusicPlay', params: {id: item.songid}}"
     >
       <div class="left">
         <div class="info  single-line ">
             <div>
                 <span>{{item.songname}}</span>
             </div>
             <span class="txt">{{item.artistname}}</span>
         </div>
       </div>
     </router-link>
   </ul>
  </div>
</template>

<script>
export default {
    name: 'search',
    data() {
        return {
            searchContent: '',
            searchList: [],
            err: ''
        }
    },
    methods: {
        searchHandler() {
            const searchURL = "v1/restserver/ting?from=android&version=5.6.5.0&method=baidu.ting.search.merge&format=json&query=%E4%B8%83%E9%87%8C%E9%A6%99&page_no=1&page_size=50&type=-1&data_source=0&use_cluster=1";
            this.axios.get(searchURL)
            .then(res => {
                if(res.data.error_code === 22008){
                    this.err = '接口有误，暂时搜不了歌'
                    return 
                }
                 this.err = ''
                 this.searchList = res.data.song
            })
            .catch(err => {
                console.log(err)
            })
        }
    }
}
</script>

<style scoped>

.search-title{
  padding: 20px;
  overflow: hidden;
  clear: both;
}

input{
width: 80%;
height: 30px;
line-height: 30px;
background: #fff;
border: 1px solid #f1f2f3;
padding-left: 10px;
float: left;
display: inline-block;
}

button{
float: left;
width: 15%;
height: 30px;
}

.list {
  word-wrap: break-word;
  -webkit-hyphens: auto;
  hyphens: auto;
  word-break: break-all;
  border-bottom: 1px solid #e5e5e5;
  border-top: 1px solid #e5e5e5;
}

.list li.song {
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  min-height: 55px;
  text-align: left;
}

li{
display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  justify-content: flex-start;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  min-height: 50px;
  border-bottom: 1px solid #F2F2F2;
  padding-left: 10px;
}

.list .item.song .left, .list li.song .left {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  justify-content: flex-start;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.list .item .info, .list li .info {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.list li .info>span {
  font-weight: 400;
  display: block;
  font-size: 12px;
  color: #999;
}

</style>