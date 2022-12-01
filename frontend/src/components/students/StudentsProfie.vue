

<template>
  <div>
    <div id="heading">WELCOME {{ this.datafromAPI.name }}</div>

    <div class="formCont" id="formContID">
      <div id="formBox">
        <div class="card card-outline-secondary" id="forminput">
          <div class="card-header" id="formheader">
            <h3 class="mb-0" style="text-align: center">Profile Information</h3>
          </div>
          <div class="card-body">
            <form
              autocomplete="off"
              class="form"
              @submit.prevent="saveprofile()"
            >
              <!-- First Name -->
              <div class="form-group row">
                <label class="col-lg-3 col-form-label form-control-label"
                  >Name</label
                >
                <div class="col-lg-9">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Name"
                    v-model="profiledata.name"
                  />
                </div>
              </div>

              <!-- codechef -->
              <div class="form-group row mt-2">
                <label class="col-lg-3 col-form-label form-control-label"
                  >Codechef username</label
                >
                <div class="col-lg-9">
                  <input
                    class="form-control"
                    type="text"
                    value=""
                    placeholder="@username"
                    v-model="profiledata.codechef"
                  />
                </div>
              </div>
              <!-- codeforces -->
              <div class="form-group row mt-2">
                <label class="col-lg-3 col-form-label form-control-label"
                  >Codeforces username</label
                >
                <div class="col-lg-9">
                  <input
                    class="form-control"
                    type="text"
                    value=""
                    placeholder="@username"
                    v-model="profiledata.codeforces"
                  />
                </div>
              </div>
              <!-- leetcode -->
              <div class="form-group row mt-2">
                <label class="col-lg-3 col-form-label form-control-label"
                  >Leetcode username</label
                >
                <div class="col-lg-9">
                  <input
                    class="form-control"
                    type="text"
                    value=""
                    placeholder="@username"
                    v-model="profiledata.leetcode"
                  />
                </div>
              </div>
              <div class="form-group row mt-2">
                <label class="col-lg-3 col-form-label form-control-label"
                  >Codechef URL</label
                >
                <div class="col-lg-9">
                  <input
                    class="form-control"
                    type="url"
                    value=""
                    placeholder="codechef url"
                    v-model="profiledata.codechefurl"
                  />
                </div>
              </div>
              <!-- codeforces -->
              <div class="form-group row mt-2">
                <label class="col-lg-3 col-form-label form-control-label"
                  >Codeforces URL</label
                >
                <div class="col-lg-9">
                  <input
                    class="form-control"
                    type="url"
                    value=""
                    placeholder="codeforces url"
                    v-model="profiledata.codeforcesurl"
                  />
                </div>
              </div>
              <!-- leetcode -->
              <div class="form-group row mt-2">
                <label class="col-lg-3 col-form-label form-control-label"
                  >Leetcode URL</label
                >
                <div class="col-lg-9">
                  <input
                    class="form-control"
                    type="url"
                    value=""
                    placeholder="leetcode url"
                    v-model="profiledata.leetcodeurl"
                  />
                </div>
              </div>

              <div class="form-group row mt-2">
                <label class="col-lg-3 col-form-label form-control-label"
                  >Language
                </label>
                <div class="col-lg-9">
                  <input
                    class="form-control"
                    type="text"
                    value=""
                    placeholder="English, Hindi etc"
                    v-model="profiledata.language"
                  />
                </div>
              </div>
              <!-- skill -->
              <div class="form-group row mt-2">
                <label class="col-lg-3 col-form-label form-control-label"
                  >Skill</label
                >
                <div class="col-lg-9">
                  <input
                    class="form-control"
                    type="text"
                    value=""
                    placeholder="Skill"
                    v-model="profiledata.skill"
                  />
                </div>
              </div>
              <!-- mobile -->
              <div class="form-group row mt-2">
                <label class="col-lg-3 col-form-label form-control-label"
                  >Mobile</label
                >
                <div class="col-lg-9">
                  <input
                    class="form-control"
                    type="number"
                    value=""
                    placeholder="Mobile"
                    v-model="profiledata.mobile"
                  />
                </div>
              </div>
              <!-- profession -->
              <div class="form-group row mt-2">
                <label class="col-lg-3 col-form-label form-control-label"
                  >Profession</label
                >
                <div class="col-lg-9">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="profession"
                    v-model="profiledata.profession"
                  />
                </div>
              </div>
              <!-- designation -->
              <div class="form-group row mt-2">
                <label class="col-lg-3 col-form-label form-control-label"
                  >Designation</label
                >
                <div class="col-lg-9">
                  <input
                    class="form-control"
                    type="text"
                    value=""
                    placeholder="Designation"
                    v-model="profiledata.designation"
                  />
                </div>
              </div>
              <!-- address -->
              <div class="form-group row mt-2">
                <label class="col-lg-3 col-form-label form-control-label"
                  >Address</label
                >
                <div class="col-lg-9">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="address"
                    v-model="profiledata.address"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label
                  class="col-lg-3 col-form-label form-control-label"
                ></label>
                <div class="col-lg-9 mt-2">
                  <button class="btn btn-danger m-3" @click="cancelfunc">
                    Cancel
                  </button>
                  <button class="btn btn-primary">Save Changes</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="profileCont" id="profileContID">
      <div id="profileBox">
        <div class="card box1">
          <div class="row">
            <div class="col-sm-6">
              <div class="card mb-4" style="width: 20rem" id="basicinfobox">
                <div class="card-body m-auto">
                  <div class="profileimg mt-1">
                    <img
                      src="../../assets/Profile_img.png"
                      alt="profileimg"
                      id="imgbox"
                    />
                  </div>
                  <h5 class="card-title mt-2" style="text-align: center">
                    {{ this.datafromAPI.name }}
                  </h5>
                  <h6
                    class="card-subtitle text-muted mt-1"
                    style="text-align: center"
                  >
                    &#60;{{ this.datafromAPI.designation }}&#62;
                  </h6>
                  <h6
                    class="card-subtitle text-muted mt-1"
                    style="text-align: center"
                  >
                    {{ this.datafromAPI.profession }}
                  </h6>
                  <div class="updatebutton">
                    <button
                      class="btn bg-primary updatebtn"
                      @click="updateformfunc()"
                    >
                      Update Profile
                    </button>
                  </div>
                  <!-- <p class="card-text" style="text-align:center;">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p> -->
                  <!-- <a href="#" class="card-link">Card link</a>
                      <a href="#" class="card-link">Another link</a> -->
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card mb-4" style="width: 25rem">
                <!-- <div class="card-header">Featured</div> -->
                <ul class="list-group list-group-flush" id="commaninfo">
                  <li class="list-group-item" id="commaninfo">
                    Full Name :- {{ this.datafromAPI.name }}
                  </li>
                  <li class="list-group-item">Email:-{{ username }}</li>
                  <li class="list-group-item" id="commaninfo">
                    Address :-{{ this.datafromAPI.address }}
                  </li>
                  <li class="list-group-item">
                    Mobile :- {{ this.datafromAPI.mobile }}
                  </li>
                  <li class="list-group-item" id="commaninfo">
                    Gender :- {{ this.datafromAPI.gender }}
                  </li>
                  <li class="list-group-item">
                    Language : -{{ this.datafromAPI.language }}
                  </li>
                  <li class="list-group-item" id="commaninfo">
                    Skill :- {{ this.datafromAPI.skill }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- box2 -->
        <div class="box2 card">
          <div class="card-group">
            <div
              class="card"
              style="margin: 20px; border: 1px solid gray"
              v-if="this.datafromAPI.codechef"
              id="codechefbox"
            >
              <div class="card-body">
                <h5 class="card-title">CodeChef</h5>
                <hr />
                <p class="card-text">
                  Username :-{{ this.datafromAPI.codechef }}
                </p>
                <p class="card-text">Stars :-{{ codechefuser.rating }}</p>
                <p class="card-text">Rating :-{{ codechefuser.rating_number }}</p>
                <p class="card-text">
                  Highest Rating :- {{ codechefuser.max_rank }}
                </p>
                <p class="card-text">
                  Global Rank :- {{ codechefuser.global_rank }}
                </p>
                <p class="card-text">
                  Country Rank :- {{ codechefuser.country_rank }}
                </p>
                <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
              </div>
            </div>
            <div
              class="card"
              style="margin: 20px; border: 1px solid gray"
              v-if="this.datafromAPI.codeforces"
              id="codeforcesbox"
            >
              <div class="card-body m-1">
                <h5 class="card-title">Codeforces</h5>
                <hr />
                <p class="card-text">
                  Username :-{{ this.profiledata.codeforces }}
                </p>
                <p class="card-text">Rating :- {{ codeforcesuser.rating }}</p>
                <p class="card-text">
                  Maximum Rating:- {{ codeforcesuser.maxRating }}
                </p>
                <p class="card-text">Rank:- {{ codeforcesuser.rank }}</p>
                <p class="card-text">
                  Maxium Rank :- {{ codeforcesuser.maxRank }}
                </p>
                <p class="card-text">
                  Contribution :- {{ codeforcesuser.contribution }}
                </p>
                <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
              </div>
            </div>
            <div
              class="card"
              style="border: 1px solid gray; margin: 20px"
              v-if="this.datafromAPI.leetcode"
              id="leetcodebox"
            >
              <div class="card-body">
                <h5 class="card-title">Leetcode</h5>
                <hr />
                <p class="card-text">
                  Username:-{{ this.profiledata.leetcode }}
                </p>

                <p class="card-text">
                  Total Problems Solved:-
                  {{ toatal_solved }}
                </p>
           
                <p class="card-text">
                  Easy Problems:- {{ easy_solved }}
                </p>
                <p class="card-text">
                  Medium Problems:- {{ medium_solved }}
                </p>
                <p class="card-text">
                  Hard Problems:- {{ hard_solved }}
                </p>
                <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
              </div>
            </div>
          </div>
        </div>


        <div class="box3 ">
             <div id="codechef" class="icon"  v-if="this.datafromAPI.codechefurl"><a v-bind:href="this.datafromAPI.codechefurl" target="_blank"><img src="../../assets/iconchef.png" alt="leetcode" class="platformicon"></a></div>
             <div id="codeforces" class="icon"  v-if="this.datafromAPI.codechefuser"><a v-bind:href="this.datafromAPI.codeforcesurl" target="_blank"><img src="../../assets/iconforces.png" alt="leetcode" class="platformicon"></a></div>
             <div id="leetcode" class="icon"  v-if="this.datafromAPI.leetcodeurl"><a v-bind:href="this.datafromAPI.leetcodeurl" target="_blank"><img src="../../assets/iconleet.png" alt="leetcode" class="platformicon"></a></div>
        </div>







      </div>

    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "StudentsProfile",
  data() {
    return {
      username: "",
      profiledata: {},
      codechefuser: "",
      codeforcesuser: "",
      leetcodeuser: "",
      datafromAPI: {},

                  contestRanking:[],
             toatal_solved:'',
             easy_solved:'',
             medium_solved:'',
             hard_solved:'',
    };
  },
  async created() {
    // getting the profile data from serve
    this.username = localStorage.getItem("email1");
    await axios
      .get(
        "api/student/profile/showing_profile/" +
          this.username
      )
      .then((response) => {
        this.datafromAPI = response.data[0];
       
        this.profiledata.name = this.datafromAPI.name;
        this.profiledata.codechef = this.datafromAPI.codechef;
        this.profiledata.codeforces = this.datafromAPI.codeforces;
        this.profiledata.leetcode = this.datafromAPI.leetcode;
        this.profiledata.codechefurl=this.datafromAPI.codechefurl;
        this.profiledata.codeforcesurl=this.datafromAPI.codeforcesurl;
        this.profiledata.leetcodeurl=this.datafromAPI.leetcodeurl;
        this.profiledata.address=this.datafromAPI.address;
        (this.profiledata.skill = this.datafromAPI.skill);
          (this.profiledata.mobile = this.datafromAPI.mobile);
          (this.profiledata.language = this.datafromAPI.language);
          (this.profiledata.profession = this.datafromAPI.profession);
          (this.profiledata.designation = this.datafromAPI.designation);
        
      })
      .catch((error) => {
        console.log(error);
        this.errmsg = "Error in fetching data";
      });

    // sending the request for codechef data
    if (this.profiledata.codechef) {
      // console.log("Sending the codechef request");
      await axios
        .get(
          "api/codechef/user/" +
            this.profiledata.codechef
        )
        .then((response) => {
          // console.log(response.data);
          this.codechefuser = response.data;
          // console.log(this.codechefuser)
        })
        .catch((error) => {
          console.log(error);
          this.errmsg = "Error in fetching data";
        });
    }

    // sending the request for codeforces data
    if (this.profiledata.codeforces) {
      // console.log("Sending the codeforces request");
      await axios
        .get(
          "https://competeapi.vercel.app/user/codeforces/" +
            this.profiledata.codeforces
        )
        .then((response) => {
          // console.log(response.data);
          this.codeforcesuser = response.data[0];
        })
        .catch((error) => {
          console.log(error);
          this.errmsg = "Error in fetching data";
        });
    }

    // sending the request for leetcode data
    if (this.profiledata.leetcode) {
      // console.log("Sending the codechef request");
      await axios
        .get(
          "api/leetcode/user/" +
            this.profiledata.leetcode
        )
        .then((response) => {
          this.leetcodeuser = response.data['data'];
          this.contestRanking=this.leetcodeuser['userContestRanking']
           this.toatal_solved=this.leetcodeuser['matchedUser']['submitStats']['acSubmissionNum'][0].count
          this.easy_solved=this.leetcodeuser['matchedUser']['submitStats']['acSubmissionNum'][1].count
          this.medium_solved=this.leetcodeuser['matchedUser']['submitStats']['acSubmissionNum'][2].count
          this.hard_solved=this.leetcodeuser['matchedUser']['submitStats']['acSubmissionNum'][3].count
        })
        .catch(() => {
          // console.log(error);
          this.errmsg2 = "Error in fetching data";
        });
    }
  },

  // before update 
 

  
  methods: {
    updateformfunc() {
      document.getElementById("formContID").style.visibility = "visible";
      document.getElementById("formContID").style.display = "flex";
      document.getElementById("profileContID").style.visibility = "hidden";
      document.getElementById("profileContID").style.display = "none";
    },
    async saveprofile() {
      // console.log(this.profiledata);
      let customConfig = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axios
        .put(
          `api/student/profile/update/` +
            localStorage.getItem("email1"),
          {
            name: this.profiledata.name,
            codechef: this.profiledata.codechef,
            codeforces: this.profiledata.codeforces,
            leetcode: this.profiledata.leetcode,
            codechefurl: this.profiledata.codechefurl,
            codeforcesurl: this.profiledata.codeforcesurl,
            leetcodeurl: this.profiledata.leetcodeurl,
            language: this.profiledata.language,
            skill: this.profiledata.skill,
            mobile: this.profiledata.mobile,
            profession: this.profiledata.profession,
            designation: this.profiledata.designation,
          },
          customConfig
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => {
          console.log(`nhi hua bhai ye rha errr ${err}`);
        });
      document.getElementById("formContID").style.visibility = "hidden";
      document.getElementById("formContID").style.display = "none";
      document.getElementById("profileContID").style.visibility = "visible";
      document.getElementById("profileContID").style.display = "flex";
      // location.reload();
      this.$router.push("/student/profile");
      // this.$router.go()
    },

    cancelfunc() {
      document.getElementById("formContID").style.visibility = "hidden";
      document.getElementById("formContID").style.display = "none";
      document.getElementById("profileContID").style.visibility = "visible";
      document.getElementById("profileContID").style.display = "flex";
    },
  },
};
</script>

