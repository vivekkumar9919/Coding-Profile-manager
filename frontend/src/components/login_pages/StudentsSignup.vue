<template>
  <div>
    <!-- <h1>Students Register</h1> -->
    <div>
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
          <h2 class="text-center mb-4 text-primary">SignUp Form Students</h2>
                    <!-- error msg -->
          <div class="errmsg">
            <div style="color:red">{{this.errmsg}}</div>
          </div>
          <div class="errmsg">
            <div style="color:red">{{this.alreadyexist}}</div>
          </div>
          <form class="form" @submit.prevent="datapost()">
            <div class="mb-2">
              <label for="exampleInputName" class="form-label">Name</label>
              <input
                type="text"
                class="form-control border"
                id="exampleInputName"
                v-model="studentdata.name"
              />
            </div>

            <div class="mb-2">
              <label for="exampleInputEmail1" class="form-label"
                >Email address</label
              >
              <input
                type="email"
                class="form-control border"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                v-model="studentdata.email"
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
                v-model="studentdata.password"
              />
            </div>

            <div class="mb-3">
              <label for="exampleInputPassword2" class="form-label"
                >Confirm Password</label
              >
              <input
                type="password"
                class="form-control border"
                id="exampleInputPassword2"
                 v-model="studentdata.Cpassword"
              />
            </div>

            <div class="mb-3">
              <label for="exampleInputGender" class="form-label">Gender</label>
              <select
                id="exampleInputGender"
                class="border"
                v-model="studentdata.gender"
              >
                <option value="M">Male</option>
                <option value="F">Female</option>
                <option value="N">Can't say</option>
                <!-- <option value="audi">Audi</option> -->
              </select>
            </div>

            <div class="d-grid">
              <button class="btn btn-primary" type="submit">SignUp</button>
            </div>
          </form>
          <div class="mt-3">
            <p class="mb-0 text-center">
              Already have account!
              <!-- <a href="/login" class="text-primary fw-bold">Login</a> -->
              <router-link to="/login" class="text-primary fw-bold">Login</router-link>
            </p>
          </div>


        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "StudentsRegister",
  data() {
    return {
      studentdata: {},
      errmsg:'',
      alreadyexist:'',
    };
  },
  methods: {



    async datapost() {
     
 
       const passlen =this.studentdata.password.length;
       const pass1=this.studentdata.password;
       const pass2=this.studentdata.Cpassword;
        if(pass1==pass2 && passlen>8) {
      
     
      const UserRegisterData = await JSON.stringify(this.studentdata);
      console.log(`json data ${UserRegisterData}`);
      let customConfig = {
        headers: {
          "Content-Type": "application/json",
        },
      };
  
  // posting data to logindata1 (login data for student)
      await axios
        .post(
          `api/register`,
          UserRegisterData,
          customConfig
        )
        .then(async() => {
          
        // posting data for the student profile database
        await axios
        .post(
          `api/student/profile/make_profile`,
          {
            name: this.studentdata.name,
            email:this.studentdata.email,
            gender:this.studentdata.gender,
          },
          customConfig
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => {
          console.log(`nhi hua bhai ye rha errr ${err}`);
        });

        })
        .catch(() => {
           this.alreadyexist="Mail already Exist! Please login"
        });
          

        }
        else{
              this.errmsg="Password not Matched or Pass lenght is less than 8 character"
        }
        

    },
  },
};
</script>


<style scoped>
#exampleInputGender {
  margin-left: 20px;
  padding: 5px;
  border-radius: 4px;
}
.errmsg{
  text-align: center;
  margin-top: 10px;
}
</style>