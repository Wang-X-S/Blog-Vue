import request from "../../helper/request"
import auth from '../../api/auth.js'
import blog from '../../api/blog'

window.request = request
window.auth = auth
window.blog = blog


export default {
  data () {
    return {
      blogs:[],
      total:0,
      page:1,
    }
  },
  created(){
    this.page = parseInt(this.$route.query.page) || 1
    blog.getIndexBlogs({page:this.page}).then(res=>{
      this.blogs=res.data
      this.total = res.total
      this.page = res.page
    })
  },

  methods: {
      onPageChanged(newPage){
        blog.getIndexBlogs({page:newPage}).then(res=>{
          this.blogs=res.data
          this.total = res.total
          this.page = res.page
        })
      }
    }

}