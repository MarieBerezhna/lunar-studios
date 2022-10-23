<template>
    <div class="text-center p-3" >
        <div class="card my-shadow shadow-hover border-0">
        <img class="d-block mx-auto" width="auto" height="auto" :src="require(`@/static/projects/${filename}`)" alt="">
        {{ project.name }}
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            project: Object
        },
        computed: {
            filename () { return this.project.name.split(' ').join('').toLowerCase() + '.png'}
        }
    }
</script>

<style scoped>
.card img {
    height: 300px;
    width: auto;
    margin-bottom: 20px;
    margin-top: 20px;
}
.card {
    padding-bottom: 40px;
}
</style>