<template>
  <div id="edit">
    <h1>创建文章</h1>
    <h3>文章标题</h3>
    <el-input v-model="title"
              maxlength="30"
              show-word-limit
    ></el-input>
    <p class="msg">限30个字</p>
    <h3>内容简介</h3>
    <el-input type="textarea" rows="3" v-model="description"
              :autosize="{ minRows: 2, maxRows: 6}"
              maxlength="200"
              show-word-limit
    ></el-input>
    <p class="msg">限30个字</p>
    <h3>文章简介</h3>
    <el-input type="textarea" rows="20" v-model="content"
              :autosize="{ minRows: 10, maxRows: 30}"
              maxlength="1000"
              show-word-limit
    ></el-input>
    <p class="msg">限30个字</p>
    <p>
      <label >是否展示到首页</label>
      <el-switch
        v-model="atIndex"
        active-color="#13ce66"
        inactive-color="#ff4949">
      </el-switch>
    </p>


    <el-button @click="onEdit" >确定</el-button>
  </div>
</template>

<script src="./template.js">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./template.scss" >
</style>
