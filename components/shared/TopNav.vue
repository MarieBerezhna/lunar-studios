<template>
    <div>
  <b-navbar toggleable="lg" type="light" variant="white">
    <b-navbar-brand href="/">
        <img width="77" height="100" :src="require('../../static/assets/logo.png')" alt="">
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav right>
      <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
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
            user () { return this.$auth.user }
        }
    }
</script>

<style scoped>
ul {
    list-style: none;
    display: flex;
    float: right;
}
 ul li {
     margin-right: 20px;
 }
</style>