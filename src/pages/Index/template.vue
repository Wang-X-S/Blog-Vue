<template>
  <div id="index">
    <section class="blog-posts">
      <div>
        <router-link class="item" :to="`/detail/${blog.id}`" v-for="blog in blogs">
          <figure class="avatar">
            <img
              :src="blog.user.avatar"
              :alt="blog.user.username"/>
            <figcaption>{{blog.user.username}}</figcaption>

          </figure>
          <h3>{{blog.title}} <span>{{friendlyDate(blog.updatedAt)}}</span></h3>
          <p>{{blog.description}}</p>
        </router-link>
      </div>
    </section>
    <section class="pagination">
      <el-pagination
        layout="prev, pager, next"
        small
        :total="total/2"
        @current-change="onPageChanged">
      </el-pagination>
    </section>
  </div>
</template>

<script src="./template.js"></script>

<style scoped lang="scss" src="./template.scss"></style>
