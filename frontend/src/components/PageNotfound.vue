<template>
    <div>
        <div id="page">
            <img src='../assets/pagenotfound.png' alt="img">
        </div>
        <div id="gotohome">
            <router-link to='/'>Home</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name:'PageNotfound'
}
</script>

<style scoped>

#gotohome{
    text-align: center;
    font-size: 28px;
}
#page{
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>