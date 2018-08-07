<template>
  <div>
    <div class="live">
      <div class="liveTab line">
        <van-tabs v-model="active" swipeable :line-width="50">
          <van-tab v-for="item in liveTab" :key="item.id" :title="item.text"></van-tab> 
        </van-tabs>
      </div>
      <div class="liveMore fr">查看更多</div>
    </div>
    <div class="list-item" v-for="(item,index) in activeRoom" :key="item.id" v-if="index <=2">
        <div class="title">{{item.todaysubject}}</div>
        <div class="line2 clear">
          <div class="photo fl"><img :src="item._teacherPhoto" alt=""></div>
          <div class="msg fl">
            <div class="name">{{item.title}}</div>
            <div class="speciality">
              <span class="speciality-item" v-for="item in item._speciality" :key="item">{{item}}</span>
            </div>
          </div>
        </div>
        <div class="line3 clear">
          <div class="liveStatus fl" :class="{isLive:!item.status}"><i class="isLive-icon"></i>{{item.liveText}}</div>
          <div class="liveSeeNum fl">{{item.popularity}}人参与</div>
        </div>
    </div>
  </div>
</template>
<script>
import {Tab,Tabs,Icon} from 'vant';
import {liveTab} from '../data-type';
import {mapState} from 'vuex';
export default{
  components:{
    [Tab.name]:Tab,
    [Tabs.name]:Tabs,
    [Icon.name]:Icon,
  },
  data(){
    return {
      active:0,
      liveTab,
    }
  },
  computed:{
    ...mapState({
      activeRoom:state => state.live.activeRoom
    })
  },
  mounted(){
    // this.$store.dispatch('getLiveList')
  }
}
</script>
<style lang="scss">
@import '~@/style/base.scss';
.live{
  padding:0 0.3rem;
  background:$white;
  margin:0.2rem 0;
  .liveTab{
    width:2rem;
  }
  .liveMore{
    line-height: 1.1rem;
    color:#8a8a8a;
    padding-right:0.5rem;
    background:url('~@/images/circle-right-arrow.svg') no-repeat;
    background-position:1.2rem 0.35rem;
  }
}
.list-item{
  width:9.4rem;
  margin:0.2rem auto;
  background:$white;
  border-radius:4px;
  box-shadow: 1px 0px 3px 3px #e9e9e9;
  .title{
    padding:0.3rem;
    font-weight:bold;
    font-size:0.34rem;
  }
  .line2{
    padding:0 0.3rem 0.3rem 0.3rem;
    border-bottom:1px solid #e7e7e7;
  }
  .line3{
    padding:0.3rem;
    color:$colorFont;
  }
  .photo{
    width:1rem;
    height:1rem;
    border-radius:50%;
    overflow: hidden;
    img{
      width:100%;
    }
  }
}
.list-item:active{
  background: rgba(0, 0, 0, .05) !important;
}
.msg{
  margin-left:0.4rem;
}
.name{
  font-size:0.32rem;
  margin:0 0.1rem 0.1rem 0.1rem;
}
.speciality-item{
  display:inline-block;
  padding:0.05rem 0.08rem;
  background:#38a5f2;
  color:$white;
  border-radius:2px;
  font-size:0.28rem;
  margin:0.1rem 0.1rem 0.1rem 0;
}
.liveStatus{
margin-right:1.5rem;
}
.liveStatus .isLive-icon{
  display:inline-block;
  width:0.4rem;
  height:0.4rem;
  background:url('http://www.yuetougu.com/public/v2/index/images/hot-live.png') no-repeat;
  background-position: -104px -1px;
  margin-right:0.1rem;
  position:relative;
  top:0.02rem;
}

.liveStatus.isLive .isLive-icon{
  display:inline-block;
  width:0.5rem;
  height:0.4rem;
  background:url('http://www.yuetougu.com/public/v2/index/images/zb.gif') no-repeat;
  margin-right:0.1rem;
}
.liveSeeNum{
  background:url('~@/images/icon-eye-open.png') no-repeat;
  background-size:0.5rem;
  padding-left:0.6rem;
  background-position:0 0.05rem;
  margin-right:1.5rem;
  position: relative;
  top:0.06rem;
}
</style>

