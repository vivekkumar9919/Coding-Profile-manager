<template>
  <div>
    <!-- <h1>students Login</h1> -->
    <div class="form">
      <div
        class="
          vh-70
          d-flex
          justify-content-center
          align-items-center
          outerContainer
        "
      >
        <div
          class="
            col-md-4
            p-5
            shadow-sm
            border
            rounded-5
            border-primary
            bg-white
          "
        >
          <h2 class="text-center mb-4 text-primary">Login Form Students</h2>
          <form @submit.prevent="getlogin()">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label"
                >Email address</label
              >
              <input
                type="email"
                class="form-control border"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                v-model="logindetails.email"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label"
                >Password</label
              >
              <input
                type="password"
                class="form-control border"
                id="exampleInputPassword1"
                v-model="logindetails.password"
              />
            </div>
            <!-- <p class="small">
              <a class="text-primary" href="forget-password.html"
                >Forgot password?</a
              >
            </p> -->
            <div class="d-grid">
              <button class="btn btn-primary" >Login</button>
            </div>
          </form>
          <div class="mt-3">
            <p class="mb-0 text-center">
              Don't have an account?
              <!-- <a href="/login/studentsinup" class="text-primary fw-bold">Sign Up</a> -->
              <!-- <a href="/login/studentsinup" class="text-primary fw-bold">Sign Up</a> -->
              <router-link to="login/studentsinup" class="text-primary fw-bold">Sign Up</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- <router-view></router-view> -->
  </div>
</template>


<script>
import axios from "axios";
export default {
  name: "StudentsLogin",
  data() {
    return {
      logindetails: {},
    };
  },
  methods: {
    async getlogin() {
      console.log(this.logindetails);
      // const UserloginData = await JSON.stringify(this.logindetails);
      // console.log(`json data ${UserRegisterData}`);
      let customConfig = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      await axios
        .get(
          `api/login/` + this.logindetails.email,
          customConfig
        )
        .then((res) => {
          if (res.status == 200 && res.data[0]['password']==this.logindetails.password) {
             
            console.log("login successufully");
                 if(localStorage.getItem('email2')){
              localStorage.setItem('email2',"");
            localStorage.setItem("student_flag", true);
            localStorage.setItem("teacher_flag",false)
            }
            localStorage.setItem("student_flag", true);
            localStorage.setItem("email1",this.logindetails.email)
            this.$router.push("/student/profile");
          } else {
            alert("  password is wrong");
          }
        }).catch((err)=>{
          console.log(err);
           alert("Email does not exit");
        })
    },
  },
};
</script>


