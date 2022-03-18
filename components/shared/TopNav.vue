<template>
    <div>
  <b-navbar class="nav" toggleable="lg" type="light" variant="white">
    <NuxtLink class="navbar-brand" to="/">
        <img width="77" height="100" :src="require('../../static/assets/logo.png')" alt="">
    </NuxtLink>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav right>
      <b-navbar-nav>
        <NuxtLink class="nav-link" @click="scroll($event)" 
        v-for="link in links" :key="link" :to="link !== 'home' ? `#${link}` : '#'">
            {{ link }}
         </NuxtLink>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <!-- <b-nav-item-dropdown right>
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown> -->
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
    </div>
</template>

<script>
    export default {
        computed: {
            loggedIn () { return this.$auth.loggedIn },
            user () { return this.$auth.user },
            links () { return this.$store.state.content.map(i => i.data && i.data.heading ? i.data.heading : i.name) }
        },
        methods: {
            scroll (e) {
                console.log(e.target)
            }
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

.nav-link {
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
@media screen and (min-width: 768px) {
    .navbar-nav {
        margin-left: 65%;
    }
    .navbar-brand img {
        margin-top: 35px;
        width: 77px;
        height: 100px;
    }
}
</style>