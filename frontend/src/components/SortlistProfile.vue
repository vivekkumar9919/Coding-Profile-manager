
<template>
    <div>

        <div class="topimgContainer3">
            <div class="topimageBox3">
                <div id="topheading">
                    <div id="heading1">Sortlist Profle</div>
                    <div id="headingContent"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
                        aliquam quod illo alias, commodi necessitatibus Lorem ipsum dolor sit amet.</div>
                </div>
            </div>
        </div>


        <div class="ContentBox">


            <div class="takeinpCont">
                <div class="takeinpBox">

                    <div id="formdiv">
                        <form @submit.prevent="generatedata" class="row g-3">
                            <div class="col-auto">
                                <input type="text" class="form-control" id="inputPassword2" placeholder="Codechef @username1"
                                    v-model="username">
                                <br>
                            </div>
                            <div>
                                <button @click.prevent="addusername" type="button" class="btn btn-primary mb-3">Add
                                    User</button>
                                &nbsp;&nbsp;
                                <button type="submit" class="btn btn-primary mb-3">Generate</button>
                                <!-- @click.prevent="generatedata" -->
                            </div>
                        </form>
                    </div>

                    <div id="Selction">Selection Criteria</div>
                    <div class="inpSelectCont">
                        <div id="inpSelectBox">
                            <table id="TableSelection" border="0px">
                                <thead>
                                    <tr>
                                        <th class="selectionTableHead">Stars</th>
                                        <th class="selectionTableHead">Rating</th>
                                        <th class="selectionTableHead">Highest Rating</th>
                                        <th class="selectionTableHead">Global Rank</th>
                                        <th class="selectionTableHead">Country Rank</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td> <input type="text" name="" id="" class="inp" placeholder="Stars"
                                                v-model="userInpStars"></td>
                                        <td><input type="text" name="" id="" class="inp" placeholder="Rating"
                                                v-model="userInpRating"></td>
                                        <td><input type="text" name="" id="" class="inp" placeholder="Highest Rating"
                                                v-model="userInpHRating"></td>
                                        <td><input type="text" name="" id="" class="inp" placeholder="Global Rank"
                                                v-model="userInpGRating"></td>
                                        <td><input type="text" name="" id="" class="inp" placeholder="Country Rank"
                                                v-model="userInpCRank"></td>

                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>

            <div class="userlistCont">
                <div class="userlistBox">
                    User list :- {{ userlist }}
                </div>
            </div>


            <div class="resulttableCont">
                <div class="resulttableBox">
                    <table border="2" id="mytable" class="table">

                        <tr>
                            <th>UserName</th>
                            <th>Stars</th>
                            <th>Rating</th>
                            <th>Highest Rating</th>
                            <th>Global Rank</th>
                            <th>Country Rank</th>
                            <th>Status</th>
                        </tr>



                    </table>
                </div>
            </div>
        </div>

    </div>
</template>




<script>
import axios from 'axios'

