<template>
    <div>
        <div>
            <img :src="videoInfo.summary" class="summary"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Summary",
        props:{
            videoInfo:{
                type: Object,
                require: true
            }
        }
    }
</script>

<style lang="scss" scoped>
 .summary{
     width: 100%;
     padding-bottom: 50px;
     margin: 15px 0
 }
</style>