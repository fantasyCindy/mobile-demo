<template>
<div class="opinionTab">
  <div class="item" v-for="item in opinionTab" :key="item.id"><img :src="item.src" alt="">{{item.text}}</div>
</div>
</template>
<script>
import { Row, Col } from 'vant';
import {opinionTab} from '../data-type'
export default{
  components:{
    [Row.name]:Row,
    [Col.name]:Col
  },
  data(){
    return {
      opinionTab,
    }
  }
}
</script>
<style lang="scss" scoped>
.opinionTab {
  margin:0 auto;
  text-align:center;
  font-size:.3rem;
  background:#fff;
  display:flex;
  justify-content: space-between;
  padding:0.15rem 1rem;
  img{
    width:1rem;
    margin:0 auto;
    display:block;
    margin-bottom:0.1rem;
  }
}
</style>

