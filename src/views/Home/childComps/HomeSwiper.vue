<template>
  <div class="swiper-container" v-if="bannerArr.length">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(banners,index) in bannerArr" :key="index">
        <a class="link_to_food" :href="banners.link">
          <div class="food_container">
            <img :src="banners.image" @load = 'imageLoad'>
          </div>
          <!-- <span>{{banners.title}}</span> -->
        </a>
      </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css';
  import { getHomeMultidata } from "network/home";
  export default {
    name: 'HomeSwiper',
    data() {
      return {
        bannerArr: []
      }
    },
    created(){
      // 1.请求多个数据
      getHomeMultidata().then(res => {
        this.bannerArr = res.data.banner.list;
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
    },
    methods: {
      imageLoad() {
        this.$bus.$emit('itemImageLoad')
      }
    }
  }
</script>

<style scoped>
  .swiper-container{
    width: 100%;
  }

  .swiper-container .swiper-wrapper{
    width: 100%;
    height: 100%;
  }

  .swiper-container .swiper-slide{
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .swiper-container .link_to_food{
    /* width: 25%; */
    font-size: 20px;
  }

  .swiper-container .food_container{
    display: block;
    width: 100%;
    text-align: center;
    padding-bottom: 10px;
    font-size: 0;
  }

  .swiper-container img{
    display: inline-block;
    width: 100%;
    /* height: 50px; */
  }

  .swiper-container span{
    display: block;
    width: 100%;
    text-align: center;
    font-size: 13px;
    color: #666;
  }

  .swiper-pagination>span.swiper-pagination-bullet-active{
    background: #02a774;
  }
  .swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction{
    bottom: 30px;
  }
</style>
