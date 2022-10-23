<template>
    <div class="row pb-3 artist">
        <div class="col-12 col-lg-4" :class="{ 'order-lg-2 odd': odd }">
            <img :src="require(`@/static/collaborators/${img}`)" 
            :alt="artist.name" :title="artist.name">
        </div>
        <div class="col-12 col-lg-6 py-lg-5" :class="{ 'order-lg-1 offset-lg-2 odd': odd }">
            <h2 class="px-lg-4 mt-3">
                <span> {{ firstName }}</span>
                <span class="text-orange" v-if="lastName" > {{ lastName }}</span>
            </h2>

            <p v-if="artist.intro" class="d-block my-lg-5 p-lg-4">
                {{ artist.intro }}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            artist: Object,
            index: Number
        },
        computed: {
            firstName () { return this.artist.name.split(' ')[0]},
            lastName () { return this.artist.name.split(' ').length > 1 ? this.artist.name.split(' ')[1] : null},
            img () { return this.artist.name.replace(' ', '').toLowerCase() + '.png'},
            odd () { return Math.abs(this.index) % 2 === 1 }
        }
    }
</script>

<style scoped>
    img {
        width: 100%;
    }

@media screen and (min-width: 768px) {
    .artist:not(:first-child) {
        margin-top: -5%;
    }
    .odd {
        text-align: right;
    }
    img {
        width: 70%;
    }
}
</style>