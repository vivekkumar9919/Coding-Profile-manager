
<template>
    <div>
        <h1 class="heading">Leetcode Profile Generator</h1>
          <div class="inpContOuter">
        <div class="inpCont">
            <form class="row g-3"  @submit.prevent="getPost2()" >

                <div class="col-auto">
                    <!-- <label for="inputPassword2" class="visually-hidden">Password</label> -->
                    <input type="text" class="form-control" id="inputPassword2" placeholder="@username" v-model="username2">
                </div>
                <div class="col-auto">
                    <button class="btn btn-primary mb-3">Generate</button>
                </div>
            </form>
        </div>
          </div>

        <div class="resultCont" id="profile">
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4" id="imgbox">
                        <img src="../../assets/leetcode logo.png" class="img-fluid rounded-start" alt="img">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body" v-if="posts2.status=='Success'">
                            <h5 class="card-title">Username:-{{username2}}</h5>
                            <p class="card-text">Ranking :- {{posts2.ranking}} </p>
                            <p class="card-text">Total Problems Solved :-{{posts2.total_problems_submitted}} </p>
                            <p class="card-text">Acceptance Rate :- {{posts2.acceptance_rate}} </p>
                            <p class="card-text">Easy Problems :- {{posts2.easy_problems_submitted}}/600</p>
                            <p class="card-text">Medium Problems :-{{posts2.medium_problems_submitted}}/1306 </p>
                            <p class="card-text">Hard Problems :- {{posts2.hard_questions_solved}}/539 </p>
                            <p class="card-text">Leetcode :- <a v-bind:href="alink" target="_blank">Offical link</a></p>
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
    name: 'LeetCode',
    data(){
        return{
            posts2:[],
            errmsg2:'',
            username2:'',
            alink:'',
           
        }
    },
    methods:{
       async getPost2(){
            document.getElementById('profile').style.visibility="visible";
            this.alink='https://leetcode.com/'+this.username2;
           await axios.get('https://competitive-coding-api.herokuapp.com/api/leetcode/'+this.username2)
            .then((response)=>{
                console.log(response.data);
                console.log(this.username2);
                this.posts2=response.data
                
            })
            .catch((error)=>{
            console.log(error);
            this.errmsg2='Error in fetching data'

            })
        }
    }
}
</script>