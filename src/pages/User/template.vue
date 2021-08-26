<template>
  <div id="user">
    <section class="user-info">
      <img :src="user.avatar" :alt="user.username" class="avatar">
      <h3>{{user.username}}</h3>
    </section>
    <section  >
      <router-link v-for="blog in blogs"  :key="blog.id" :to="`/detail/${blog.id}`">
      <div class="item">
        <div class="date">
          <span class="day">{{splitDate(blog.createdAt).date}}</span>
          <span class="month">{{splitDate(blog.createdAt).month}}月</span>
          <span class="year">{{splitDate(blog.createdAt).year}}</span>
        </div>
        <h3>{{blog.title}}</h3>
        <p>{{blog.description}}</p>
      </div>
      </router-link>
    </section>
    <section class="pagination">
      <el-pagination
        layout="prev, pager, next"
        :total="total/2"
        :current-page="page"
        @current-change="onPageChange">
      </el-pagination>
    </section>
  </div>
</template>

<script src="./template.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./template.scss" lang="scss">

</style>
