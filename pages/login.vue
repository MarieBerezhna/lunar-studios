<template>
    <div>
        <div>
            <button @click="login">Login</button>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            login () {
                this.$auth.loginWith('google')
            }
        },
        mounted () {
            console.log(this.$auth)
        }
    }
</script>

<style lang="scss" scoped>

</style>