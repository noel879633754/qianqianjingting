<template>
<div>
  <Title :avatar="avatar_s500" :name="name"></Title>
  <List :id="ting_uid"></List>
</div>
</template>
<script>
import Title from '../../components/details/title.vue'
import List from '../../components/details/list.vue'

export default {
  data(){
    return {
      avatar_s500: this.$route.params.avatar_s500,
      name: this.$route.params.name,
      ting_uid: this.$route.params.ting_uid
    }
  },
  components: {
    Title,
    List
  }
}
</script>

<style>

</style>