export default {
    name: 'SortlistProfile',
    data() {
        return {
            userlist: [],
            username: '',
            posts: [],
            errmsg: '',
            isPaused: false,

            userInpStars: 0,
            userInpRating: 0,
            userInpHRating: 0,
            userInpGRating: 10000000,
            userInpCRank: 10000000,

            fusername: '',
            fstars: '',
            frating: '',
            fhrating: '',
            fgrating: '',
            fcrank: '',
            fdate:'',

        }
    },

    methods: {
        addusername() {
            if (this.username) {
                this.userlist.push(this.username);
                console.log(this.username);
                console.log(this.userlist);
                document.getElementById('inputPassword2').value = "";
            }
            else {
                console.log('ok');

            }
        },



        // getPost(userid) {

        //     axios.get('https://competitive-coding-api.herokuapp.com/api/codechef/' + userid)
        //         .then((response) => {
        //             console.log("Inside the api call");
        //             console.log(response.data);
        //             this.posts = response.data

        //         })
        //         .catch((error) => {
        //             console.log(error);
        //             this.errmsg = 'Error in fetching data'

        //         })
        // },

        async generatedata() {

            let dt=new Date();
            let date=dt.getDate();
            let month=dt.getMonth();
            let year=dt.getFullYear();
            let todayDate=date+"/"+month+"/"+year;
            console.log(todayDate);
         
            console.log("generate data");
            document.getElementById('mytable').style.visibility="visible"

            for (let key in this.userlist) {
                console.log(this.userlist[key]);

                this.posts = [];
                // await  this.getPost(this.userlist[key]);
                await axios.get('https://competitive-coding-api.herokuapp.com/api/codechef/' + this.userlist[key])
                    .then((response) => {
                        console.log("Inside the api call");
                        console.log(response.data);
                        this.posts = response.data

                    })
                    .catch((error) => {
                        console.log(error);
                        this.errmsg = 'Error in fetching data'

                    })


                var tb = document.getElementById('mytable');
                var index = -1;
                var row = tb.insertRow(index);
                row.className = "statusSelected"
                // index++;
                if (this.posts.length != 0) {
                    console.log("After getpost function");
                    console.log(this.posts);
                    row.insertCell(0).textContent = `${this.userlist[key]}`

                    row.insertCell(1).textContent = `${this.posts.stars}`
                    row.insertCell(2).textContent = `${this.posts.rating}`
                    row.insertCell(3).textContent = `${this.posts.highest_rating}`
                    row.insertCell(4).textContent = `${this.posts.global_rank}`
                    row.insertCell(5).textContent = `${this.posts.country_rank}`
                    console.log(this.posts.stars[0] + this.userInpStars)
                    if (( this.posts.stars[0] >=this.userInpStars) && ( this.userInpRating <=this.posts.rating) && (this.userInpHRating <=this.posts.highest_rating ) && (this.posts.global_rank <= this.userInpGRating )&& this.posts.country_rank <= this.userInpCRank) {
                        row.insertCell(6).textContent = `Selected`;
                        // https://profile-analyzer-e500a-default-rtdb.firebaseio.com/
                        console.log('student selected');
                        console.log("test "+this.posts.global_rank +","+ this.userInpGRating );
                       await axios.post('https://profile-analyzer-e500a-default-rtdb.firebaseio.com/selecteduser.json',
                            {
                                fusername: this.userlist[key],
                                fstars: this.posts.rating,
                                frating: this.posts.rating,
                                fhrating: this.posts.highest_rating,
                                fgrating: this.posts.global_rank,
                                fcrank: this.posts.country_rank,
                                fdate:todayDate,
                            },
                        ).then((response) => {
                            console.log(response);
                        })

                    }
                    else {
                        row.insertCell(6).textContent = `Not Selected`
                    }
                }
                else {
                    console.log('post is empty');
                }

            }
        },

        formsubmited() {
            console.log("form submitted")
        }



    }
}
</script>


<style scoped>
.topimgContainer3 {
    display: flex;
    justify-content: center;
    align-content: center;
    margin-bottom: 50px;
}

#topheading {
    /* height: 130px; */
    width: 500px;
    /* border: 2px solid red; */
    position: absolute;
    left: 200px;
    top: 200px;
    padding: 20px;
}

#heading1 {
    font-size: 40px;
    font-family: cursive;
    color: white;
    background-color: rgb(2, 117, 216);
    width: fit-content;
    padding-left: 5px;
    padding-right: 5px;
    letter-spacing: 1px;
    margin-bottom: 20px;
}


.takeinpCont {
    display: flex;
    justify-content: center;
    align-content: center;
}

.topimageBox3 {
    /* border: 2px solid red; */
    height: 650px;
    width: 1530px;
    /* border: 2px solid red; */
    background-image: url('../assets/sortlist1.png');
    background-repeat: no-repeat;
    background-size: cover;

}

.ContentBox {
    padding-top: 80px;
    /* border: 2px solid red; */
    /* background-image: url('../assets/sortlist2.png'); */
    background-repeat: no-repeat;
    background-size: cover;
}

.takeinpBox {
    height: 330px;
    width: 680px;
    background: #2C3E50;
    /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #4CA1AF, #2C3E50);
    /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #4CA1AF, #2C3E50);
    border: 2px solid white;
}

.inp {
    width: 120px;
}

#msgbox {
    position: absolute;
    width: 300px;
    border: 2px solid red;

}

#mytable {
    /* margin-left: 100px; */
    margin-bottom: 100px;
}

.resulttableCont {
    display: flex;
    justify-content: center;
    align-items: center;
}

.userlistCont {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 40px;
    font-size: 20px;
    color: black;
}
#mytable{
    visibility: hidden;
}

#mytable table,
#mytable th,
#mytable td,
#mytable tr {
    border: 1px solid white;
    text-align: center;
    color: black;
    /* visibility: hidden; */
}


#mytable th,
td {
    width: 150px;
    text-align: center;
}

#mytable tr td {
    border: 1px solid black;
}

.inpSelectCont {
    display: flex;
    justify-content: center;
    align-items: center;
}

#Selction {
    text-align: center;
    color: white;
    font-size: 25px;
    margin-bottom: 20px;
}

#TableSelection {
    border: 0px;
    margin: 10px;
    /* visibility: hidden; */

}

#TableSelection tr {
    text-align: center;
}


.selectionTableHead {
    color: white;
    
}

#formdiv {
    /* border: 2px solid red; */

    margin-top: 30px;
    padding-left: 240px;
    margin-bottom: 20px;
}

.statusSelected {
    background-color: green;
    font-size: 30px;
}
</style>