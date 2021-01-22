<template>
  <div class="home">
    <nav-bar class="home-nav">
      <template v-slot:center>购物街</template>
    </nav-bar>
    <div class="swiper-container" v-if="bannerArr.length">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(banners,index) in bannerArr" :key="index">
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              {{banners.image}}
              <img :src="banners.image">
            </div>
            <span>{{banners.title}}</span>
          </a>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css';
  import NavBar from 'components/common/navbar/NavBar'
  import { getHomeMultidata } from "network/home";
  export default {
    name: 'Home',
    data() {
      return {
        bannerArr:[],
        recommend:{}
      }
    },
    components:{
      NavBar
    },
    created(){
      // 1.请求多个数据
      getHomeMultidata().then(res => {
        this.bannerArr = res.data.banner.list;
        this.recommend = res.data.recommend.list;
        console.log(this.bannerArr)
        this.$nextTick(()=>{  //一旦完成界面更新，立即调用（此条语句要写在数据更新之后）
          // 创建一个swiper实例对象
          /* eslint-disable no-new */
          new Swiper('.swiper-container', {
            loop: true,//可以循环轮播
            // 如果需要分页器
            pagination: '.swiper-pagination',
            paginationClickable: true,
          })
        })
      })
    }
  }
</script>

<style scoped>
  .home-nav{
    background: var(--color-tint);
    color: #fff;
  }
</style>
