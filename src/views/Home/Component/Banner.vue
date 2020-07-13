<!--  -->
<template>
  <div>
    <cube-slide  :data="banners">
      <cube-slide-item
        v-for="(item, index) in banners"
        :key="index"
      >
        <a :href="item.url">
          <img :src="item.img" style="width:100%"/>
        </a>
      </cube-slide-item>
    </cube-slide>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  //获取父组件传递过来的值
  props:{
      banners:{
          type:Array,
          required:true
      }
  }
};
</script>
<style lang="scss" scoped>
/* @import url(); 引入css类 */
</style>