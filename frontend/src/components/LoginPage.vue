<template>
  <div>
    <!-- <h1 id>Login Page</h1> -->
    <div>
       <!-- <a href="/"><i class="fa fa-home" aria-hidden="true"></i></a> -->
        <router-link to="/" ><i class="fa fa-home" aria-hidden="true"></i></router-link>
    </div>
    <div class="outerContainerLogin ">
      <div id="studentContainer" class="loginBox">
        <!-- <a href="/login/">Students Login</a> <br /> -->
         <router-link to="/login"  class="nav-link">Students Login</router-link>
      </div>
      <div id="teacherContainer" class="loginBox">
        <!-- <a href="/login/teacher">Teacher Login</a> -->
         <router-link to="teacher"  class="nav-link">Teacher Login</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>


<script>
export default {
  name: "LoginPage",

};
</script>

<style scoped>
.outerContainerLogin {
  display: flex;
  justify-content: center;
}
.loginBox {
  height: 80px;
  width: 170px;
  border: 2px solid rgb(89, 89, 236);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  font-size: 20px;
  padding-left: 10px;
  padding-right: 10px;
  text-decoration: none;
  border-radius: 6px;
}
.fa-home{
  font-size: 40px;
  margin: 20px;
}
</style>