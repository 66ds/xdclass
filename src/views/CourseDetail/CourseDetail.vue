<template>
    <div class="detail">
        <!--详细页导杆栏-->
        <detail-header :videoInfo="videoInfo"></detail-header>

        <!--详细页面视频介绍-->
        <detail-course :videoInfo="videoInfo"></detail-course>

        <!--详细页底部栏-->
        <detail-tab :videoInfo="videoInfo" :videoDetailInfo="videoDetailInfo"></detail-tab>

        <!--购买底部栏-->
        <footer>
                <router-link :to="{path:'/pay',query:{videoId:$route.query.video_id}}">
                    <button>点击购买</button>
                </router-link>
        </footer>
    </div>
</template>

<script>
    import DetailHeader from './Component/Header'
    import DetailCourse from './Component/Course'
    import DetailTab from './Component/Tab'
    import {videoInfoByIdApi} from '@/api/getData'
    export default {
        name: "CourseDetail",
        data(){
            return{
                videoInfo:{},
                videoDetailInfo:[]
            }
        },
        components:{
            DetailCourse,
            DetailHeader,
            DetailTab
        },
        methods:{
            //获取视频详细信息
            async getVideoInfoById(videoId){
                try{
                    const result = await videoInfoByIdApi(videoId)
                    if(result.data.code == 0){
                        this.videoInfo = result.data.data
                        this.videoDetailInfo = result.data.data.chapterList
                    }
                }catch (error) {
                    console.log(error)
                }
            }
        },
        mounted() {
            this.getVideoInfoById(this.$route.query.video_id)
        }
    }
</script>

<style scoped>
  .detail{
        padding-bottom: 98px;
    }
 footer{
     position:fixed;
     width: 100%;
     z-index: 999;
     bottom: 47px;
     padding: 8px 0;
     background-color: #fff;
     box-shadow: 0 -2px 4px 0 rgba(0,0,0,0.05) ;
 }
 button{
     display: block;
     color: #fff;
     margin: 0 auto;
     background-color: #d93f30;
     height: 34px;
     line-height: 34px;
     border-radius: 15px;
     width: 80%;
     border :none
 }
</style>