<style scoped>
#heading {
  margin-top: 20px;
  text-align: center;
  font-size: 28px;
  letter-spacing: 1px;
  font-weight: 600px;
  margin-bottom: 20px;
}
.updatebutton {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}
.formCont {
  display: flex;
  justify-content: center;
  min-height: 300px;
  /* border: 2px solid red; */
  visibility: hidden;
  display: none;
}
.profileCont {
  display: flex;
  justify-content: center;
  min-height: 300px;
  margin-bottom: 50px;
  /* border: 2px solid black; */
}
#formBox {
  width: 60%;
  margin: auto;
  /* border: 2px solid green; */
  min-height: 300px;
}
#platform {
  display: flex;
}

#profileBox {
  /* border: 2px solid red; */
  width: 60%;
}
.box1 {
  /* border: 2px solid green; */
  padding-left: 4rem;
  padding-right: 4rem;
  padding-top: 2rem;
  background: #4ca1af;
  background: -webkit-linear-gradient(to right, #c4e0e5, #4ca1af);
  background: linear-gradient(to right, #c4e0e5, #4ca1af);
}
.box2,
#forminput {
  background: #4ca1af;
  background: -webkit-linear-gradient(to right, #c4e0e5, #4ca1af);
  background: linear-gradient(to right, #c4e0e5, #4ca1af);
}
#basicinfobox {
  background: #8e9eab;
  background: -webkit-linear-gradient(to right, #eef2f3, #8e9eab);
  background: linear-gradient(to right, #eef2f3, #8e9eab);
}
#commaninfo,
#codechefbox,
#codeforcesbox,
#leetcodebox,
#formheader {
  background: #8e9eab;
  background: -webkit-linear-gradient(to right, #eef2f3, #8e9eab);
  background: linear-gradient(to right, #eef2f3, #8e9eab);
}
.profileimg {
  display: flex;
  justify-content: center;
}
#imgbox {
  height: 110px;
  width: 150px;
}
.box3{
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid gray;
   background: #4ca1af;
  background: -webkit-linear-gradient(to right, #c4e0e5, #4ca1af);
  background: linear-gradient(to right, #c4e0e5, #4ca1af);

}
.icon{
  height: 50px;
  width: 50px;
  /* border: 2px solid red; */
  margin: 15px;
}
.platformicon{
  height: 49px;
  width: 49px;
  padding: 4px;
}
</style>