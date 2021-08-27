import blog from "../../api/blog"

export default {
  data(){
    return {
      title:'',
      description:'',
      content:'',
      blogId:null,
      atIndex:false
    }
  },
  created(){
    this.blogId = this.$route.params.blogId
    blog.getDetail({blogId:this.blogId}).then(res=>{
      console.log(res)
      this.title = res.data.title
      this.content = res.data.content
      this.atIndex = res.data.atIndex
      this.description = res.data.description
    })
  },
  methods:{
    onEdit(){
      blog.updateBlog({blogId:this.blogId},{title:this.title,content:this.content, description:this.description, atIndex:this.atIndex})
        .then(res=>{
          this.$router.push({path:`/detail/${res.data.id}`})
        }
      )
    }
  }
}