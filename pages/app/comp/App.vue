<template>
  <div class="home">
    <div class="nav">
      <div class="logo"><img src="@/images/logo.png" alt=""></div>
      <div class="homeTab">
          <van-tabs v-model="active" swipeable :line-width="50">
          <van-tab v-for="item in homeTab" :key="item.id" :title="item.text"></van-tab> 
        </van-tabs>
      </div>
      <div class="search"><van-icon name="search" slot="right" /></div>
    </div>
      <Swipe></Swipe>
      <opinionTab></opinionTab>
      <div class="topOpinion clear">
        <div class="topName fl">名家解盘</div>
        <div class="topTitle fl">今日投顾早评精选：温和的调整后 市场有望弱反弹</div>
      </div>
      <liveRoomIndex></liveRoomIndex>
      <opinionCategory></opinionCategory>
      <headline></headline>
      <div class="opinionTitle">观点<div class="liveMore fr">查看更多</div></div>
  <tabbar></tabbar>
  </div>
</template>
<script>
import {homeTab,liveTab} from "../data-type"
import {Button,Tab,Tabs,Icon,NavBar} from 'vant';
import tabbar from './Tabbar';
import opinionTab from './opinionTab';
import liveRoomIndex from './liveRoomIndex';
import opinionCategory from './opinionCategory';
import headline from './headline';
import Swipe from './swipe';
export default {
  components:{
    tabbar,Swipe,opinionTab,liveRoomIndex,opinionCategory,headline,
    [Tab.name]:Tab,
    [Tabs.name]:Tabs,
    [Icon.name]:Icon,
    [NavBar.name]:NavBar,
  },
  data(){
    return {
      active:0,
      homeTab,
    }
  }
}
</script>
<style lang="scss">
@import '~@/style/base.scss';
.nav{
  display:flex;
  justify-content:space-between;
  background:$white;
  border-bottom:1px solid $bg;
  padding: 0 0.3rem;
}
.logo{
  width:0.8rem;;
  img{
    width:100%;
    position:relative;
    top:0.25rem;
  }
}
.search{
  .van-icon{
    font-size:0.4rem; 
    position:relative;
    top:0.38rem;
  }
}
.homeTab{
  width:3rem;;
}
.topOpinion{
  padding:0.2rem;
  background:$white;
  margin:0.2rem 0;
}
.topName{
  width:0.8rem;
  font-size:0.37rem;
  word-break: normal;
  font-style:italic;
  background:-webkit-linear-gradient(bottom, #f52323,red);
  -webkit-text-fill-color:transparent;
  -webkit-background-clip:text;
  font-weight: bold;
  padding-right:0.25rem;
  border-right:1px solid $bg;
}
.topTitle{
  width:8rem;
  margin-left:0.25rem;
  line-height:0.85rem;
  font-size:0.35rem;
}
.opinionTitle{
  padding:0 0.3rem;
  background:$white;
  margin:0.2rem 0;
}
.liveMore{
    line-height: 1.1rem;
    color:#8a8a8a;
    padding-right:0.5rem;
    background:url('~@/images/circle-right-arrow.svg') no-repeat;
    background-position:1.2rem 0.35rem;
  }
</style>

