<template>
  <div id="login">
    <h4>用户名</h4>
    <input placeholder="用户名" v-model="username">
    <p class="error">当前用户名已注册</p>
    <h4>密码</h4>
    <input type="password" placeholder="密码" @keyup.enter="onLogin" v-model="password" >
    <p class="error">当前用户名已注册</p>
    <el-button size="medium" @click="onLogin">立即登录</el-button>
    <p class="notice">没有账号？<router-link to="/register">注册新用户</router-link></p>
  </div>
</template>

<script src="./template.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./template.scss" lang="scss">

</style>
