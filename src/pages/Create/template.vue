<template>
 <div id="edit">
   <h1>创建文章</h1>
   <h3>文章标题</h3>
   <el-input></el-input>
   <p class="msg">限30个字</p>
   <h3>内容简介</h3>
   <el-input type="textarea" rows="3"></el-input>
   <p class="msg">限30个字</p>
   <h3>文章简介</h3>
   <el-input type="textarea" rows="20"></el-input>
   <p class="msg">限30个字</p>
   <el-button>确定</el-button>
 </div>
</template>

<script src="./template.js">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./template.scss" >
</style>
