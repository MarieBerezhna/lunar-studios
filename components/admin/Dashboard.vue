<template>
    <div class="container my-5">
        <div class="row my-5">
            <div v-if="!user" class="col-10 col-lg-6 mx-auto text-center">
                <NuxtLink class="navbar-brand d-block mt-5" to="/">
                    <img width="50%" height="auto" class="img rounded"
                    :src="require('../../static/assets/logo.png')" alt="Lunar Studios">
                </NuxtLink>
                <button class="d-block w-50 mx-auto btn btn-primary mt-5 mb-3" @click="login">
                <font-awesome-icon
               class="d-inline-block ml-3" :icon="faGoogle"/>
                    Login</button>
                <NuxtLink class="d-block w-50 mx-auto  btn btn-dark" to="/">
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
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
    export default {
        methods: {
            login () {
                this.$auth.loginWith('google')
            }
        },
        computed: {
            user () { return this.$auth.user },
            faGoogle () { return faGoogle }
        },
        mounted () {
            if (this.user && !this.user.admin) {
                this.$axios.get(`/check?email=${this.user.email}`).then(res => {
                    this.$store.commit('set_admin', res.data)
                })
            }
        }
    }
</script>

<style scoped>

</style>