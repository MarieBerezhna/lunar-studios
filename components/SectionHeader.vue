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
    padding-top: 20px;
    padding-left: 12%;
}
#collaborators span {
    display: inline-block;
    white-space: nowrap;
    margin-right: -12px;
}
span:first-child {
    text-transform: capitalize;
}
span:last-child {
    color: #faaf40
}
</style>