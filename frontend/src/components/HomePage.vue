


<template>
  <div>
    <!-- topimage conatiner -->
    <section>
      <div class="topimgContainer">
        <div class="topimageBox">
          <div id="topheading">
            <div id="heading1">Coding Profile Manager</div>
            <div id="headingContent">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae aliquam quod illo alias, commodi necessitatibus Lorem
              ipsum dolor sit amet.
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contest details constiner -->
    <div class="contestheading">
      <vue-typed-js
        :strings="['Codechef', 'Codeforces', 'Leetcode']"
        :loop="true"
        :typeSpeed="150"
        :startDelay="1000"
      >
        <h2>Upcoming contest on <span class="typing"></span></h2>
      </vue-typed-js>
    </div>

    <!--  upcoming Contest -->
    <section>
      <div id="contest"></div>
      <div class="contestcontainer">
        <div class="contestbox">
          <ul id="listofContest">
            <li v-for="details in contestdetails" :key="details.url">
              <div class="accordion" id="accordionPanelsStayOpenExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                    <button
                      class="accordion-button"
                      data-bs-target="#panelsStayOpen-collapseOne"
                      aria-expanded="true"
                    >
                      {{ details.site }}
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="panelsStayOpen-headingOne"
                  >
                    <div class="accordion-body">
                      Title :- {{ details.title }} <br />
                      Start Time :-
                      {{ startAndEndTimetoDate(details.startTime) }} <br />
                      End Time :- {{ startAndEndTimetoDate(details.endTime) }}
                      <br />
                      Duration:- {{ durationMStoHRS(details.duration) }} hrs
                      <br />
                      <!-- link={{details.url}} -->
                      Contest url:-
                      <a v-bind:href="details.url">{{ details.url }}</a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- services page -->
    <div id="services"></div>
    <section>
      <div class="servicesCont">
        <div id="Servicesheading">
          Our Services
          <center><hr style="width: 30%" /></center>
        </div>
        <div class="StudentService">
          <div class="studImgbox" id="studimgID1">
            <img src="../assets/studentprofile.gif" alt="img" />
          </div>
          <div class="studTextBOx" id="studImgID1">
            <div class="card" style="width: 25rem">
              <div class="card-body">
                <h5 class="card-title">Services for Student</h5>
                <ul>
                  <li>
                    <p class="card-text">
                      <strong><i>Make Profile:- </i></strong> Make Stunning
                      Profile using real time Profile data form codechef,
                      codeforces and leetcode
                    </p>
                  </li>
                  <li>
                    <p class="card-text">
                      <strong><i>Add Friends:- </i></strong>Add many friends
                      from different coding platoform and observe there profile
                    </p>
                  </li>
                  <li>
                    <p class="card-text">
                      <strong><i>Add Question:- </i></strong>Add all question
                      solve on different coding platofirm with a lots of
                      information
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="teacherservices">
          <div class="teachTextBOx" id="teachImgID1">
            <div class="card" style="width: 25rem">
              <div class="card-body">
                <h5 class="card-title">Services for Teacher</h5>
                <ul>
                  <li>
                    <p class="card-text">
                      <strong><i>Check Profile:- </i></strong> Teacher can check
                      the profile of codechef,codeforces and leetcode user
                    </p>
                  </li>
                  <li>
                    <p class="card-text">
                      <strong><i>Add Student:- </i></strong>Teacher can add
                      student username to observe there progress in real time
                    </p>
                  </li>
                  <li>
                    <p class="card-text">
                      <strong><i>Sortlist Student:- </i></strong>Teacher can
                      sortlist the students profile using the different
                      selection criteria and save the selected student
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="teachImgbox" id="teachimgID1">
            <img src="../assets/teacherprofile.gif" alt="img" />
          </div>
        </div>
      </div>
    </section>

    <!-- feedback form -->
       <div id="feedback"></div>
    <section>
      <div id="feedbackheading">
        Feedback
        <center><hr style="width: 30%" /></center>
      </div>
      <div class="feedbackCont">
        <div class="feedbackimg">
          <img src="../assets/feedbackimg.png" alt="" id="feedimg" />
        </div>
        <div class="formCont">
          <form @submit.prevent="feedbackfunc()" id="formID">
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                required
                v-model="feedbackinput.email"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="number"
                class="form-control"
                id="rating"
                placeholder="Rating (1-5)"
                min="1"
                max="5"
                required
                v-model="feedbackinput.rating"
              />
              <label for="rating">Rating(1-5)</label>
            </div>
            <div class="form-floating mb-3">
              <textarea
                class="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea"
                style="height: 130px"
                required
                v-model="feedbackinput.comments"
              ></textarea>
              <label for="floatingTextarea">Comments</label>
            </div>

            <div class="feedbackbtn">
              <button class="btn bg-primary">Send</button>
            </div>
          </form>
        </div>
      </div>
    </section>


    <!-- review part -->
       <div id="review"></div>
    <section>
           <div id="feedbackheading">
        Review
        <center><hr style="width: 30%" /></center>
      </div>
      <div class="reviewCont" >
           <div class="card" style="width: 15rem; margin-right:10px;" v-for="feed in feedbackdetails" :key="feed.id" >
                <div class="card-body ">
                  <div class="ImgCont"><img src="../assets/Profile_img.png" alt="img" id="imgBox"></div>
                  <center><h6 class="card-title">{{feed['email']}}</h6></center>
                   <p class="card-text" style="text-align:center;">{{feed['comments']}}</p>
                </div>
            </div>
      </div>
    </section>

    <!-- Supported platform -->
    <section>
      <div class="supportedplatformCont">
        <div id="supportText">
          We support <span><div id="greattext">Great</div></span>Coding Platform
        </div>
        <center><hr style="width: 40%; height: 2px; color: red" /></center>
        <div class="iconbox">
          <div id="codechef" class="iconimage">
            <img
              src="../assets/codechef icon1.png"
              alt="img"
              title="Codechef"
            />
          </div>
          <div id="codeforces" class="iconimage">
            <img src="../assets/codeforces1.png" alt="img" title="Codeforces" />
          </div>
          <div id="leetcode" class="iconimage">
            <img
              src="../assets/leetcode icon2.png"
              alt="ing"
              title="leetcode"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import axios from "axios";
