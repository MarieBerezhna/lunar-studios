<template>
    <div>
        <ul class="bg-success">
            <li>Home</li>
            <li>About</li>
            <li>Works</li>
            <li>Collaborations</li>
            <li>Contact</li>
            <li></li>
        </ul>
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