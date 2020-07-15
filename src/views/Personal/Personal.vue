<!--  -->
<template>
    <div class="container">
        <div class="p_top">
            <div>
                <img :src="info.head_img || defaultHeadImg" alt="头像"/>
                <router-link to="/login" v-if="getToken == ''">
                    <p>立即登录</p>
                </router-link>
                <p v-else>{{ info.name }}</p>
            </div>
            <button v-if="getToken !=''" class="green" @click="signOut">退出登录</button>
        </div>
        <common-footer></common-footer>
    </div>
</template>

<script>
    import CommonFooter from "@/components/CommonFooter";
    import {userInfoByIdApi} from "@/api/getData"
    import defaultHeadImg from '@/assets/logo.png'

    export default {
        data() {
            return {
                info: {},
                defaultHeadImg: defaultHeadImg
            };
        },
        //生命周期 - 挂载完成（访问DOM元素）
        mounted() {
            if (this.getToken != '') {
                this.getUserInfo()
            }
        },
        //监控属性的变化
        computed: {
            getToken() {
                return this.$store.state.token
            }
        },
        methods: {
            //获取个人信息
            async getUserInfo() {
                try {
                    //取出token
                    const result = await userInfoByIdApi(this.getToken);
                    if (result.data.code === 0) {
                        this.info = result.data.data
                    }
                } catch (e) {
                    console.log(e)
                }
            },
            //登出
            async signOut() {
                await this.$store.dispatch('clearToken')
                //清除token
                localStorage.removeItem("token")
                //刷新页面
                location.reload()
            }
        },
        components: {
            CommonFooter
        }
    };
</script>
<style lang="scss" scoped>
    .container {
        .p_top {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px 0;
            background-color: #2c3f54;
            div {
                text-align: center;
                img {
                    width: 60px;
                    height: 60px;
                    border-radius: 50px;
                }
                p {
                    font-size: 16px;
                    color: #fff;
                    margin-top: 10px;
                }
            }
        }
    }
    .green {
        display: block;
        background-color: #4bb149;
        border: none;
        outline: none;
        width: 80%;
        height: 40px;
        margin:20px auto 0;
        color: #fff;
        border-radius: 20px;
    }
</style>