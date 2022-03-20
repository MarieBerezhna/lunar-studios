<template>
    <div class="container my-5">
        <div class="row my-5">
            <div v-if="!user" class="col-10 col-lg-6 mx-auto text-center">
                <button class="btn btn-dark my-5" @click="login">Login</button>
            </div>
            <div v-else class="mt-5 col-10 col-lg-6 mx-auto text-center">
                logged in {{ user }}
            </div>
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
        computed: {
            user () { return this.$auth.user }
        },
        mounted () {
            console.log(this.user, process.env.ADMIN)
        }
    }
</script>

<style scoped>

</style>