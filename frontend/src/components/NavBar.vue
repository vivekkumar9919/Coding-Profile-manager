<template>
    <div>
        <nav class="navbar navbar-expand-lg  fixed-top" style="background-color: #70828f; color:white;">
  <div class="container-fluid">
    <a class="navbar-brand NavElement" href="#">Coding Profile Manager</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <!-- <a class="nav-link active" aria-current="page" href="/">Home</a> -->
          <routuer-link to="/" class="nav-link NavElement" >Home</routuer-link>
        </li>
        <li class="nav-item">
          <a class="nav-link NavElement" href="#contest">Upcoming Contest</a>
          <!-- <router-link to="/Check_Profile" class="nav-link">Check Profile</router-link> -->
        </li>
        <li class="nav-item">
          <a class="nav-link NavElement" href="#services">Services</a>

        </li>
        <li class="nav-item">
          <a class="nav-link NavElement" href="#feedback">Feedback</a>
    
        </li>
        <li class="nav-item">
          <a class="nav-link NavElement" href="#review">Review</a>

        </li>
   
        <span class=" loginNavelement">
          <!-- <a class="nav-link  " href="/login">Sign/Signup</a> -->
            <router-link to="/student/profile" class="nav-link" v-if="useremail1">Profile</router-link>
            <router-link to="/teacher/check_profileA" class="nav-link" v-else-if="useremail2">Profile</router-link>
            <router-link to="/login" class="nav-link" v-else>Sign/Signup</router-link>
        </span>
      </ul>
    </div>
  </div>
</nav>

    </div>
</template>


<script>
export default {
    name:'NavBar',
    data(){
      return{
        useremail1:"",
        useremail2:"",
      }
    }
    ,mounted(){
      this.useremail1=localStorage.getItem('email1');
      this.useremail2=localStorage.getItem('email2');
    }
}
</script>


<style scoped>
.loginNavelement{
 position: relative;
  float: right;
  background-color: rgb(238, 105, 105);
  color: white;
  border-radius: 5px;
}
.NavElement{
  color: white;
}

</style>