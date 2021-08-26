import request from "../../helper/request.js"
import auth from "../../api/auth.js"
import blog from "../../api/blog.js"

window.request = request
window.auth = auth
window.blog = blog


export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      atIndex:false,
      title:'',
      description:'',
      content:''

    }
  },

  methods: {
    onCreate(){
      blog.createBlog({title:this.title,description:this.description,content:this.content,atIndex:this.atIndex})
        .then(res=>{
          this.$message.success(res.msg)
          this.$router.push(`/detail/${res.data.id}`)
        })
    }
  }
}