<template>
  <div id="app">
    <div class="container">
      <div class="close">
        <span class="iconfont iconicon-test"></span>
      </div>
      <div class="logo">
        <span class="iconfont iconnew"></span>
      </div>
      <div class="inputs">
        <hninput
        placeholder="请输入手机号或用户名"
        v-model="user.username"
        :rules="/^1\d{10}$/"
        mes="手机号输入不合法，请输入11位手机号"></hninput>
        <hninput
        placeholder="密码"
        type="password"
        :rules="/\d/"
        v-model="user.password"
        @keydown.enter.native="login"></hninput>
      </div>
      <p class="tips">
        没有账号？
        <a href="#/register" class>去注册</a>
      </p>
      <hnbutton text="登陆" @click="login"></hnbutton>
    </div>
  </div>
</template>

<script>
import hnbutton from '@/components/hn_button.vue'
import hninput from '@/components/hn_input.vue'
import { userLogin } from '@/api/user.js'

export default {
  data () {
    return {
      user: {
        username: 10086,
        password: 123
      }
    }
  },
  components: { hnbutton, hninput },
  methods: {
    async login () {
      // 调用api方法验证登录
      let res = await userLogin(this.user)
      if (res.data.message === '登录成功') {
        console.log(res)
        // 将当前的token存储，本地存储
        localStorage.setItem('token', res.data.data.token)
        this.$router.push({ path: `personal/${res.data.data.user.id}` })
      } else {
        this.$toast.fail(res.data.message)
      }
    }
  }
}
</script>

<style lang='less' scoped>
.container {
  padding: 20px;
}

.close {
  span {
    font-size: 27 / 360 * 100vw;
  }
}

.logo {
  display: flex;
  justify-content: center;

  span {
    display: block;
    font-size: 126 / 360 * 100vw;
    color: #d81e06;
  }
}

.tips {
  text-align: right;
  margin-bottom: 20px;

  a {
    color: #3385ff;
  }
}
</style>
