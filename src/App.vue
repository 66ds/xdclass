<template>
  <div id="app">
    <router-view />
    <common-footer></common-footer>
  </div>
</template>

<script>
  import CommonFooter from '@/components/CommonFooter'
export default {
  data(){
    return{

    }
  },
  components:{
    CommonFooter
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
