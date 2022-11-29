
<template>
  <div>
    <!-- <h1>Check  Profile</h1> -->
    <div class="topimgContainer">
      <div class="topimageBox">
        <div id="topheading">
          <div id="heading1">Coding Profile Manager</div>
          <div id="headingContent">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            aliquam quod illo alias, commodi necessitatibus Lorem ipsum dolor
            sit amet.
          </div>
        </div>
      </div>
    </div>

    <!-- Content conatiner -->
    <div class="ContentBox">
      <div class="PlatformNameCont">
        <button @click="platform = 'CodeChef'">
          <div
            class="card text-center  colorWhite"
            style="width: 10rem"
          >
            <div class="card-body">
              <h5 class="card-title">CodeChef</h5>
              <!-- <p class="card-text">With supporting</p> -->
            </div>
          </div>
        </button>

        &nbsp; &nbsp; &nbsp;
        <button @click="platform = 'LeetCode'">
          <div
            class="card text-center  colorWhite"
            style="width: 10rem"
          >
            <div class="card-body">
              <h5 class="card-title">Leetcode</h5>
            </div>
          </div>
        </button>
  &nbsp; &nbsp; &nbsp;
        <button @click="platform = 'CodeForces'">
          <div
            class="card text-center colorWhite"
            style="width: 10rem"
          >
            <div class="card-body">
              <h5 class="card-title">Codeforces</h5>
            </div>
          </div>
        </button>

   
        

      
      </div>

      <keep-alive>
        <component :is="platform" />
      </keep-alive>
    </div>


  </div>
</template>


<script>
import CodeChef from '../components/platform/CodeChef.vue'
import CodeForces from '../components/platform/CodeForces.vue'
import LeetCode from '../components/platform/LeetCode.vue'
export default {
  name: "CheckProfile",
  components:{
    CodeChef,
    LeetCode,
    CodeForces,
  },
      data(){
        return{
            platform:'CodeChef',
        }
    }
};
</script>


<style scoped>
.topimgContainer,
.PlatformNameCont {
  display: flex;
  justify-content: center;
  align-content: center;
  margin-bottom: 20px;
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
/* .ContentBox {
  border: 2px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
} */
button{
  border: 0px;
  background-color: white;
}

button:focus{
    background:olive;
}

</style>