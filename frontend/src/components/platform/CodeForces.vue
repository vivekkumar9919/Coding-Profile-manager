<template>
    <div>
        <h1 class="heading">Codeforces Profile Generator</h1>
        <div class="inpContOuter">
        <div class="inpCont">
            <form class="row g-3"  @submit.prevent="getPost()">

                <div class="col-auto">
                    <!-- <label for="inputPassword2" >Password</label> -->
                    <input type="text" class="form-control" id="inputPassword2" placeholder="@username" v-model="username">
                </div>
                <div class="col-auto">
                    <button type="submit" class="btn btn-primary mb-3">Generate</button>
                </div>
            </form>
        </div>
        </div>

        <div class="resultCont" id="profile">
            <div class="card mb-3" style="max-width: 640px;">
                <div class="row g-0">
                    <div class="col-md-4"  id="imgbox">
                        <img src="../../assets/codeforces1.png" class="img-fluid rounded-start" alt="img">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body" v-if="posts">
                            <h5 class="card-title">Name:-{{posts['firstName']}} ({{posts['country']}})</h5>
                            <p class="card-text"><i>Username :- {{username}}</i> </p>
                            <p class="card-text">Rating :- {{posts.rating}} </p>
                            <p class="card-text">Maximum Rating :- {{posts.maxRating}} </p>
                            <p class="card-text">Rank :- {{posts.rank}} </p>
                            <p class="card-text">Maxium Rank :- {{posts.maxRank}} </p>
                            <p class="card-text">Contribution :- {{posts.contribution}} </p>
                            <p class="card-text">Codeforces:- <a v-bind:href="alink" target="_blank">Offical Link</a></p>
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
    name: 'CodeForces',
    data(){
        return{
            posts:[],
            errmsg:'',
            username:'',
            alink:''
           
        }
    },
    methods:{
       async getPost(){
            document.getElementById('profile').style.visibility="visible";
            this.alink='https://codeforces.com/profile/'+this.username;
           await axios.get('api/codeforces/user/'+this.username)
            .then((response)=>{
                // console.log(response.data);
                // console.log(this.username);
                this.posts=response.data
                // console.log(this.posts);
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


.inpCont {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid white;
    border: 2px solid white;

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
    visibility: hidden;
}
#imgbox{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
}
</style>