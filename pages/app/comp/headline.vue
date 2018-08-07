<template>
  <div class="headline">
    <div class="headline-item" v-for="(item,index) in headlineList" :key="item.id" v-if="index < 3">
      <span class="headline-tag">{{item.keywords}}</span>{{item._title}}
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex';
export default{
  data(){
    return {

    }
  },
  computed:{
    ...mapState({
      headlineList: state => state.headlineList
    })
  }
}
</script>
<style lang="scss">
@import '~@/style/base.scss';
.headline{
  margin:0.2rem auto;
}
.headline-item{
  padding:0.2rem 0.5rem;
  background:$white;
  font-size:0.35rem;
  border-top:1px solid $bg;
}
 .headline-tag{
   padding:0.05rem 0.2rem;
   background:-webkit-linear-gradient(right, #ff573d,#f93038);
   color:$white;
   border-radius:2px;
   margin-right:0.25rem;
  font-size:12px;
 }
</style>
