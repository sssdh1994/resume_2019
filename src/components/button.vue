<template>
    <div @click='goBackPage'>
        返回上一页
    </div>
</template>
 
<script>
    export default {
        methods:{
            goBackPage(){
                this.$router.back();
            }
        }
    }
</script>
 
<style scoped>
    div{
        font-size:40px;
        color:#fbb;
        text-align:center;
    }
</style>
