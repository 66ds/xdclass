<!--  -->
<template>
  <div class="main">
    <cube-form :model="model" @submit="submitHandler">
      <cube-form-group>
        <cube-form-item :field="fields[0]"></cube-form-item>
        <cube-form-item :field="fields[1]"></cube-form-item>
      </cube-form-group>
      <cube-form-group>
        <cube-button type="submit">登录</cube-button>
      </cube-form-group>
    </cube-form>
    <router-link to="/register" class="reg">注册</router-link>
  </div>
</template>

<script>
import { loginApi } from "@/api/getData";
export default {
  data() {
    return {
      tab:'/personal',
      model: {
        phone: "",
        password: ""
      },
      fields: [
        {
          type: "input",
          modelKey: "phone",
          label: "手机号",
          rules: {
            required: true
          },
          props: {
            placeholder: "请输入手机号"
          },
          messages: {
            required: "手机号不能为空"
          }
        },
        {
          type: "input",
          modelKey: "password",
          label: "密码",
          rules: {
            required: true
          },
          props: {
            placeholder: "请输入密码",
            type: "password",
            eye: {
              open: false
            }
          },
          messages: {
            required: "密码不能为空"
          }
        }
      ]
    };
  },
  created() {},
  mounted() {
    if(this.$route.query.tab){
      this.tab = this.$route.query.tab
      this.$store.dispatch("setSlot",this.tab)
      console.log(this.$store.state.selectedLabelSlots)
    }
  },
  methods: {
    //登录用户
    submitHandler(e, model) {
      e.preventDefault();
      loginApi(model.phone, model.password)
        .then(res => {
          if (res.data.code == 0) {
            //登录成功,跳转到个人中心
            localStorage.setItem("token", res.data.msg);
            this.$store.dispatch("setTokens", res.data.msg);
            this.$router.push({ path:this.tab});
          } else {
            const toast = this.$createToast({
              txt: res.data.msg,
              type: "txt"
            });
            toast.show();
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.main {
  padding: 50px 5% 0;
  text-align: center;
}
.cube-btn {
  margin-top: 20px;
}
.reg {
  display: inline-block;
  margin-top: 30px;
  font-size: 10ox;
}
</style>