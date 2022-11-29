<template>
    <div>
        <h1>home page</h1>
        <h1>{{this.useremail}}</h1>
    </div>
</template>

<script>
export default {
    name:'StudentHome',
    data(){
        return{
            useremail:""
        }
    }
    ,mounted(){
         this.useremail=localStorage.getItem('email')
    }
}
</script>