import {mapActions} from "vuex"

export default {
 data(){
   return{
     username:'',
     password:'',
   }
 },
  methods:{
   ...mapActions(["login", "checkLogin"]),
   onLogin(){
        this.login({username:this.username,password:this.password})
          .then(()=>{
              this.$router.push(this.$route.query.redirect||'/')
          }


            )
   }
  }
}