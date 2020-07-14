<template>
    <div class="c_wrapper">
        <div class="course">
            <div class="l_img">
                <img :src="videoInfo.coverImg" :title="videoInfo.title"/>
            </div>
            <div class="r_txt">
                <div class="txt">
                    <span>综合评分:</span>
                    <p>{{videoInfo.point}}</p>
                </div>
                <div class="txt">
                    <span>价格:</span>
                    <p>￥{{videoInfo.price/100}}</p>
                </div>
                <div class="txt">
                    <span>上线时间:</span>
                    <p>{{videoInfo.createTime}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Course",
        props:{
            videoInfo:{
                type:Object,
                required:true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .c_wrapper{
        padding: 0 14px;
    }
    .course{
        display: flex;
        margin: 14px 0;
    }
    .l_img{
        height: 80px;
        margin-right: 14px;
        & img {
            width: 102px;
            height: 100%;
            border-radius: 8px;
            box-shadow: 0 4px 11px 0 rgba(43, 51, 59, 0.6); //设置图片阴影，rgba前三个参数是颜色编码，最后一个是透明度
        }
    }
    .r_txt{
        padding:6px 0;
        font-size: 12px;
        flex: 1;
    }
    .txt{
        display: flex;
        justify-content: space-between;
        line-height: 16px;
        & p {
            flex: 1;
            color:#3bb149;
            text-align: right;
        }
    }
</style>