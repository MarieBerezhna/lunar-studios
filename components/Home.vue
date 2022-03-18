<!-- Please remove this file from your project -->
<template>
  <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <div v-for="(section, index) in sections" :key="index">
      <Section :section="section" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    sections () { return this.$store.state.content }
  }
}
</script>
<style>

</style>
