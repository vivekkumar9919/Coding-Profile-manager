<template>
    <div>
        <nav class="navbar navbar-expand-lg  fixed-top" style="background-color: #70828f;">
  <div class="container-fluid">
    <a class="navbar-brand" href="#" id="navElement">Coding Profile Manager</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <!-- <a class="nav-link active" aria-current="page" href="/">Home</a> -->
           <router-link to="/"  class="nav-link" id="navElement">Home</router-link>
        </li>
        <li class="nav-item">
          <!-- <a class="nav-link" href="/teacher/check_profileA">Check Profile</a> -->
           <router-link to="check_profileA"  class="nav-link" id="navElement">Check Profile</router-link>
        </li>
        <li class="nav-item">
          <!-- <a class="nav-link" href="/teacher/makelist">Make List</a> -->
           <router-link to="makelist"  class="nav-link" id="navElement">Make List</router-link>
        </li>
        <li class="nav-item">
          <!-- <a class="nav-link" href="/teacher/sortlist">Sortlist Profile</a> -->
           <router-link to="sortlist"  class="nav-link" id="navElement">Sortlist Profile</router-link>
        </li>
   
        <!-- <li class="nav-item">
          <a class="nav-link" @click="logoutfun2" id="logoutID">Logout</a>
        </li> -->
   
      </ul>
        <div class="logoutbox">
          <a  @click="logoutfun2" id="logoutID">Logout</a>
        </div>

    </div>
  </div>
</nav>

    </div>
</template>


<script>
export default {
    name:'TeacherNav',
    methods:{
      logoutfun2(){
        localStorage.removeItem('teacher_flag')
        localStorage.removeItem('email2')
        this.$router.push('/')
      }
    }
}
</script>

<style scoped>
#navElement{
  color:white;
}

.logoutbox{
    color: white;
  background-color: rgb(227, 72, 72);
  padding: 5px;
  /* display: grid;
  align-items: flex-end; */
  float: inline-end;
   border-radius: 5px;
   cursor: pointer;
}
</style>