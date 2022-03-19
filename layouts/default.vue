<template>
    <div>
        <TopNav />
        <Nuxt />
    </div>
</template>

<script>
    export default {
        mounted () {
            this.$store.dispatch('get_content')
        }
    }
</script>

<style >
.text-orange {
    color: #faaf40
}
.my-shadow {
    box-shadow: 1px 3px 19px 4px rgba(0,0,0,0.49);
    -webkit-box-shadow: 1px 3px 19px 4px rgba(0,0,0,0.49);
    -moz-box-shadow: 1px 3px 19px 4px rgba(0,0,0,0.49);
}
.shadow-hover:hover {
    box-shadow: 1px 3px 19px 0px rgba(0,0,0,0.49);
    -webkit-box-shadow: 1px 3px 19px 0px rgba(0,0,0,0.49);
    -moz-box-shadow: 1px 3px 19px 0px rgba(0,0,0,0.49);
    cursor: pointer;
}
</style>