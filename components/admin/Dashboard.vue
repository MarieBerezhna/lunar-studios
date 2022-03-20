<template>
    <div class="container my-5">
        <div class="row my-5">
            <div v-if="!user" class="col-10 col-lg-6 mx-auto text-center">
                <button class="btn btn-dark my-5" @click="login">Login</button>
            <NuxtLink class="btn btn-dark" to="/">
                Go Back
            </NuxtLink>
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
        watch: {
            user: {
                handler: function (user) {
                    console.log(user)
                }
            }
        },
        computed: {
            user () { return this.$auth.user }
        }
    }
</script>

<style scoped>

</style>