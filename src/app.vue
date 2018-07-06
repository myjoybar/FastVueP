<template>
    <div id="test">{{text}}</div>
</template>

<script>
    export default {
        data(){
            return{
                text:'abc'
            }
        },
        name: "app"
    }
</script>

<style scoped>
#test{
    color: coral;
}
</style>