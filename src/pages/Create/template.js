export default {
  data(){
    return {

    }
  },
  methods:{
    onClick1(){
      this.$message({
        showClose: true,
        message:'这是一条消息',
        type:"success",
        duration:500
      })
    }
  }
}