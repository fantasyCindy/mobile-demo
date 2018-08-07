<template>
<div class="opinionCategory">
    <div class="tab-item" v-for="(item,index) in opinionCategory" :key="index" :class="'tab-item' + index">
      {{item.text}}
    </div>
</div>
  
</template>
<script>
import {opinionCategory} from '../data-type'
  export default{
    data(){
      return {
        opinionCategory,
      }
    },
  }
</script>
<style lang="scss">
@import '~@/style/base.scss';
.opinionCategory{
  padding:0 0.5rem 0.3rem 0.5rem;
  background:$white;
  display:flex;
  justify-content:space-between;
}
.tab-item{
  display: inline-block;
  text-align:center;
  padding-top:1.2rem;
  font-size:12px;
}
.tab-item0{
  background:url('~@/images/money.svg') no-repeat center;
  background-size:0.7rem;
}
.tab-item1{
  background:url('~@/images/local.svg') no-repeat center;
  background-size:0.7rem;
}
.tab-item2{
  background:url('~@/images/stock.svg') no-repeat center;
  background-size:0.7rem;
}
.tab-item3{
  background:url('~@/images/clock.svg') no-repeat center;
  background-size:0.7rem;
}
.tab-item4{
  background:url('~@/images/zhanfa.svg') no-repeat center;
  background-size:0.7rem;
}
</style>

