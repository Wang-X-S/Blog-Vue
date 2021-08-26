<template>
  <div id="detail">
    <span></span>
    <section class="user-info">
      <img :src="user.avatar" :alt ="user.username"
           :title="user.username" class="avatar">
      <h3>{{title}}</h3>
      <p>
        <router-link :to="`/user/${user.id}`">{{user.username}}</router-link>
        发布于{{createdAt}}
      </p>
    </section>
    <section class="article" v-html="markdown">
      {{markdown}}
    </section>
  </div>
</template>

<script src="./template.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./template.scss" lang="scss">

</style>
