
<template>
  <div>
    <div class="topimgContainer3">
      <div class="topimageBox3">
        <div id="topheading">
          <div id="heading1">Sortlist Profle</div>
          <div id="headingContent">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            aliquam quod illo alias, commodi necessitatibus Lorem ipsum dolor
            sit amet.
          </div>
        </div>
      </div>
    </div>

    <div class="ContentBox">
      <div class="takeinpCont">
        <div class="takeinpBox">
          <div id="formdiv">
            <form @submit.prevent="generatedata" class="row g-3">
              <div class="col-auto">
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword2"
                  placeholder="Codechef @username"
                  v-model="username"
                />
                <br />
              </div>
              <div>
                <button
                  @click.prevent="addusername"
                  type="button"
                  class="btn btn-primary mb-3"
                >
                  Add User
                </button>
                &nbsp;&nbsp;
                <button type="submit" class="btn btn-primary mb-3">
                  Generate
                </button>
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
                    <td>
                      <input
                        type="text"
                        name=""
                        id=""
                        class="inp"
                        placeholder="Stars"
                        v-model="userInpStars"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name=""
                        id=""
                        class="inp"
                        placeholder="Rating"
                        v-model="userInpRating"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name=""
                        id=""
                        class="inp"
                        placeholder="Highest Rating"
                        v-model="userInpHRating"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name=""
                        id=""
                        class="inp"
                        placeholder="Global Rank"
                        v-model="userInpGRating"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name=""
                        id=""
                        class="inp"
                        placeholder="Country Rank"
                        v-model="userInpCRank"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class="userlistCont">
        <div class="userlistBox">User list :- {{ userlist }}</div>
      </div>

      <div class="resulttableCont">
        <div class="codecheflist platform" id="codechefid">
          <div class="card-header card heading">Codechef</div>
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Username</th>
                <th scope="col">Stars</th>
                <th scope="col">Rating</th>
                <th scope="col">Highest Rating</th>
                <th scope="col">Global Rank</th>
                <th scope="col">Country Rank</th>
                <th scope="col">Status</th>
                <!-- <th scope="col">Date</th> -->
              </tr>
            </thead>
            <tbody id="addrowcodechef"></tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>




<script>
import axios from "axios";

export default {
  name: "SortlistProfileall",
  data() {
    return {
      userlist: [],
      username: "",
      posts: [],
      errmsg: "",
      isPaused: false,

      userInpStars: 0,
      userInpRating: 0,
      userInpHRating: 0,
      userInpGRating: 10000000,
      userInpCRank: 10000000,

      fusername: "",
      fstars: "",
      frating: "",
      fhrating: "",
      fgrating: "",
      fcrank: "",
      fdate: "",

      status:'',
    };
  },

  methods: {
    addusername() {
      if (this.username) {
        this.userlist.push(this.username);
        console.log(this.username);
        console.log(this.userlist);
        document.getElementById("inputPassword2").value = "";
      } else {
        console.log("ok");
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
      let dt = new Date();
      let date = dt.getDate();
      let month = dt.getMonth();
      let year = dt.getFullYear();
      let todayDate = date + "/" + month + "/" + year;
      console.log(todayDate);

      console.log("generate data");
    //   document.getElementById("mytable").style.visibility = "visible";
        //  console.log("msg"+this.userlist);
      for (let key in this.userlist) {
        console.log(this.userlist[key]);

        this.posts = [];
        await axios
          .get(
            "https://competitive-coding-api.herokuapp.com/api/codechef/" +this.userlist[key]
          )
          .then((response) => {
            console.log("Inside the api call");
            console.log(response.data);
            this.posts = response.data;
          })
          .catch((error) => {
            console.log(error);
            this.errmsg = "Error in fetching data";
          });

 
        if (this.posts.length != 0) {
              
        if (
            this.posts.stars[0] >= this.userInpStars &&
            this.userInpRating <= this.posts.rating &&
            this.userInpHRating <= this.posts.highest_rating &&
            this.posts.global_rank <= this.userInpGRating &&
            this.posts.country_rank <= this.userInpCRank
          ) {
              this.status='Yes'
              console.log("yes");
          }
          else{
            this.status="No"
            console.log('No');
          }


          console.log("After getpost function");
          console.log(this.posts);
        const boxWrapper = document.getElementById("addrowcodechef");
        const box = document.createElement("tr");
        if(this.status=='Yes'){
          box.classList.add('table-success')
        }
        else{
          box.classList.add('table-danger')
        }
        box.innerHTML = `
              <td>${this.userlist[key]}</td>
              <td>${this.posts.stars}</td>
              <td>${this.posts.rating}</td>
              <td>${this.posts.highest_rating}</td>
              <td>${this.posts.global_rank}</td>
              <td>${this.posts.country_rank}</td>
              <td>${this.status}</td>
      `;
        boxWrapper.appendChild(box);
      }
               let customConfig = {
        headers: {
          "Content-Type": "application/json",
        },
      };
            await axios.post(
                "api/teacher/sortlist/savelist",
                {
                   status:this.status,
                   email:localStorage.getItem('email2'),
                   username:this.userlist[key]
                },customConfig
              )
              .then((response) => {
                console.log(response);
              });
          
          }
        
      }
    },

  
};
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
  /* background-color: rgb(2, 117, 216); */
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
  background-image: url("../../assets/sortlist1.png");
  background-repeat: no-repeat;
  background-size: cover;
}

.ContentBox {
  padding-top: 30px;
  /* border: 2px solid red; */
  /* background-image: url('../assets/sortlist2.png'); */
  background-repeat: no-repeat;
  background-size: cover;
}

.takeinpBox {
  height: 330px;
  width: 680px;
  background: #bdc3c7;
  background: -webkit-linear-gradient(to right, #536577, #bdc3c7);
  background: linear-gradient(to right, #536577, #bdc3c7);
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
  /* border: 2px solid red; */
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
/* #mytable {
  visibility: hidden;
} */

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

.platform {
  width: 85%;
  /* border: 2px solid red; */
  padding: 25px;
  margin: auto;
}
.heading
{
      background: #bdc3c7;
  background: -webkit-linear-gradient(to right, #536577, #bdc3c7);
  background: linear-gradient(to right, #536577, #bdc3c7);
  color: white;
  font-size: 20px;
  letter-spacing: 1px;
}
</style>