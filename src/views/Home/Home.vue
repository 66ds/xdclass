<!--  -->
<template>
  <div>
    <!--首页轮播图-->
    <home-banner :banners="banners"></home-banner>
    <!--视频列表-->
    <video-list :videoList="videoList"></video-list>
    <!--底部-->
    <common-footer></common-footer>
  </div>
</template>

<script>
import HomeBanner from "./Component/Banner";
import VideoList from "./Component/VideoList";
import CommonFooter from "@/components/CommonFooter";
import { videoBannderListApi, videoListApi } from "@/api/getData.js";
export default {
  //声明数据源
  data() {
    return {
      banners: [],
      videoList: []
    };
  },
  created() {
    
  },
  mounted() {
    this.getBannerData()
    this.getVideoList()
  },
  //注册组件
  components: {
    HomeBanner,
    VideoList,
    CommonFooter
  },
  //定义方法
  methods: {
    async getBannerData() {
      try {
        //获取轮播图列表
        const result = await videoBannderListApi()
        if (result.data.code == 0) {
          this.banners = result.data.data
        }
      }catch(error){
        console.log(error)
      }
    },
    async getVideoList(){
      try{
        const result = await videoListApi()
        if(result.data.code == 0){
          this.videoList = result.data.data
        }
      }catch(error){
        console.log(error)
      }
    }
  }
};
</script>
<style lang="scss" scoped>
/* @import url(); 引入css类 */
</style>