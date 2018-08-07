<template>
<div class="swipe">
  <van-swipe :autoplay="3000">
    <van-swipe-item v-for="(item,index) in swipeImage" :key="item.index"><img :src="item.src" alt=""></van-swipe-item>
  </van-swipe>
</div>
 
</template>
<script>
import {Swipe,SwipeItem } from 'vant';
import {swipeImage} from '../data-type'
export default{
  components:{
    [Swipe.name]:Swipe,
    [SwipeItem.name]:SwipeItem,
  },
  data(){
    return {
      swipeImage,
    }
  }
}
</script>
<style lang="scss" scoped>
@import "~@/style/base.scss";
.swipe {
  padding:0.15rem 0;
  background:$white;
    img{
    width:100%;
  }
}

</style>

