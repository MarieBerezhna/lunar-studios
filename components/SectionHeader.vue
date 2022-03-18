<template>
    <div>
        <h1 class="heading"> 
            <span>{{ textSplit[0] }}</span>
            <span>{{textSplit[1]}}</span>
        </h1>
    </div>
</template>

<script>
    export default {
        props: {
            heading: String
        },
        computed: {
            textSplit () {
                return this.heading === 'projects' ? ["Our", "projects"] : (
                    this.heading === 'collaborators' ? ["collab", "orators"] : this.heading.split(' ')
                )
            }
        }
    }
</script>

<style scoped>
.heading {
    width: 100%;
    padding: 20px 12%;
}
#projects .heading {
    text-align: right;
}
#contact .heading {
    text-align: center;
}
#collaborators span {
    display: inline-block;
    white-space: nowrap;
    margin-right: -7px;
}
span:first-child {
    text-transform: capitalize;
}
span:last-child {
    color: #faaf40
}
@media screen and (min-width: 768px) {
#collaborators span {
    margin-right: -12px;
}
}
</style>