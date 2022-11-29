<template>
    <div>
        <TeacherNav/>
        <router-view></router-view>
        <FooterComp/>
    </div>
</template>

<script>
import TeacherNav from './TeacherNav.vue'
import FooterComp from '../FooterComp.vue'

export default {
    name:'StudentMain',
    components:{ TeacherNav,FooterComp}
}
</script>