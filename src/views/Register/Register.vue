<!--  -->
<template>
  <div class="main">
    <cube-form :model="model" @submit="submitHandler">
      <cube-form-group>
        <cube-form-item :field="fields[0]"></cube-form-item>
        <cube-form-item :field="fields[1]"></cube-form-item>
        <cube-form-item :field="fields[2]"></cube-form-item>
      </cube-form-group>
      <cube-form-group>
        <cube-button type="submit">注册</cube-button>
      </cube-form-group>
    </cube-form>
    <router-link to="/login" class="reg">登录</router-link>
  </div>
</template>

<script>
import { registerApi } from "@/api/getData";
export default {
  data() {
    return {
      model: {
        name: "",
        phone: "",
        password: ""
      },
      fields: [
        {
          type: "input",
          modelKey: "name",
          label: "用户名",
          props: {
            placeholder: "请输入用户名"
          },
          rules: {
            required: true
          },
          messages: {
            required: "用户名不能为空"
          }
        },
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
  mounted() {},
  methods: {
    //注册用户
    submitHandler(e, model) {
      e.preventDefault()
      registerApi(model.phone, model.password, model.name)
        .then(res => {
          if (res.data.code == 0) {
             const toast = this.$createToast({
              txt: "注册成功",
              type: "txt"
            });
            toast.show();
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