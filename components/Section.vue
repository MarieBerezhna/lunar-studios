<template>
    <div :id="section.name" class="section" :style="content.background ? { backgroundImage: `url(${require('@/static/assets/backgrounds/' + section.name + '.png')})` } : {}">
        <SectionHeader class="header" :heading="content.heading ? content.heading : section.name" />
        <div class="text col-12 col-lg-5" :class="{'offset-lg-6': section.name === 'about'}">
            <p v-html="paragraphs">
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            section: Object
        },
        computed : {
            content () { return this.section.data[0] ? this.section.data[0] : null},
            paragraphs () {
                let html = ''
                if (this.content.textblock) {
                    this.content.textblock.split('/n').map(p => {
                        html += `<p>${p}</p>`
                    })
                }
                return html
            }
        }
    }
</script>

<style scoped>
.section {
  height: 100vh;
  min-height: 800px;
  background-size: 100%;
  background-repeat: no-repeat;
  margin-bottom: 50px;
}
.section .header {
    width: 100%;
}
/* .section .header:nth-child(even):not(:last-child) {
    text-align: right;
} */
#contact .header {
    text-align: center;
}

#about p {
    text-align: center;
    padding: 10%;
    margin-bottom: 50px;
}
#about .offset-lg-6 {
    margin-top: 50%
}
@media screen and (min-width: 768px) {
    #about .offset-lg-6 {
        margin-top: unset
    }
}
</style>