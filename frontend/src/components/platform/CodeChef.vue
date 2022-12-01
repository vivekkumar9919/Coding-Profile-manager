<template>
    <div>
        <h1 class="heading">CodeChef Profile Generator</h1>
        <div class="inpContOuter">
        <div class="inpCont">
            <form class="row g-3"  @submit.prevent="getPost()">

                <div class="col-auto">
                    <!-- <label for="inputPassword2" >Password</label> -->
                    <input type="text" class="form-control" id="inputPassword2" placeholder="@username" v-model="username">
                </div>
                <div class="col-auto">
                    <button class="btn btn-primary mb-3" >Generate</button>
                </div>
        
            </form>
        </div>
        </div>
      
        <div class="resultCont" id="profile">
            <div class="card mb-3" style="max-width: 640px;">
                <div class="row g-0">
                    <div class="col-md-4" id="imgbox">
                        <img src="../../assets/codechef logo2.png" class="img-fluid rounded-start" alt="img">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body" v-if="posts">
                            <h5 class="card-title"> <span>({{posts.country}})</span></h5>
                            <div class="card-text "><i>Username :- {{username}}</i> </div>
                            <div class="card-text contentRow"><span>Stars :- {{posts.rating}} </span> </div>
                           
                            <div class="card-text contentRow"><span>Rating :-{{posts.rating_number}}</span>  <span>Highest Rating :- {{posts.max_rank}}</span> </div>
                            <!-- <p class="card-text">Highest Rating :- {{posts.highest_rating}} </p> -->
                            <div class="card-text contentRow"><span>Global Rank :- {{posts.global_rank}} </span> <span>Country Rank :- {{posts.country_rank}}</span></div>
                            <!-- <p class="card-text">Country Rank :- {{posts.country_rank}}</p> -->
                            <p class="card-text">CodeChef:- <a v-bind:href="alink" target="_blank">Offical Link</a></p>
                            <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
                        </div>
                        <div v-else>
                            <h2>No user found</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>


<script>
import axios from 'axios'
export default {
    name: 'CodeChef',
    data(){
        return{
            posts:[],
            errmsg:'',
            username:'',
            userdetails:'',
            totalsolved:'',
            alink:''
           
        }
    },
    methods:{
       async getPost(){
            document.getElementById('profile').style.visibility="visible";
            this.alink='https://www.codechef.com/users/'+this.username;
       
           await axios.get(`api/codechef/user/${this.username}`)
            .then((response)=>{
                // console.log(this.username);
                this.posts=response.data
                // console.log(this.posts)
                
            })
            .catch(()=>{
            // console.log(error);
            this.errmsg='Error in fetching data'

            })
        }
  
    }
}
</script>







<style>
.heading {
    text-align: center;

}
.inpContOuter{
      display: flex;
    justify-content: center;
    align-items: center;  
}

.inpCont {
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 2px solid black; */
    height: 200px;
    width: 600px;
  background: #bdc3c7;
  background: -webkit-linear-gradient(to right, #536577, #bdc3c7);
  background: linear-gradient(to right, #536577, #bdc3c7);
   

}
.resultCont{
    margin-top: 50px;
    display: flex;
    justify-content: center;
    /* visibility: hidden; */
    color: black;
}
</style>


<style scoped>
.contentRow{
    display: flex;
    justify-content: space-between;
}
</style>