import { VueTypedJs } from "vue-typed-js";
export default {
  name: "HomePage",
  components: {
    VueTypedJs,
  },
  data() {
    return {
      contestdetails: [],
      site: "",
      title: "",
      url: "",
      startTime: "",
      endTime: "",
      duration: "",
      feedbackdetails: [],
      feedbackinput: {},
    };
  },
  mounted() {
    axios
      .get("https://competeapi.vercel.app/contests/upcoming/")
      .then((response) => {
        // console.log(response.data);
        this.contestdetails = response.data;
      })
      .catch((err) => {
        console.log(`error occured ${err}`);
      });

    // feedback data loded
    axios
      .get("api/feedback//show_feedback")
      .then((response) => {
        console.log(response.data);
        this.feedbackdetails = response.data;
      })
      .catch((err) => {
        console.log(`err occured ${err}`);
      });
  },

  methods: {
    durationMStoHRS(time) {
      time = time / 1000;
      time = time / 3600;
      return time;
    },
    startAndEndTimetoDate(milliseconds) {
      var dt = new Date(milliseconds);
      return dt;
    },
    async feedbackfunc() {
      console.log("feedback form submitted");
  let customConfig = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axios
        .post(
          "api/feedback/send_feedback",
          {
            email: this.feedbackinput.email,
            rating: this.feedbackinput.rating,
            comments: this.feedbackinput.comments,
          },
          customConfig
        )
        .then((response) => {
          console.log(response);
        });

      document.getElementById("formID").reset();
    },
  },
};
</script>


<style scoped>
.topimgContainer,
.PlatformNameCont {
  display: flex;
  justify-content: center;
  align-content: center;
}

.topimageBox {
  /* border: 2px solid red; */
  height: 650px;
  width: 1530px;
  /* border: 2px solid red; */
  background-image: url("../assets/home1.png");
  background-repeat: no-repeat;
  background-size: cover;
}
#topheading {
  /* height: 130px; */
  width: 600px;
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
.contestheading {
  /* text-align: center; */
  display: flex;
  justify-content: center;
  font-size: 30px;
  text-transform: uppercase;
  margin-bottom: 20px;
}
.typing {
  background-color: red;
  color: white;
}
.contestcontainer {
  display: flex;
  /* border: 2px solid red; */
  justify-content: center;
}
.contestbox {
  /* background-color: rgb(216, 211, 211); */
  /* background-color: rgb(2, 117, 216); */
  width: 70%;
  /* border: 2px solid black; */
}

#listofContest {
  list-style: none;
}

.accordion {
  --bs-accordion-btn-icon: url();
  --bs-accordion-btn-active-icon: url();
}

.supportedplatformCont {
  background-image: linear-gradient(rgb(255, 255, 255) 33%, rgb(213, 217, 217));
  height: 300px;
  /* border: 2px solid black; */
  margin-top: 20px;
}
#supportText {
  margin-top: 10px;
  text-align: center;
  font-size: 31px;
}
.iconbox {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 200px;
}
.iconimage {
  height: 120px;
  width: 110px;
  /* border: 2px solid red; */
}
.iconbox img {
  height: 120px;
  width: 110px;
}
#codechef,
#codeforces,
#leetcode {
  margin-right: 50px;
}
#greattext {
  background-color: red;
  font-size: 32px;
  color: white;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 5px;
  width: fit-content;
  display: inline;
  transform: rotate(20deg);
  /* border: 2px solid black; */
}

/* services style */
#Servicesheading,
#feedbackheading {
  font-size: 48px;
  text-align: center;
  margin-top: 40px;
}
/* .StudentService {
  border:2px solid red;
} */
.teacherservices {
  margin-top: 100px;
  /* border:2px solid black; */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.StudentService {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.studImgbox,
.teachImgbox {
  /* border: 2px solid green; */
  height: 360px;
  width: 500px;
  margin: 10px;
}
/* .studTextBOx ,.teachTextBOx{
  border: 2px solid yellow;
  height: 280px;
  width: 450px;
} */
.feedbackCont {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  /* border: 2px solid black; */
  margin-top: 40px;
  background: #abbaab;
  background: -webkit-linear-gradient(to right, #ffffff, #abbaab);
  background: linear-gradient(to right, #ffffff, #abbaab);
}
.feedbackimg {
  margin: 20px;
  height: 550px;
  width: 490px;
  /* border: 2px solid black; */
}
#feedimg {
  height: 550px;
  width: 490px;
}
.formCont {
  height: 400px;
  width: 450px;
  border: 2px solid white;
  padding: 20px;
  border-radius: 5px;
}

.reviewCont{
  /* border: 2px solid red; */
  display: flex;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 20px;
  margin-bottom: 50px;
}
#imgBox{
height: 70px;
width: 70px;
}
.ImgCont{
 display: flex;
justify-content: center; 
}
</style>


