<template>
    <div class="cate_box">
        <ul class="content" v-for="(item,key) in videoDetailInfo" :key="item.id">
            <h1>第{{ key+1 }}章&nbsp;{{ item.title }}</h1>
            <li class="sub_cate" v-for="(item,sub) in videoDetailInfo[key].episodeList" :key="item.id">
                <span class="sub_title">{{ key+1 }}-{{ sub+1 }}&nbsp;{{ item.title }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "CataLog",
        props:{
            videoDetailInfo:{
                type:Array,
                require:true
            }
        }
    }
</script>

<style lang="scss" scoped>
  .cate_box{
      padding:0 15px 50px;
      background-color: #fff;
      margin:15px 0
  }
  .content {
      padding:10px;
      & h1 {
          font-size:16px;
          width:100%;
          margin-bottom: 15px;
          font-weight: bolder;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
      }
  }
  .sub_cate{
      font-size:12px;
      padding:10px 0;
      .sub_title{
          display: block;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
       }
  }
</style>