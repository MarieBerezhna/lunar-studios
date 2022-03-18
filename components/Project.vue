<template>
    <div class="text-center p-3" >
        <div class="card border-0">
        <img class="d-block mx-auto w-75" width="auto" height="auto" :src="require(`@/static/projects/${filename}`)" alt="">
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
    cursor: pointer;
    box-shadow: 1px 3px 19px 4px rgba(0,0,0,0.49);
    -webkit-box-shadow: 1px 3px 19px 4px rgba(0,0,0,0.49);
    -moz-box-shadow: 1px 3px 19px 4px rgba(0,0,0,0.49);
}
.card:hover {
    box-shadow: 1px 3px 19px 0px rgba(0,0,0,0.49);
    -webkit-box-shadow: 1px 3px 19px 0px rgba(0,0,0,0.49);
    -moz-box-shadow: 1px 3px 19px 0px rgba(0,0,0,0.49);
}
</style>