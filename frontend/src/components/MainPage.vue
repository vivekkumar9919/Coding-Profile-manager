<template>
    <div>
        <NavBar/>
        <router-view></router-view>
        <FooterComp/>
    </div>
</template>

<script>
import NavBar from './NavBar.vue'
import FooterComp from './FooterComp.vue'
export default {
    name:'MainPage',
  components: { NavBar ,FooterComp},
}
</script>