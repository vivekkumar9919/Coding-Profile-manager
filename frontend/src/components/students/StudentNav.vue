<template>
    <div>
        <nav class="navbar navbar-expand-lg fixed-top" style="background-color: #70828f;">
  <div class="container-fluid">
    <a class="navbar-brand" id="navElement" href="#">Coding Profile Manager</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <!-- <a class="nav-link active" aria-current="page" href="/">Home</a> -->
          <router-link to="/" class="nav-link active" aria-current="page" id="navElement">Home</router-link>
        </li>
        <li class="nav-item">
          <!-- <a class="nav-link" href="/student/profile">Profile</a> -->
          <router-link to="profile"  class="nav-link" id="navElement">Profile</router-link>
        </li>
        <li class="nav-item">
          <!-- <a class="nav-link" href="/student/addfriend">Add Friends</a> -->
           <router-link to="addfriend"  class="nav-link" id="navElement">Add Friends</router-link>
        </li>
        <li class="nav-item">
          <!-- <a class="nav-link" href="/student/qustion_solved">Question Solved</a> -->
           <router-link to="qustion_solved"  class="nav-link" id="navElement">Question Solved</router-link>
        </li>
        <!-- <li class="nav-item">
          <a class="nav-link" href="/student/target">Target</a>
        </li> -->
        <li class="nav-item" style="cursor:pointer;">
          <a class="nav-link" @click="logoutfun" id="logoutID">Logout</a>
        </li>
   
      </ul>
    </div>
  </div>
</nav>

    </div>
</template>


<script>
export default {
    name:'StudentNav',
    methods:{
      logoutfun(){
        localStorage.removeItem('student_flag')
        localStorage.removeItem('email1')
        this.$router.push('/')
      }
    }
}
</script>


<style scoped>
#logoutID{
  color: white;
  background-color: rgb(227, 72, 72);
  border-radius: 5px;
}
#navElement{
  color: white;
}
</style>