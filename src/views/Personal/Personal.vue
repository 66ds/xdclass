<!--  -->
<template>
  <div class="contaniner">
    <div class="p_top">
      <div>
        <img :src="info.head_img || defaultHeadImg" alt="头像" />
        <router-link to="/login" v-if="getToken === ''">
          <p>立即登录</p>
        </router-link>
        <p v-else>{{ info.name }}</p>
      </div>
      <button v-if="getToken !=''" class="green" @click="signOut"></button>
    </div>
  </div>
</template>

<script>
import CommonFooter from "@/components/CommonFooter";
export default {
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style  lang="scss" scoped>
.containter {
  .p_top {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>