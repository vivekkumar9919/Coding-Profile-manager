<template>
    <div>
        <StudentNav/>
        <router-view></router-view>
        <FooterComp/>
    </div>
</template>

<script>
import StudentNav from './StudentNav.vue'
import FooterComp from '../FooterComp.vue'

export default {
    name:'StudentsMain',
    components:{ StudentNav,FooterComp}
}
</script>