<template>
    <div :id="section.name" class="section" :style="content.background ? { backgroundImage: `url(${require('@/static/assets/backgrounds/' + section.name + '.png')})` } : {}">
        <SectionHeader :heading="content.heading ? content.heading : section.name" />
        <div class="text col-12 col-lg-5" :class="{'offset-lg-6': section.name === 'about'}">
            <TextBlock :text="content.textblock" />
        </div>
        <div v-if="section.name === 'projects'" class="container py-3">
            <div class="row">
                <Project v-for="(project, index) in section.data" 
                :key="index" :project="project" 
                class="col-12 col-lg-4" />
            </div>
        </div>
        <div v-if="section.name === 'collaborators'" class="container position-relative">
            <Artist v-for="(artist, index) in section.data" 
            :key="index" :artist="artist" :index="index" 
             />
        </div>
        <div class="container" v-if="section.name === 'contact'">
            <ContactForm />
            <p class="mt-5 px-3">
                Based in Cape Town, South Africa
            </p>
            <p class="px-3">
                Phone number: + 27 79 342 7269
            </p>
            <p class="px-3">
                Email: <a href="mailto:franklunar@gmail.com">franklunar@gmail.com</a>
            </p>
            <p class="col-12 col-lg-6">
                <a href="https://www.facebook.com/franklunar7" target="_blank" class="mx-2">
                    <b-icon icon="facebook" width=2em height=2em variant="dark"></b-icon>
                </a>
                <a href="https://www.linkedin.com/in/frank-lunar-1870/" target="_blank" class="mx-2">
                    <b-icon icon="linkedin" width=2em height=2em variant="dark"></b-icon>
                </a>
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
    margin-top: 60px;
    height: 40vh;
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
    #home, #about, #contact {
        height: 100vh;
    }
    #home, #contact {
        background-size: 90%;
        background-position: right;
    }
}
</style>