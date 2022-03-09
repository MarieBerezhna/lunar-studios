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
                this.$auth.loginWith('google').then(res => {
                    console.log(res)
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>