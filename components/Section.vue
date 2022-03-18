<template>
    <div :id="section.name" class="section" :style="content.background ? { backgroundImage: `url(${require('@/static/assets/backgrounds/' + section.name + '.png')})` } : {}">
        <SectionHeader :heading="content.heading ? content.heading : section.name" />
        <div class="text col-12 col-lg-5" :class="{'offset-lg-6': section.name === 'about'}">
            <p v-html="paragraphs">
            </p>
        </div>
        <div v-if="section.name === 'projects'" class="container py-3">
            <div class="row">
                <Project v-for="(project, index) in section.data" 
                :key="index" :project="project" 
                class="col-12 col-lg-4" />
            </div>
        </div>
        <div v-if="section.name === 'collaborators'" class="container">
            Collab
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
  height: auto;
  background-size: 100%;
  background-repeat: no-repeat;
  margin-bottom: 50px;
}

#home {
    background-size: 90%;
    background-position: right;
}
#about {
    padding-bottom: 400px;
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
    #home, #about {
        height: 100vh;
    }
    /* #about {
        height: 130vh;
    } */
}
</style>