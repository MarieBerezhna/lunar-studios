<template>
    <div class="container my-5">
        <div class="row">
            <div class="col-10 col-lg-6 mx-auto text0center">
                <button class="btn btn-dark" @click="login">Login</button>
            </div>
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
        },
        mounted () {
            console.log(this.$auth)
        }
    }
</script>

<style scoped>

</style>