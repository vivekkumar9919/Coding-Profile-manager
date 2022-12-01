
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
                        <div class="card-body" v-if="posts2">
                            <h5 class="card-title">Username:-{{username2}}</h5>
                            <!-- <p class="card-text" v-if="contestRanking.globalRanking">Ranking :- {{contestRanking.globalRanking}} </p> -->
                            <!-- <p class="card-text" v-if="contestRanking.rating">Rating :- {{contestRanking.rating}} </p> -->
                            <p class="card-text">Total Problems Solved :-{{toatal_solved}} </p>
                            <!-- <p class="card-text">Acceptance Rate :- {{posts2.acceptance_rate}} </p> -->
                            <p class="card-text">Easy Problems :- {{easy_solved}}/600</p>
                            <p class="card-text">Medium Problems :-{{medium_solved}}/1306 </p>
                            <p class="card-text">Hard Problems :- {{hard_solved}}/539 </p>
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
            contestRanking:[],
             toatal_solved:'',
             easy_solved:'',
             medium_solved:'',
             hard_solved:'',
           
        }
    },
    methods:{
       async getPost2(){
            document.getElementById('profile').style.visibility="visible";
            this.alink='https://leetcode.com/'+this.username2;
        //    await axios.get('https://competitive-coding-api.herokuapp.com/api/leetcode/'+this.username2)
           await axios.get('api/leetcode/user/'+this.username2)
            .then((response)=>{
                // console.log(response.data);
                this.posts2=response.data['data']
                this.contestRanking=this.posts2['userContestRanking']
                this.toatal_solved=this.posts2['matchedUser']['submitStats']['acSubmissionNum'][0].count
                this.easy_solved=this.posts2['matchedUser']['submitStats']['acSubmissionNum'][1].count
                this.medium_solved=this.posts2['matchedUser']['submitStats']['acSubmissionNum'][2].count
                this.hard_solved=this.posts2['matchedUser']['submitStats']['acSubmissionNum'][3].count
                
            })
            .catch(()=>{
            // console.log(error);
            this.errmsg2='Error in fetching data'

            })
        }
    }
}
</script>