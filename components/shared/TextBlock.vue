<template>
    <p v-html="html"></p>
</template>

<script>
    export default {
        props: {
            text: String
        },
        computed: {
            html () {
                let html = ''
                if (this.text) {
                    this.text.split('/n').map(p => {
                        html += `<p>${p}</p>`
                    })
                }
                return html
            }
        }
    }
</script>