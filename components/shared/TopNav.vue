<template>
    <div>
  <b-navbar class="nav" toggleable="lg" type="light" variant="white">
    <NuxtLink class="navbar-brand" to="/">
        <img width="77" height="100" class="img rounded"
        :src="require('../../static/assets/logo.png')" alt="Lunar Studios">
    </NuxtLink>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav right>
      <b-navbar-nav v-if="!user && this.route !== 'admin'">
          <li class="nav-item" v-for="link in links" :key="link">
            <NuxtLink class="nav-link"  :to="link !== 'home' ? `#${link.split(' ')[0].toLowerCase()}` : '/'">
            {{ link }}
            </NuxtLink>
          </li>
          <li class="nav-item" v-if="user">
            <NuxtLink class="nav-link" to="/admin">
              Admin
            </NuxtLink>
          </li>
      </b-navbar-nav>
      <b-navbar-nav v-else-if="user && this.route === 'admin'">
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/">
              Home
            </NuxtLink>
          </li>
          <li class="nav-item float-right">
            <NuxtLink class="nav-link text" style="cursor: unset" to="/admin">
                <span class="text-success">{{ user.name }}</span>
                <img class="avatar d-inline-block mx-3" :src="user.picture" alt="">
               <font-awesome-icon @click="logout"
               style="cursor: pointer" 
               title="log out"
               class="d-inline-block ml-3" :icon="faArrowRightFromBracket"/>
            </NuxtLink>
          </li>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
    </div>
</template>

<script>
// import { fas } from '@fortawesome/free-solid-svg-icons'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
    export default {
        computed: {
            // fas () {
            //    return fas // NOT RECOMMENDED
            // },
            route () { return this.$route.name },
            loggedIn () { return this.$auth.loggedIn },
            user () { return this.$auth.user },
            links () { return this.$store.state.content.map(i => i.data && i.data[0].heading ? i.data[0].heading : i.name) }
        },
        methods: {
          logout() {
            this.$auth.logout()
          }
        },
        mounted () {
          console.log(faArrowRightFromBracket)
        }
    }
</script>

<style scoped>
.nav {
    position: fixed;
    height: 60px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100000;
}

.nav-item {
    text-transform: capitalize;
    background: rgba(255, 255, 255, 0.85);
    text-align: center;
    font-weight: bold;
}
.navbar-brand img, .navbar-brand a {
    width: 38.5px;
    height: 50px;
}
.navbar-toggler {
    position: absolute;
    right: 5px;
}
.avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-top: -5px;
  margin-left: 10px;
}
@media screen and (min-width: 768px) {
    .navbar-nav {
        margin-left: 60%;
        position: absolute;
    }
    .navbar-brand img {
        margin-top: 35px;
        width: 77px;
        height: 100px;
    }
}
</style>