<template>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" dot>发现</van-tabbar-item>
      <van-tabbar-item icon="records" info="5">直播</van-tabbar-item>
      <van-tabbar-item icon="chat" info="20">消息</van-tabbar-item>
      <van-tabbar-item icon="contact" info="20">我的</van-tabbar-item>
    </van-tabbar>
</template>
<script>
import {Tabbar,TabbarItem} from 'vant';
export default{
  components:{
    [Tabbar.name]:Tabbar,
    [TabbarItem.name]:TabbarItem,
  },
  data(){
    return {
      active:0
    }
  }
}
</script>