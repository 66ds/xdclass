<template>
    <div>
        <header>
            <div class="header">
                <span @click="$router.back(-1)"><i class="cubeic-back"></i></span>
                <div class="title">
                    {{ videoInfo.title }}
                </div>
            </div>
        </header>
    </div>
</template>

<script>
    export default {
        name: "Header",
        props:{
            videoInfo:{
                required:true,
                type:Object
            }
        }
    }
</script>

<style lang="scss" scoped>
    .header {
        display: flex;
        background-color: darkblue;
        padding:10px 20px;
        color:#fff;
    }
    .cubeic-back{
        color:#fff;
        margin-right: 5px;
    }
    .title{
        flex: 1;
        font-size: 16px;
        //超出省略
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
</style>