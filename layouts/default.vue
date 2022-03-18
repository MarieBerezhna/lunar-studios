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
</style>