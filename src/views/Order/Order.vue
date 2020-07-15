<!--  -->
<template>
    <div class="main">
        <div class="list" v-if="orderList.length > 0">
            <div class="box" v-for="(item,index) in orderList" :key="index">
                <router-link :to="{path:'/coursedetail',query:{video_id:item.videoId}}">
                    <div class="smallbox">
                        <div class="imgdiv">
                            <img :src="item.videoImg" alt="qianbing课程图片"/>
                        </div>
                        <div class="textdiv">
                           <p class="title">{{ item.videoTitle }}</p>
                           <p class="price">￥:&nbsp;&nbsp; {{ (item.totalFee/100).toFixed(2)}}</p>
                        </div>
                    </div>

                </router-link>
            </div>
        </div>
        <div class="no_order" v-else>
            <p>暂未购买课程</p>
        </div>
    </div>
</template>

<script>
    import { userVideoOrderListApi } from "@/api/getData";
    export default {
        data() {
            return {
                orderList: []
            };
        },

        created() {},

        mounted() {
            this.getOrderList()
        },
        methods: {
            //获取订单列表
            async getOrderList() {
                try {
                    const result = await userVideoOrderListApi(this.$store.state.token);
                    if (result.data.code == 0) {
                        this.orderList = result.data.data;
                    }
                } catch (e) {
                    console.log(e);
                }
            }
        }
    };
</script>
<style lang="scss" scoped>
    .list {
        padding: 0 20px;
    }

    // 视频个体
    .box {
        padding: 20px 0;
        background-color: #fff;
        border-bottom: 1px solid #ddd;
        // 标题
        .title {
            font-size: 14px;
            margin-bottom: 15px;
        }
        // 订单详情
        .smallbox {
            //flex左右排列，两端对齐
            display: flex;
            justify-content: space-between;
            .imgdiv {
                width: 90px;
                height: 60px;
                flex-shrink: 0;
                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 8px;
                    box-shadow: 0 4px 11px 0 rgba(43, 51, 59, 0.6); //设置图片阴影，rgba前三个参数是颜色编码，最后一个是透明度
                }
            }
            .textdiv p {
                padding-left: 10px;
            }
        }
    }

    .no_order {
        margin-top: 50px;
        text-align: center;
    }
</style>