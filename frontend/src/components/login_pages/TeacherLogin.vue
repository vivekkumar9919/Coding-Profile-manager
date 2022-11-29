<template>
    <div>
        <!-- <h1>Teacher Login</h1> -->
         <div class="form">
      <div class="vh-70 d-flex justify-content-center align-items-center outerContainer">
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
          <h2 class="text-center mb-4 text-primary">Login Form Teachers</h2>
          <form @submit.prevent="getlogin2()">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label"
                >Email address</label
              >
              <input
                type="email"
                class="form-control border "
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                v-model="teacherlogin.email"
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
                v-model="teacherlogin.password"
              />
            </div>
            <div class="d-grid">
              <button class="btn btn-primary">Login</button>
            </div>
          </form>
          <div class="mt-3">
            <p class="mb-0 text-center">
              Don't have an account?
              <!-- <a href="/login/teachersignup" class="text-primary fw-bold">Sign Up</a> -->
              <router-link to="teachersignup" class="text-primary fw-bold">Sign Up</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>

    </div>
</template>


<script>
import axios from 'axios'
export default {
    name:'TeacherLogin',
    data(){
      return {
        teacherlogin:{},
      }
    },

     methods: {
    async getlogin2() {
      console.log(this.teacherlogin);
      let customConfig = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      await axios
        .get(
          `api/teacher_login/login/` + this.teacherlogin.email,
          customConfig
        )
        .then((res) => {
          if (res.status == 200 && res.data[0]['password']==this.teacherlogin.password) {
            console.log("login successufully");
            if(localStorage.getItem('email1')){
              localStorage.setItem('email1',"");
            localStorage.setItem("student_flag", false);
            localStorage.setItem("teacher_flag",true)
            }
            localStorage.setItem("email2",this.teacherlogin.email)
            localStorage.setItem("teacher_flag",true);

            this.$router.push("/teacher/check_profileA");
          } else {
            alert("Password is wrong");
          }
        }).catch((err)=>{
          console.log(err);
           alert("Email does not exit");
        })
    },
  },
}
</script>