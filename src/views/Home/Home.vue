<template>
  <div class="home">
    <nav-bar class="home-nav">
      <template v-slot:center>购物街</template>
    </nav-bar>
    <scroll class="content" ref="scroll">
      <home-swiper/>
      <recommend-view :recommend="recommend"/>
      <feature-view/>
      <tab-control class="tabControl"
      @tabClick="tabClick"
      :title="['流行', '新款', '精选']"/>
      <good-list :goods="showGoods"/>
    </scroll>
    <!-- ul>li{列表$}*100 -->
    <back-top></back-top>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodList from 'components/content/goods/GoodList'
  import BackTop from 'components/content/backTop/BackTop'

  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'

  import { getHomeMultidata, getHomeGoods } from "network/home";
  export default {
    name: 'Home',
    data() {
      return {
        recommend:[],
        goods:{
          'pop': {page: 0,list:[]},
          'news': {page: 0,list:[]},
          'sell': {page: 0,list:[]},
        },
        currentType:'pop'
      }
    },
    components:{
      NavBar,
      TabControl,
      Scroll,
      GoodList,
      BackTop,
      HomeSwiper,
      RecommendView,
      FeatureView,
    },
    created(){
      // 1.请求多个数据
      this.getHomeMultidata()
      // 2.请求商品数据
      this.getHomeGoods('pop');
      // this.getHomeGoods('news');
      // this.getHomeGoods('sell');
    },
    mounted () {
      this.$bus.$on('itemImageLoad', () => {
        console.log('-----')
        this.$refs.scroll.scroll.refresh()
      });
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    methods: {
      /*
        事件监听方法
      */
      tabClick(index){
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break;
          case 1:
            this.currentType = 'news'
            break;
          case 2:
            this.currentType = 'sell'
            break;
        }
        console.log(index);

      },

      /*
        网络请求相关方法
      */
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.recommend = res.data.recommend.list;
          console.log(this.bannerArr)
          // this.$nextTick(()=>{  //一旦完成界面更新，立即调用（此条语句要写在数据更新之后）
          //   // 创建一个swiper实例对象
          //   /* eslint-disable no-new */
          //   new Swiper('.swiper-container', {
          //     loop: true,//可以循环轮播
          //     // 如果需要分页器
          //     pagination: '.swiper-pagination',
          //     paginationClickable: true,
          //   })
          // })
        })
      },
      getHomeGoods(type){
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          console.log(res)
          // this.goods[type].list.push(...res.data.list);
        })
      }
    },
  }
</script>

<style scoped>
  .home{
    height: 100vh;
    /* padding-bottom: 100px;
    padding-top: 44px; */
    position: relative;
  }
  .home-nav{
    background: var(--color-tint);
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 100;
  }
  .tabControl{
    position: sticky;
    z-index: 100;
    top: 44px;
  }
  .content{
    /* height: calc( 100% - 93px); */
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>
