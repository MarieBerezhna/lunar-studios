<template>
    <div>
        <input @change="upload($event)" name="file" type="file" />
        <img v-if="src.length" :src="src" alt="uploaded">
    </div>
</template>

<script>
    export default {
        data () {
            return {
                src: ''
            }
        },
        methods: {
            async upload (e) {
                const file = e.target.files[0];
                if (!file) return;
                const formData = new FormData()
                formData.append('file', file)
                const res = await this.$axios.post('/upload', formData)
                this.src = `/assets/${res.data}`
            }
        }
    }
</script>

<style scoped>

</style>